import Hero from "../components/Hero/hero";
import ContactForm from "../components/ContactForm/contactForm";

export default function Form() {
  return (
    <div>
      <Hero title="FORM" />
      <p>ご質問は下記フォームよりお問い合わせください。</p>
      <ContactForm />
    </div>
  );
}
