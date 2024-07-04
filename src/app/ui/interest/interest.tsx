import styles from "@/app/ui/interest/interest.module.css"

export default function Interest() {
  return (
    <section id="interest" className={styles.section}>
      <h1 className={styles.title}>Mis otros intereses</h1>
      <ul className={styles.list}>
        <li>Viajar ✈️</li>
        <li>Levantamiento Olímpico (Halterofilia) 🏋️‍♂️</li>
        <li>Salir con amigos 🫂</li>
        <li>Salas de Escape 🚪</li>
        <li>Cocinar 🍽️ (especialmente asados 😁) </li>
      </ul>
    </section>
  )
}