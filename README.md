# 🖥️ Portafolio de Felipe Naranjo

Este repositorio contiene mi portafolio personal desarrollado con **React**, **Vite**, **TailwindCSS** y desplegado en **GitHub Pages**.

---

## 🚀 Descripción

Aplicación web enfocada en mostrar mi experiencia profesional, habilidades y proyectos. También incluye un formulario de contacto funcional.

---

## 🛠 Tecnologías utilizadas

- **React** – Para construir la interfaz de usuario.
- **Vite** – Herramienta de bundling y desarrollo.
- **TailwindCSS** – Estilos y diseño responsivo.
- **React Icons** – Íconos en la aplicación.
- **gh-pages** – Para desplegar el proyecto en GitHub Pages.

---

## 🔧 Flujo de Mantenimiento Detallado

Cada vez que quieras actualizar tu portafolio, sigue estos pasos:

### 1️⃣ Hacer cambios en el código
Edita los archivos dentro de `src/` (por ejemplo: nuevos proyectos, textos, imágenes, estilos, componentes).

---

### 2️⃣ Probar localmente
Ejecuta tu proyecto en modo desarrollo:
npm run dev

### 3️⃣ Construir la versión de producción

Una vez validados los cambios, compila el proyecto:
npm run build

### 4️⃣ Construir la versión de producción
Sube la versión compilada a la rama gh-pages usando el script de despliegue:

npm run deploy

💡 Nota: Asegúrate de que en package.json tengas configurado:

"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}

### 5️⃣ Verificar la actualización

Espera unos minutos y abre la URL de tu portafolio:

https://felipeignacio1704.github.io/Portafolio/

Verifica que los cambios se reflejen correctamente.

### 🛡 Buenas Prácticas

Antes de cada despliegue, siempre correr:

npm run build


para evitar subir versiones de desarrollo.

Hacer commits frecuentes en Git para mantener un historial claro de los cambios.

Verificar que todas las imágenes y recursos tengan las rutas correctas antes del deploy.

Evitar modificar archivos directamente en la rama gh-pages; siempre construir desde src/ y subir con npm run deploy.

### ⚡ Guía Rápida de Mantenimiento

Editar código en src/.
Probar localmente con:
npm run dev

Construir producción:
npm run build

Desplegar:
npm run deploy

Revisar que los cambios se vean en:
https://felipeignacio1704.github.io/Portafolio/
