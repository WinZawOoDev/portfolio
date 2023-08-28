"use client";

import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { TextInput, TextArea, Button } from './Input'

export default function Form() {

    const formRef = useRef<HTMLFormElement>(null);
    const [emailSending, setEmailSending] = useState(false);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setEmailSending(true);
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current!,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
        ).then((result) => {
            console.log(result.text);
            setEmailSending(false);
            formRef.current?.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <form ref={formRef} encType='multipart/form-data' method='POST' onSubmit={sendEmail}>
            <fieldset>
                <TextInput label='Name' name='contact_name' type='text' />
                <TextInput label='Email' name='contact_email' type='email' />
                <TextArea label='Message' name='message' />
            </fieldset>
            <Button label='Send Email' disabled={emailSending} />
        </form>
    )
}