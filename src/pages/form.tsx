import Hero from "../components/Hero/hero";
import ContactForm from "../components/ContactForm/contactForm";
import styles from "../styles/form.module.css";

export default function Form() {
  return (
    <div>
      <Hero title="FORM" />
      <div className={styles.form}>
        <p>ご質問は下記フォームよりお問い合わせください。</p>
        <ContactForm />
      </div>
    </div>
  );
}
