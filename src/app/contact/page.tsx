import styles from "./page.module.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Flordel Florist",
  description: "Get in touch with Flordel Florist for custom orders and inquiries.",
};

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.header}`}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>We&apos;re here to assist with your botanical needs.</p>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <MapPin className={styles.icon} />
            <div>
              <h3>Visit Us</h3>
              <p>78 Clinton St<br/>New York, NY 10002</p>
            </div>
          </div>
          
          <div className={styles.infoBlock}>
            <Phone className={styles.icon} />
            <div>
              <h3>Call Us</h3>
              <p><a href="tel:212-960-3542">212-960-3542</a></p>
            </div>
          </div>
          
          <div className={styles.infoBlock}>
            <Mail className={styles.icon} />
            <div>
              <h3>Email Us</h3>
              <p><a href="mailto:info@flordel.nyc">info@flordel.nyc</a></p>
            </div>
          </div>
          
          <div className={styles.infoBlock}>
            <Clock className={styles.icon} />
            <div>
              <h3>Hours</h3>
              <p>Mon - Fri: 7AM - 9PM<br/>Sat - Sun: 7AM - 7PM</p>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
