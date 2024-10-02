import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import emailjs from '@emailjs/browser'

const useContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            form_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_nzzj5aq", "template_x4tvw05", templateParams, "AN81yn0x_2zWHonE0").then(() => {
            setName("")
            setEmail("")
            setMessage("")
        })
    };

    return {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        sendEmail
    };
};

export default useContactForm;
