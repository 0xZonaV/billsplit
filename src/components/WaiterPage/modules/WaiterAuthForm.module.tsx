import {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, TextField} from "@mui/material";
import {emailSignInStart} from "@/store/waiter/waiter-action";
import {useRouter} from "next/router";


const deafultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const Router = useRouter();
    const { nameOfRestaurant } = Router.query;
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(deafultFormFields);
    const {email, password} = formFields;

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resetFormFields = () => {
            setFormFields(deafultFormFields);
        }

        try {
            dispatch(emailSignInStart(email, password, nameOfRestaurant as string));
            resetFormFields();
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with Email</span>
            <form onSubmit={handleSubmit}>
                <TextField label='Email' required type='email' name='email' onChange={handleChange} value={email} />
                <TextField label='Password' required type='password' name='password' onChange={handleChange} value={password} />

                <Button type='submit'>Sign In</Button>
            </form>
        </div>
    )
}

export default SignInForm;