"use client";

import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { TextInput, TextArea, Button } from './Input'

type Status = 'idle' | 'success' | 'error'

export default function Form() {

    const formRef = useRef<HTMLFormElement>(null);
    const [emailSending, setEmailSending] = useState(false);
    const [status, setStatus] = useState<Status>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = async (e: FormEvent) => {
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID

        if (!serviceId || !templateId || !publicId) {
            setStatus('error')
            setStatusMessage('Email service is not configured. Please contact via phone/WhatsApp.')
            return
        }
        if (!formRef.current) return

        setEmailSending(true);
        setStatus('idle')
        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicId)
            setStatus('success')
            setStatusMessage('Message sent successfully! I will get back to you soon.')
            formRef.current?.reset();
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to send message. Please try again or use WhatsApp.'
            setStatus('error')
            setStatusMessage(message)
        } finally {
            setEmailSending(false);
        }
    };


    return (
        <form ref={formRef} encType='multipart/form-data' method='POST' onSubmit={sendEmail} noValidate>
            <fieldset disabled={emailSending} className="disabled:opacity-90">
                <TextInput label='Name' name='contact_name' type='text' />
                <TextInput label='Email' name='contact_email' type='email' />
                <TextArea label='Message' name='message' />
            </fieldset>
            <div className="flex flex-col gap-3">
                <Button label={emailSending ? 'Sending...' : 'Send Email'} disabled={emailSending} />
                {status !== 'idle' && (
                    <p role="status" aria-live="polite" className={`text-sm px-3 py-2 rounded ${status === 'success' ? 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border border-green-200 dark:border-green-800' : 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800'}`}>
                        {statusMessage}
                    </p>
                )}
            </div>
        </form>
    )
}