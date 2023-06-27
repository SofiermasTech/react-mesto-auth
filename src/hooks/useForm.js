import { useState, useCallback } from 'react';

function useForm() {
   const [values, setValues] = useState({});

   const handleChange = (evt) => {
      const { value, name } = evt.target;
      // const name = evt.target.name;
      // const value = evt.target.value;

      setValues({
         ...values,
         [name]: value
      });
   };

   const resetForm = useCallback(
      (newValues = {}) => {
         setValues(newValues);
      },
      [setValues]
   );

   return { values, handleChange, setValues, resetForm };
}

export default useForm;