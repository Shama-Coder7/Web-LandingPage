import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="Card">
        <div className="card-head">
          <div id="head">contactus</div>
          <div id="touch">get in touch with us</div>
        </div>

        <div className="card-body">
          <p>
            Please contact us for creative solutions based on your unique
            situation. Our focus is on establishing long-term supports and
            resources for high-conflict cases involving abuse and
            post-separation abuse in family court.{' '}
          </p>

          <div className="form-container">
            <div className="row-one">
              <label htmlFor="first_name">First Name:</label>
              <input type="text" id="first_name" name="first_name" required />

              <label htmlFor="last_name">Last Name:</label>
              <input type="text" id="last_name" name="last_name" required />
            </div>

            <div className="row-two">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="zip_code">Zip Code:</label>
              <input type="text" id="zip_code" name="zip_code" required />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
              ></textarea>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact-image">
        <div className='image1'>
          <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt='image1'/>
        </div>
        <div className='image2'>
          <img src="https://content.pymnts.com/wp-content/uploads/2019/10/mortgage-lending-underwriting.jpg" alt='image2'/>
        </div>
      </div> */}
    </div>
  );
}

export default ContactUs;
