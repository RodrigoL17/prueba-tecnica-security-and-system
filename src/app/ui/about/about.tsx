import Link from "next/link";
import styles from "@/app/ui/about/about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.section}>
    <h1 className={styles.title}>Sobre mí</h1>
    <div className={styles.container}>
      <p>Mi nombre es Rodrigo Lezama, oriundo de Argentina, Ciudad Autónoma de Buenos Aires. Tengo 32 años y soy desarrollador Full-Stack. Estudié en CoderHouse, la carrera de Desarrollo Web, utilizando tecnologías como React.Js, Node.Js, Express.Js, y MongoDB.
        De manera autodidacta, me he dedicado a ampliar estos conocimientos, utilizando tecnologías como Next.Js y Astro.Js (esta última una de mis favoritas 😁).
      </p>

      <p>Actualmente, me encuentro en la búsqueda de mi primer empleo en el sector tecnológico. Para ello, continúo capacitándome constantemente y también estoy realizando simulaciones laborales en la plataforma de <Link href={"https://www.nocountry.tech/"} rel="noopener noreferrer" target="_blank">NoCountry</Link>.</p>

      <p>Me he desempeñado laboralmente en los últimos 11 años como dueño de dos franquicias de heladerías Grido. Por cuestiones personales, decidí cambiar el rumbo de mi vida y dedicarme a la programación, que es un área que me apasiona mucho.
        En Agosto del corriente año (2024), comenzaré la carrera de Ingeniería en Inteligencia Artificial, ya que considero que esta área es el futuro del sector tecnológico.
      </p>
    </div>
  </section>
  );
}