import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
   const [selectedCard, setSelectedCard] = useState({});
   const [currentUser, setCurrentUser] = useState({
      name: "",
      about: "",
      avatar: "",
      _id: "",
      cohort: "",
   });
   const [cards, setCards] = useState([]);

   useEffect(() => {
      Promise.all([api.getUserInfo(), api.getInitialCards()])
         .then(([userData, initialCards]) => {
            setCurrentUser(userData);
            setCards(initialCards);
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }, []);


   const handleEditAvatarClick = () => {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
   };

   const handleEditProfileClick = () => {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
   };

   const handleAddPlaceClick = () => {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
   };

   const handleCardClick = card => {
      setSelectedCard(card);
   };

   const handleUpdateAvatar = (data) => {
      api
         .setUserAvatar(data)
         .then((data) => {
            setCurrentUser(data);
            closeAllPopups();
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   };

   const handleUpdateUser = (newUserInfo) => {
      api
         .setUserInfo(newUserInfo)
         .then((data) => {
            setCurrentUser(data)
            closeAllPopups();
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   };

   function handleCardLike(card) {
      const isLiked = card.likes.some((i) => i._id === currentUser._id);

      api
         .changeLikeCardStatus(card._id, !isLiked)
         .then((newCard) => {
            setCards((state) =>
               state.map((c) => (c._id === card._id ? newCard : c))
            );
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   }

   function handleCardDelete(cardId) {
      api
         .deleteCard(cardId)
         .then(() => {
            setCards((cards) => cards.filter(card => card._id !== cardId));
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   };

   const handleAddPlaceSubmit = (newData) => {
      api
         .addNewCard(newData)
         .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
         })
         .catch((err) => {
            console.log(`Ошибка: ${err}`);
         });
   };

   const closeAllPopups = () => {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setSelectedCard({});
   }

   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className="page">
            <Header />
            <Main
               onEditAvatar={handleEditAvatarClick}
               onEditProfile={handleEditProfileClick}
               onAddPlace={handleAddPlaceClick}
               onCardClick={handleCardClick}
               cards={cards}
               onCardLike={handleCardLike}
               onCardDelete={handleCardDelete}
            />
            <Footer />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

            <section className="popup popup-delete">
               <div className="popup__container">
                  <button type="button" className="popup__close" aria-label="Закрыть форму"></button>
                  <h3 className="popup__title">Вы уверены?</h3>
                  <form className="popup__form" name="deleteCard" noValidate>
                     <button type="submit" className="popup__submit" aria-label="Сохранить">Да</button>
                  </form>
               </div>
            </section>

         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
