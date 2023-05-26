import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import '../Contacts/Contacts.css'
import facebook from '../assets/Social/facebook.png'
import telegram from '../assets/Social/telegram.png'
import whatsapp from '../assets/Social/whatsapp.png'

function Contacts() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_rcae2rw', 'template_mvv15tk', form.current, 'B87XxL457cbYPaIwL')

        e.target.reset()
      }

    return (
    <div className='Contacts' id="contact">
        <div className="ContactsTitle">
            <h1 className='Title'>Contacts</h1>
        </div>
        <div className="ContactsChild">
            <div className="ContactsSubChild Social">
                <div className="SubSocial facebook">
                    <div className="SubSocialContent Icon">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="SubSocialContent SocialTitle">
                        Facebook
                    </div>
                    <div className="SubSocialContent UserName">
                        Che S Jadallah
                    </div>
                    <a href='https://www.facebook.com/profile.php?id=100082226078414' className="SubSocialContent ReachMe">
                        Reach me in Facebook
                    </a>
                </div>
                <div className="SubSocial whatsapp">
                    <div className="SubSocialContent Icon">
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="SubSocialContent SocialTitle">
                        Whatsapp
                    </div>
                    <div className="SubSocialContent UserName">
                        +972512060643
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=972512060643' className="SubSocialContent ReachMe">
                        Reach me in Whatsapp
                    </a>
                </div>
                <div className="SubSocial telegram">
                    <div className="SubSocialContent Icon">
                        <img src={telegram} alt="" />
                    </div>
                    <div className="SubSocialContent SocialTitle">
                        Telegram
                    </div>
                    <div className="SubSocialContent UserName">
                        @Shoaib Jadallah
                    </div>
                    <a href='https://t.me/Shoaib_Ja0allah' className="SubSocialContent ReachMe">
                        Reach me in Telegram
                    </a>
                </div>
            </div>
            <form ref={form} className="ContactsSubChild form" onSubmit={sendEmail}>
                <input className='Email formChild' type="email" placeholder='Your Email' name='email' required />
                <input className='GuestName formChild' type="text" placeholder='Your Full Name' name='name' required />
                <textarea className='TextArea formChild' rows="8" placeholder='Your Massage' name='massage' required />
                <button type='submit' className='submit'>Send Massage</button>
            </form>
        </div>
    </div>
    )
}

export default Contacts