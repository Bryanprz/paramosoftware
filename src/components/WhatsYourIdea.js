import React from 'react';
import emailjs from 'emailjs-com';
import { Image } from 'cloudinary-react'


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmailform', 'plantillaparamo', e.target, 'user_H85ZOtg8EKmgoh5qROH4M')
      .then((result) => {
          alert("The message has been sent successfully")
      }, (error) => {
          alert("The message has not been sent, check your data well");
      });
      e.target.reset();
  }

  return (
    <section id="hire">
        <div className="create">
            <div className="create-container">
              <div className="create-container__text">
                <h2 className="create-container__text--title">what will <span className="create-container__text--title-span">you <br/></span>create?</h2>
                <p className="create-container__text--paragraph">
                if you´re ready, we´re ready. <br/> Send us an email below and let´s <br/> make your idea a reality
                </p>
              </div>
              <div className="create-container__photo">
                <Image publicId="images/camping_zzuexr.jpg" alt="" className="create-container__photo--img"/>
              </div>
            </div>
        </div>
        <h2 className="subtitle">we want to hear from you</h2>
        <div className="idea">
          <div className="idea-text">
              <h2 className="idea-text__title">what´s <br/> your <br/> idea?</h2>
          </div>
          <div className="form">
            <form className="form-action" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              
              <input type="text" name="name" placeholder="FULL NAME" className="form-action__input" />
              
              <input type="email" name="email" placeholder="EMAIL" className="form-action__input"/>
              
              <textarea name="idea" placeholder="MY APP IDEA IS" rows={5} className="form-action__textarea"/>
              
              <input type="submit" value="Send" className="form-btn__button" />
            </form>
          </div>
          <div className="idea-paragraph">
              <p className="idea-paragraph__text">
                 Send us a short email about your web app or mobile app idea. we´ll <br/> respond in one day to start building your vision.
              </p>
          </div>
        </div>
    </section>
  );
}

