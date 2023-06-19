import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
   const currentUser = useContext(CurrentUserContext);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");

   const handleNameChange = (evt) => {
      setName(evt.target.value);
   };

   const handleDescriptionChange = (evt) => {
      setDescription(evt.target.value);
   };

   useEffect(() => {
      setName(currentUser.name);
      setDescription(currentUser.about);
   }, [currentUser, isOpen]);

   const handleSubmit = (evt) => {
      evt.preventDefault();

      onUpdateUser({
         author: name,
         job: description,
      });
   };

   return (
      <PopupWithForm name="edit" title="Редактировать профиль" buttonText='Сохранить'
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input type="text" name="author" id="author-input" placeholder="Имя" minLength="2" maxLength="40"
            className="popup__input  popup__input_type_name" required value={name}
            onChange={handleNameChange} />
         <span id="name-error" className="popup__input-error author-input-error"></span>
         <input type="text" name="job" id="job-input" placeholder="Вид деятельности" minLength="2" maxLength="200"
            className="popup__input popup__input_type_job" required value={description}
            onChange={handleDescriptionChange} />
         <span id="job-error" className="popup__input-error job-input-error"></span>
      </PopupWithForm>

   )
}

export default EditProfilePopup;