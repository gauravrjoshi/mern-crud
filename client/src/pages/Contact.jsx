import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../config.js"

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('');

        const { email, name, message } = formData;

        // Validate form fields
        if (!email.trim() || !name.trim() || !message.trim()) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        // Handle form submission here
        // console.log(formData);

        let data = JSON.stringify(formData);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BASE_URL + '/contact',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDkwZmNhYzM3YTIzNTM0N2RlM2U2OCIsImlhdCI6MTcxMTk3NjE0NCwiZXhwIjoxNzEyMjM1MzQ0fQ.YIze6hjQtJQEhkyyGLgerj0910lxBVFoGWVttNAlNoE'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setSuccessMessage("Form submitted successfully!");
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' }); // Clear form fields
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage("An error occurred while submitting the form. Please try again later.");
            });

    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            {errorMessage && (
                <div className="mb-4 text-red-500">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="mb-4 text-green-500">
                    {successMessage}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">Name<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">Email<span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">Message<span className="text-red-500">*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500">
                    </textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;