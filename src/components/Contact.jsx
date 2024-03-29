import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        );

        // Display success toast and clear the form
        toast.success('Message sent successfully!');
        form.current.reset();
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error('Error sending email. Please try again.');
      }
    } else {
      toast.error('Please fill in all the required fields.');
    }
  };

  const handleInputChange = () => {
    // Simple validation check, adjust as needed
    const inputs = form.current.querySelectorAll('input, textarea');
    const isValid = Array.from(inputs).every(input => input.value.trim() !== '');

    setIsFormValid(isValid);
  };
  
  return (
    <div name="contact" className="w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20">
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form className='flex flex-col w-full md:w-1/1 ' ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              placeholder='Enter your name'
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={handleInputChange}
              required
            />
            <textarea
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              name="message"
              placeholder='Enter your message'
              rows="10"
              onChange={handleInputChange}
              required
            />
            <input
              type="submit"
              value="Lets talk"
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
