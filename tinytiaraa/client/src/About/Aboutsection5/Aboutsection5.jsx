import React, { useState } from 'react';
import './Aboutsection5.css';
import img1 from './images/first.svg';
import img2 from './images/second.png';
import img3 from './images/third.svg';
import img4 from './images/fourth.svg';
import { server } from '@/server';
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

function Aboutsection5() {
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [emailError, setEmailError] = useState(false); // State to track email errors

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate email before submitting
  //   if (!validateEmail(email)) {
  //     setEmailError(true); // Set email error to true if invalid
  //     return; // Prevent form submission if email is invalid
  //   }

  //   // If the email is valid, reset the email error
  //   setEmailError(false);

  //   // Proceed with API call if validation passes
  //   axios
  //     .post(`${server}/subscribe/subscribe`, { email, phonenumber })
  //     .then((res) => {
  //       swal({
  //         title: 'Thank you!',
  //         text: "You're Subscribed to Tiny Tiaraa's Membership!",
  //         icon: 'success',
  //       });
  //       setEmail('');
  //       setPhonenumber('');
  //     })
  //     .catch((error) => {
  //       toast.error(error.response.data.message);
  //     });
  // };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before submitting
    if (!validateEmail(email)) {
      setEmailError(true); // Set email error to true if invalid
      return; // Prevent form submission if email is invalid
    }

    setEmailError(false); // Reset email error if valid

    // Proceed with API call if validation passes
    axios
      .post(`${server}/ttclub/ttclub`, { email })
      .then((res) => {
        swal({
          title: "Thank you!",
          text: "You're Subscribed to TT Member's Club!",
          icon: "success",
        });
        setEmail("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="Aboutsection5">
      <div className="association">
        <h3>Association</h3>
      </div>

      <div className="assocflex">
        <div className="assocflexadjust">
          <div className="associmgs">
            <img src={img1} alt="" />
          </div>
          {/* <div className="associmgs">
            <img src={img2} alt="" />
          </div> */}
          <div className="associmgs">
            <img src={img3} alt="" />
          </div>
          <div className="associmgs">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="sec5sub bg-[#F3FFFD] h-auto pt-8 pb-12 !font-poppins">
          <div className="sec5flex">
          <div className='text-center'>
              <h2 className="text-3xl font-poppins font-semibold text-[#01463A]">Join the TT Club</h2>
              <p className="text-md text-gray-600">Sign up for exclusive updates, offers, and special perks.</p>
            </div>

            <div className='mt-6 flex justify-center items-center flex-col gap-5'>


            <div>
           
            <div className="sec5inp flex justify-center items-center">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p style={{ color: 'red' }}>Invalid email address</p>}
              
            </div>
            <div className="flex items-center space-x-2 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="noUpdates"
                    
                    className="w-4 h-4 !cursor-pointer"
                  />
                  <label htmlFor="noUpdates" className="text-sm text-gray-700">
                    Check this box if you don’t want to receive updates
                  </label>
                </div>
            </div>
            
            {/* <div className="sec5inp">
              <input
                type="tel"
                placeholder="Your mobile number"
                value={phonenumber}
                onChange={(e) => {
                  const value = e.target.value;

                  // Allow only numbers and limit the length to 10 digits
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    setPhonenumber(value);
                  }
                }}
              />
            </div> */}
            <div>
              <button type="submit">Join Now</button>
            </div>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default Aboutsection5;
