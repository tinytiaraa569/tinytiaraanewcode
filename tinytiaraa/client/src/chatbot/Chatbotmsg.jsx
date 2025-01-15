import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { FaComments, FaTimes, FaWhatsapp } from 'react-icons/fa'; // Import both icons
import './chatbotmsg.css'; // Assuming you're styling in a CSS file
import axios from 'axios';
import { server } from '@/server';

const Chatbotmsg = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the open/close status
  const [email, setEmail] = useState(''); // Added state to store email
  const [userInfo, setUserInfo] = useState({ name: '', phoneNumber: '', email: '' ,productQuery :'' ,feedback:'', otherQuery:''}); // State to store user info

  console.log(userInfo, 'User info in chatbotmsg');

  const toggleChatbot = () => {
    if (isOpen) {
      // Clear states when closing the chatbot
      setUserInfo({ name: '', phoneNumber: '', email: '', productQuery: '', feedback: '', otherQuery: '' });
      setEmail('');
    }
    // submitChatbotQuery()
    setIsOpen(!isOpen);
  };

  // Handle user info updates based on steps
  const handleUserInfo = (name, phoneNumber, email, productQuery, feedback, otherQuery) => {
    setUserInfo({
      name,
      phoneNumber,
      email,
      productQuery,
      feedback,
      otherQuery,
    });
  };

  


  const steps = [
    {
      id: '1',
      message: 'Welcome to Tiny Tiaraa! What is your name?',
      trigger: 'name-input',
    },
    {
      id: 'name-input',
      user: true, // Allows user to input their name
      validator: (value) => {
        if (value.trim() === '') {
          return 'Please enter a valid name.';
        }
        setUserInfo((prevState) => ({ ...prevState, name: value })); // Update name in state
        return true;
      },
      trigger: 'number-input',
    },
    {
      id: 'number-input',
      message: 'Thanks, {previousValue}! Could you please provide your contact number?',
      trigger: 'contact-number',
    },
    {
      id: 'contact-number',
      user: true, // Allows user to input their contact number
      validator: (value) => {
        const isValid = /^[0-9]{10}$/.test(value); // Check if the value contains exactly 10 digits
        if (!isValid) {
          return 'Please enter a valid 10-digit contact number.';
        }
        setUserInfo((prevState) => ({ ...prevState, phoneNumber: value })); // Update phone number in state
        return true;
      },
      trigger: 'greeting',
    },
    {
      id: 'greeting',
      message: `Nice to meet you, How can I assist you today?`,
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: '1', label: 'I need help with an order.', trigger: 'email-input' },
        { value: '2', label: 'I have a question about products.', trigger: 'product-query-email' },
        { value: '3', label: 'I want to provide feedback.', trigger: 'feedback-email' },
        { value: '4', label: 'Other inquiries', trigger: '6' },
      ],
    },
    {
      id: 'email-input',
      message: 'Please provide your email to look up your order.',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      validator: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        setEmail(value);  // Set email state after validation
        setUserInfo((prevState) => ({ ...prevState, email: value })); // Update email in state
        return true;
      },
      trigger: 'whatsapp-button',
    },
    {
      id: 'whatsapp-button',
      component: (
        <div>
          <p>If you need assistance, click the button below to chat with us on WhatsApp:</p>
          <a
            href={`https://wa.me/+918657062511?text=Hello, I need help with my order. My email is: ${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn flex items-center gap-2">
              <FaWhatsapp size={20} color="#fff" className="whatsapp-icon" /> {/* WhatsApp icon */}
              Chat with us
            </button>
          </a>
        </div>
      ),
      trigger: 'end-message',
    },
    {
      id: '3',
      message: 'Please provide your order ID.',
      trigger: 'end-message',
    },
    {
      id: 'product-query-email',
      message: 'Please provide your email to assist you further.',
      trigger: 'product-query-email-input',
    },
    {
      id: 'product-query-email-input',
      user: true,
      validator: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        setUserInfo((prevState) => ({ ...prevState, email: value })); // Update email in state
        return true;
      },
      trigger: 'product-query-message',
    },
    {
      id: 'product-query-message',
      message: 'What question do you have about our products?',
      trigger: 'product-query-input',
    },
    {
      id: 'product-query-input',
      user: true,
      validator: (value) => {
        if (value.trim() === '') {
          return 'Please enter your question.';
        }
        setUserInfo((prevState) => ({ ...prevState, productQuery: value })); // Update query in state
        return true;
      },
      trigger: 'end-product-query',
    },
    {
      id: 'end-product-query',
      message: 'Thank you! I will get back to you shortly.',
      end: true,
    },
    {
      id: 'feedback-email',
      message: 'Please provide your email to share your feedback.',
      trigger: 'feedback-email-input',
    },
    {
      id: 'feedback-email-input',
      user: true,
      validator: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        setUserInfo((prevState) => ({ ...prevState, email: value }));
        return true;
      },
      trigger: 'feedback-message',
    },
    {
      id: 'feedback-message',
      message: 'Thank you for providing your email. Could you please describe your experience?',
      trigger: 'feedback-input',
    },
    {
      id: 'feedback-input',
      user: true,
      validator: (value) => {
        if (value.trim() === '') {
          return 'Please enter your feedback.';
        }
        setUserInfo((prevState) => ({ ...prevState, feedback: value }));
        return true;
      },
     
      trigger: 'end-feedback',
    },
    {
      id: 'end-feedback',
      message: 'Thank you for your feedback! We appreciate your time and effort. We will get back to you shortly.',
     
      end: true,
    },
    {
      id: '6',
      message: 'Please provide your email so we can assist you further.',
      trigger: 'other-inquiry-email',
    },
    {
      id: 'other-inquiry-email',
      user: true,
      validator: (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        setUserInfo((prevState) => ({ ...prevState, email: value })); // Store email in state
        return true;
      },
      trigger: 'other-inquiry-message',
    },
    {
      id: 'other-inquiry-message',
      message: 'Thank you! Please describe your inquiry so we can assist you better.',
      trigger: 'other-inquiry-input',
    },
    {
      id: 'other-inquiry-input',
      user: true,
      validator: (value) => {
        if (value.trim() === '') {
          return 'Please provide some details about your inquiry.';
        }
        setUserInfo((prevState) => ({ ...prevState, otherQuery: value })); // Store other query in state
        return true;
      },
      trigger: 'end-other-inquiry',
    },
    {
      id: 'end-other-inquiry',
      message: 'Thank you for sharing your inquiry. We will get back to you shortly.',
      trigger: 'customend-message',
      end:true
    },
    {
      id: 'end-message',
      message: 'Thank you! I will get back to you shortly.',
      end: true,
     
    },
    {
      id: 'customend-message',
      message: 'Thank you! I will get back to you shortly.',
      trigger: 'whatsapp-after-end',
      end: true,
    },
    {
      id: 'whatsapp-after-end',
      component: (
        <div>
          <p>If you still need assistance, you can chat with us on WhatsApp:</p>
          <a
            href={`https://wa.me/+918657062511?text=Hello, I need assistance.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn flex items-center gap-2">
              <FaWhatsapp size={20} color="#fff" className="whatsapp-icon" /> {/* WhatsApp icon */}
              Chat with us
            </button>
          </a>
        </div>
      ),
      end: true, // Mark this as the final step
    },
  ];
  
  const handleEnd = () => {
    console.log('Chatbot conversation ended.');
    submitChatbotQuery();
  };
  const submitChatbotQuery = async () => {
    console.log("runing --------------------------------")
    try {
      const response = await axios.post(`${server}/chatbotmsg`, {
        name: userInfo.name,
        email: userInfo.email,
        productQuery: userInfo.productQuery,
        phoneNumber: userInfo.phoneNumber,
        feedback: userInfo.feedback,
        otherQuery: userInfo.otherQuery,
      });

      
    } catch (error) {
      console.error('Error sending the request:', error);
    }
  };

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#006039',
    headerFontColor: '#fff',
    botBubbleColor: '#35a578',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <div className="chatbot-container">
      {/* ChatBot window appears when isOpen is true */}
      {isOpen && (
        <div className="chatbot-window">
          
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} className="chatbot" headerTitle="TinyTiaraa Chat"  handleEnd={handleEnd}  botAvatar="https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp"/>
          </ThemeProvider>
        </div>
      )}

      {/* Chat icon toggle button */}
      <div className="chatbot-toggle-container">
        <button className="chatbot-toggle" onClick={toggleChatbot}>
          {isOpen ? <FaTimes size={20} color="#ffffff" /> : <FaComments size={20} color="#ffffff" />}
          <span className="tooltip text-[!12px]">Chat Here</span> {/* Tooltip */}
        </button>
      </div>
    </div>
  );
};

export default Chatbotmsg;
