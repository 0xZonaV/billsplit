import {Button, TextField} from "@mui/material";
import {AuthError, AuthErrorCodes} from "@firebase/auth";
import {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {signUpStart} from "@/store/waiter/waiter-action";
import {useRouter} from "next/router";


const defaultFormFields = {
    firstName: '',
    lastName: '',
    middleName: '',
    schedule: '',
    tables: [],
    email: '',
    imgUrl: '',
    password: '',
    confirmPassword: '',
}

const WaiterRegistrationForm = () => {
    const Router = useRouter();

    const { nameOfRestaurant } = Router.query;
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { firstName, lastName, middleName, tables, schedule, imgUrl, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            dispatch(signUpStart(email, password,
                {
                    firstName: firstName,
                    imgUrl: imgUrl,
                    lastName: lastName,
                    schedule: schedule,
                    tables: tables,
                    middleName: middleName,
                }, nameOfRestaurant as string));
            resetFormFields();
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Email already in use')
            }
            console.log(error);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return(
        <>
            Waiter Admin Panel
            <form onSubmit={handleSubmit}>
                <TextField label='First name' required type='text' name='firstName' onChange={handleChange} value={firstName} />
                <TextField label='Last name' required type='text' name='lastName' onChange={handleChange} value={lastName} />
                <TextField label='Middle name' required type='text' name='middleName' onChange={handleChange} value={middleName} />
                <TextField label='schedule' required type='text' name='schedule' onChange={handleChange} value={schedule} />
                <TextField label='tables arr' required type='text' name='tables' onChange={handleChange} value={tables} />
                <TextField label='tables arr' required type='text' name='imgUrl' onChange={handleChange} value={imgUrl} />
                <TextField label='Email' required type='email' name='email' onChange={handleChange} value={email} />
                <TextField label='Password' required type='password' name='password' onChange={handleChange} value={password} />
                <TextField label='Confirm Password' required type='password' name='confirmPassword' onChange={handleChange} value={confirmPassword} />

                <Button type='submit'>Sign Up</Button>
            </form>
        </>
    )
}

export default WaiterRegistrationForm;