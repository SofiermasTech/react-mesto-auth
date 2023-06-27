import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";
import useForm from "../hooks/useForm.js";


const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
   const { values, handleChange, resetForm } = useForm();

   /*
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
*/

   useEffect(() => {
      resetForm();
   }, [resetForm, isOpen])

   const handleSubmit = (evt) => {
      evt.preventDefault();

      onAddPlace({
         name: values.name,
         link: values.link
      });
   };

   return (
      <PopupWithForm name="new-card" title="Новое место" buttonText='Создать'
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input type="text" name="name" id="place-input" placeholder="Название" minLength="2" maxLength="30"
            className="popup__input popup__input_type_place" required onChange={handleChange}
            value={values.name || ''} />
         <span id="title-error" className="popup__input-error place-input-error"></span>
         <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link" required onChange={handleChange}
            value={values.link || ''} />
         <span id="link-error" className="popup__input-error link-input-error"></span>
      </PopupWithForm>
   )
}

export default AddPlacePopup;