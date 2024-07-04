'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  name: z.string({
    invalid_type_error: 'El nombre es requerido',
  }).min(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  }),
  email: z.string({
    invalid_type_error: 'El correo electrónico es requerido',
  }).email({
    message: 'El correo electrónico debe ser válido',
  }),
  message: z.string({
    invalid_type_error: 'El mensaje es requerido',
  }).max(200, {
    message: 'El mensaje debe tener menos de 200 caracteres',
  }).trim().min(1, {
    message: 'El mensaje es requerido',
  }),
});

const SendContactForm = FormSchema;

export async function sendContactForm(prevState: State, formData: FormData) {
  const validatedFields = SendContactForm.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to send message.',
    };
  }

  // Send email or load data in database
  console.log(validatedFields.data);
  

  return {
    message: 'Formulario enviado exitosamente!',
    errors: {}
  };

}
