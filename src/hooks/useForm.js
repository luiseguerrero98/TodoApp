import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: value}))
        
    };

    const onResetForm = () => {
        setFormState(initialState);
    }

  return {
    ...formState,
    onInputChange,
    onResetForm,
  }
}
