import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";


const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {

   const [image, setImage] = useState('');
   const [description, setDescription] = useState('');

   useEffect(() => {
      setImage('');
      setDescription('');
   }, [isOpen])

   const handleImageChange = (evt) => {
      setImage(evt.target.value)
   };

   const handleDescriptionChange = (evt) => {
      setDescription(evt.target.value)
   };

   const handleSubmit = (evt) => {
      evt.preventDefault();

      onAddPlace({
         name: description,
         link: image
      });
   };

   return (
      <PopupWithForm name="new-card" title="Новое место" buttonText='Создать'
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input type="text" name="name" id="place-input" placeholder="Название" minLength="2" maxLength="30"
            className="popup__input popup__input_type_place" required onChange={handleDescriptionChange}
            value={description || ''} />
         <span id="title-error" className="popup__input-error place-input-error"></span>
         <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link" required onChange={handleImageChange}
            value={image || ''} />
         <span id="link-error" className="popup__input-error link-input-error"></span>
      </PopupWithForm>
   )
}

export default AddPlacePopup;