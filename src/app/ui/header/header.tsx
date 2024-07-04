import Image from "next/image";
import style from "@/app/ui/header/header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <Link href={"#home"}><Image className={style.image} src="/RodrigoImg.png" alt="Profile image of Rodrigo Lezama" width={70} height={70} /></Link>
        <h1 className={style.title}>Rodrigo Lezama</h1>
      </div>
      <nav className={style.nav}>
        <li><Link href={"#about"}>Sobre mi</Link></li>
        <li><Link href={"#interest"}>Intereses</Link></li>
        <li><Link href={"#contact"}>Contacto</Link></li>
      </nav>
    </header>
  );
}