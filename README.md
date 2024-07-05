# Proyecto Prueba Técnica Security and System

Este proyecto es una aplicación desarrollada con Next.js y React, que incluye formularios y funcionalidades de prueba unitaria y de integración.

## Instalación

### Usando pnpm

1. **Instalar pnpm:** Si aún no tienes pnpm instalado, puedes instalarlo globalmente con npm:
```bash
   npm install -g pnpm
```
Instalar dependencias:
```bash
pnpm install
```
### Usando npm
Instalar dependencias:
```bash
npm install
```

## Ejecución
Para ejecutar la aplicación en un entorno de desarrollo:

```bash
pnpm dev
# o
npm run dev
```
Esto iniciará el servidor de desarrollo de Next.js y podrás ver la aplicación en http://localhost:3000.

## Construcción
Para construir la aplicación para producción:

```bash
pnpm build
# o
npm run build
```
Este comando generará la versión optimizada de la aplicación en el directorio .next.

## Ejecución en producción
Para ejecutar la aplicación en modo de producción:

```bash
pnpm start
# o
npm start
```
Esto sirve la aplicación optimizada generada por next build en http://localhost:3000.

##Pruebas
Este proyecto utiliza Vitest para las pruebas. Para ejecutar las pruebas:

```bash
Copiar código
pnpm test
# o
npm test
```
Esto ejecutará todas las pruebas unitarias y de integración definidas en el proyecto.

Notas adicionales
Asegúrate de tener Node.js y npm (o pnpm) instalados en tu máquina antes de comenzar.
Si encuentras problemas durante la instalación o ejecución, revisa las versiones de Node.js especificadas en el archivo .nvmrc o ajusta las dependencias según sea necesario.
Para más detalles sobre comandos específicos de Next.js, consulta la documentación oficial de Next.js.
