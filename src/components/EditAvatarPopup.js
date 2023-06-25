import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
   const avatarRef = useRef();
   React.useEffect(() => { avatarRef.current.value = '' }, [isOpen]);

   function handleSubmit(e) {
      e.preventDefault();

      onUpdateAvatar({
         avatar: avatarRef.current.value,
      });
   }

   return (
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText='Сохранить'
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
      >
         <input type="url" name="avatar" id="avatar-input" placeholder="Ссылка на картинку"
            className="popup__input" minLength="2" maxLength="200" required ref={avatarRef} />
         <span id="avatar-error" className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>
   )
}

export default EditAvatarPopup;