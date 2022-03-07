import {useState} from 'react';

export const useForm = function (initialForm, successFunction, errorFunction) {

    // states
    const [form, setForm] = useState(initialForm);

    // handleChange
    const handleChange = (e, expression) => {
        // In case exist an regular expression to evaluar
        if(expression) {
            if(expression.test(e.target.value)) {
                setForm({
                        ...form, 
                        [e.target.name]: {value: e.target.value, valid: true}
                    });
            } else {
                setForm({
                    ...form, 
                    [e.target.name]: {value: e.target.value, valid: false}
                });
            }
        } else {
            setForm({
                ...form, 
                [e.target.name]: {isChecked: e.target.checked}
            });
        }
    };

    // handleSubmit
    const handleSubmit = (e) => {

        e.preventDefault();
        const invalids = Object.values(form).filter(el => el.valid === null || el.valid === false);
        
        if(invalids.length === 0) {
            successFunction(e);
        }else {
            errorFunction();
        }
        
    };

    // handleReset
    const handleReset = (e) => {
        setForm(initialForm);
        e.target.reset();
    }

    // return
    return {form, handleChange, handleSubmit, handleReset};

}