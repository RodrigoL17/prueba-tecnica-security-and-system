'use client'
import { useState } from "react";
import Image from "next/image";
import style from "@/app/ui/header/header.module.css"
import Link from "next/link";
import { CloseIcon, HamburgerMenu } from "@/app/ui/icons";

export default function Header() {
  const [isClicked , setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  };

  return (
    <header className={style.header}>
      <div className={style.logoContainer}>
        <Link href={"#home"}><Image className={style.image} src="/RodrigoImg.png" alt="Profile image of Rodrigo Lezama" width={70} height={70} /></Link>
        <p className={style.title}>Rodrigo Lezama</p>
      </div>
      <button onClick={handleClick} className={`${style.menu} `}><HamburgerMenu/></button>
      <nav className={`${style.nav } ${isClicked ? style.active : ''} `}>
        <li><Link href={"#about"}>Sobre mi</Link></li>
        <li><Link href={"#interest"}>Intereses</Link></li>
        <li><Link href={"#contact"}>Contacto</Link></li>
        <button className={style.closeBtn} onClick={handleClick}><CloseIcon/></button>
      </nav>
    </header>
  );
}