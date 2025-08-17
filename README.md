Flujo de Mantenimiento Detallado

Cada vez que quieras actualizar tu portafolio:

1. Hacer cambios en el código

Edita los archivos dentro de src/ (por ejemplo: nuevos proyectos, textos, imágenes, estilos, componentes).

2. Probar localmente

Ejecuta tu proyecto en modo desarrollo:
npm run dev

3. Construir la versión de producción

Una vez validados los cambios, compila el proyecto:

npm run build

4. Desplegar a GitHub Pages

Sube la versión compilada a la rama gh-pages usando el script de despliegue:

npm run deploy

Nota: Asegúrate de que en package.json tengas configurado:

"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}

5. Verificar la actualización

Espera unos minutos y abre la URL del portafolio:

https://felipeignacio1704.github.io/Portafolio/


Verifica que los cambios se reflejen correctamente.

Buenas Prácticas

Antes de cada despliegue, siempre correr npm run build para evitar subir versiones de desarrollo.

Hacer commits frecuentes en Git para mantener un historial claro de los cambios.

Verificar que todas las imágenes y recursos tengan las rutas correctas antes del deploy.

Evitar modificar archivos directamente en la rama gh-pages; siempre construir desde src/ y subir con npm run deploy.

Guía Rápida de Mantenimiento

Editar código en src/.

Probar localmente con npm run dev.

Construir producción: npm run build.

Desplegar: npm run deploy.

Revisar que los cambios se vean en https://felipeignacio1704.github.io/Portafolio/.