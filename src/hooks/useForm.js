import {useState} from 'react';

export const useForm = function (initialForm, successFunction, errorFunction) {

    // states
    const [form, setForm] = useState(initialForm);
    const [invalidInputs, setInvalidInputs] = useState(initialForm);

    // handleChange
    const handleChange = (e, expression) => {
        // In case exist an regular expression to evaluar
        if(expression) {
            if(expression.test(e.target.value)) {
                setForm({
                        ...form, 
                        [e.target.name]: e.target.value
                    });

                setInvalidInputs({...invalidInputs,[e.target.name]: true});

            } else {
                setInvalidInputs({...invalidInputs, 
                    [e.target.name]: false
                });

                setForm({
                    ...form, 
                    [e.target.name]: e.target.value
                });
            }
        } else if(e.target.checked) {
            setForm({
                ...form, 
                [e.target.name]: e.target.value
            });
            
            setForm({
                ...form, 
                [e.target.name]: e.target.checked
            });
        } else {
            setForm({
                ...form, 
                [e.target.name]: e.target.value
            });
        }
    };

    // handleSubmit
    const handleSubmit = (e) => {

        e.preventDefault();

        const invalids = Object.values(invalidInputs).filter(el => el === false || el === '');
        
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
    return {form, handleChange, handleSubmit, handleReset, invalidInputs};

}



// export const useForm = function (initialForm, successFunction, errorFunction) {

//     // states
//     const [form, setForm] = useState(initialForm);
//     const [formValues, setFormValues] = useState(initialForm);

//     // handleChange
//     const handleChange = (e, expression) => {
//         // In case exist an regular expression to evaluar
//         if(expression) {
//             if(expression.test(e.target.value)) {
//                 setForm({
//                         ...form, 
//                         [e.target.name]: {value: e.target.value, valid: true}
//                     });

//                     setFormValues({...formValues, 
//                         [e.target.name]: e.target.value
//                     });

//             } else {
//                 setForm({
//                     ...form, 
//                     [e.target.name]: {value: e.target.value, valid: false}
//                 });
//             }
//         } else if(e.target.checked) {
//             setForm({
//                 ...form, 
//                 [e.target.name]: {isChecked: e.target.checked}
//             });
//         } else {
//             setForm({
//                 ...form, 
//                 [e.target.name]: {value: e.target.value, valid: true}
//             });
//         }
//     };

//     // handleSubmit
//     const handleSubmit = (e) => {

//         e.preventDefault();

//         const invalids = Object.values(form).filter((el) => el.valid === null || el.valid === false);
        
//         if(invalids.length === 0) {
//             successFunction(e);
            
//         }else {
//             errorFunction();
//         }
        
//     };

//     // handleReset
//     const handleReset = (e) => {
//         setForm(initialForm);
//         e.target.reset();
//     }

//     console.log(formValues);
//     // return
//     return {form, handleChange, handleSubmit, handleReset, formValues};

// }