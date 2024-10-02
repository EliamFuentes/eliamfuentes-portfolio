import React from 'react';
import useContactForm from '../hooks/useContactForm';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/contact.scss';

const Contact = () => {
    const {
        name, setName,
        email, setEmail,
        message, setMessage,
        sendEmail
    } = useContactForm();

    return (
        <div className="all-contact">
            <Header />
            <section className="contact">
                <div className="container">
                    <h1 className='title-contact'>Contato</h1>

                    <form className='form' onSubmit={sendEmail}>
                        <input
                            className='input'
                            type='text'
                            placeholder='Digite seu nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                        <input
                            className='input'
                            type='text'
                            placeholder='Digite seu email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <textarea
                            className='textarea'
                            placeholder='Digite sua mensagem...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        />
                        <input
                            className='button'
                            type='submit'
                            value="Enviar" />
                    </form>
                </div>

                <SocialMedia />
            </section>
        </div>
    );
};

export default Contact;
