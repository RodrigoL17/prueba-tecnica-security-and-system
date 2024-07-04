'use client'

import { useEffect, useRef } from "react";
import styles from "@/app/ui/interest/interest.module.css";

export default function Interest() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains(styles.isVisible)) {
          entry.target.classList.add(styles.isVisible);
        }
      });
    }, { threshold: 0.05 });

    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="interest" ref={sectionRef} className={styles.section}>
      <h1 className={styles.title}>Mis otros intereses</h1>
      <ul className={`${styles.list}`}>
        <li>Levantamiento Olímpico (Halterofilia) 🏋️‍♂️</li>
        <li>Cocinar 🍽️ (especialmente asados 😁) </li>
        <li>Salir con amigos 🫂</li>
        <li>Salas de Escape 🚪</li>
        <li>Viajar ✈️</li>
      </ul>
    </section>
  );
}