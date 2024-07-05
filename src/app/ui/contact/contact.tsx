import styles from "@/app/ui/contact/contact.module.css";
import Form from "@/app/ui/contact/form";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Contactame</h2>
      <Form />
    </section>
  );
}