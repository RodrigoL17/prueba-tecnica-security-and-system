'use client';

import { useState, ChangeEvent, useEffect, useMemo } from "react";
import { useFormState } from 'react-dom';
import { Toaster, toast } from "sonner";
import { sendContactForm, State } from "@/app/lib/actions";
import { lusitana } from "@/app/fonts";
import styles from "@/app/ui/contact/form.module.css";


export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const initailFormData = useMemo(() => ({ name: '', email: '', message: '' }), []);
  const [formData, setFormData] = useState(initailFormData);
  const [state, formAction] = useFormState(sendContactForm, initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.message === 'Formulario enviado exitosamente!') {
      setFormData(initailFormData);
      toast.success('Formulario enviado exitosamente!');
    }
  }, [state.message, initailFormData]);



  return (
    <>
      <form className={styles.form} action={formAction} noValidate role="form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            className={lusitana.className}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          {state?.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className={styles.error} key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            className={lusitana.className}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electronico"
          />
          {state?.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className={styles.error} key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            className={lusitana.className}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows={15}
          ></textarea>
          {state?.errors?.message &&
            state.errors.message.map((error: string) => (
              <p className={styles.error} key={error}>
                {error}
              </p>
            ))}
        </div>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
      <Toaster richColors />
    </>

  );
}
