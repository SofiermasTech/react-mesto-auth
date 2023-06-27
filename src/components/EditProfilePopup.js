import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";
import useForm from "../hooks/useForm.js";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
   const currentUser = useContext(CurrentUserContext);
   const { values, handleChange, resetForm, setValues } = useForm();
   /*
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");

   const handleNameChange = (evt) => {
      setName(evt.target.value);
   };

   const handleDescriptionChange = (evt) => {
      setDescription(evt.target.value);
   };
 useEffect(() => {
      currentUser ? resetForm(currentUser) : resetForm();
    }, [resetForm, isOpen, currentUser]);
  
*/
   const handleSubmit = (evt) => {
      evt.preventDefault();

      onUpdateUser({
         name: values.name,
         about: values.about,
      });
   };

   useEffect(() => {
      resetForm();
       setValues(currentUser);
    }, [currentUser, resetForm, isOpen, setValues])

   return (
      <PopupWithForm name="edit" title="Редактировать профиль" buttonText='Сохранить'
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input type="text" name="name" id="author-input" placeholder="Имя" minLength="2" maxLength="40"
            className="popup__input  popup__input_type_name" required value={values.name || ""}
            onChange={handleChange} />
         <span id="name-error" className="popup__input-error author-input-error"></span>
         <input type="text" name="about" id="job-input" placeholder="Вид деятельности" minLength="2" maxLength="200"
            className="popup__input popup__input_type_job" required value={values.about || ""}
            onChange={handleChange} />
         <span id="job-error" className="popup__input-error job-input-error"></span>
      </PopupWithForm>

   )
}

export default EditProfilePopup;