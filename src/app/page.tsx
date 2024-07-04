import Header from "@/app/ui/header/header";
import styles from "@/app/page.module.css";
import About from "@/app/ui/about/about";
import Interest from "@/app/ui/interest/interest";
import Contact from "@/app/ui/contact/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Interest />
        <Contact />
      </main>
    </>

  );
}
