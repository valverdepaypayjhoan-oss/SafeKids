# SafeKids — Portal interactivo inicial

Portal estático adaptable a móviles y computadoras, preparado para publicarse gratis con **GitHub + Vercel**. Incluye el logotipo proporcionado de SafeKids y no contiene demostración simulada.

## Contenido

- `public/index.html`: página principal.
- `public/styles.css`: diseño responsive.
- `public/app.js`: menú móvil y navegación suave.\n- `public/assets/safekids-logo.png`: logotipo proporcionado para el portal.
- `vercel.json`: configuración sencilla de rutas.
- `.gitignore`: excluye archivos temporales y secretos.

## Importante

Este portal es informativo. La demostración del mapa es ilustrativa; no usa GPS ni envía alertas. Los botones APK están desactivados porque todavía no hay aplicaciones compiladas. No hay base de datos conectada ni se recopilan datos personales.

## Vista previa local

1. Extrae el ZIP completo.
2. Abre `public/index.html` con Chrome.
3. Mantén `styles.css` y `app.js` dentro de la carpeta `public`, junto a `index.html`.

Los archivos CSS y JavaScript usan rutas relativas para funcionar tanto en la vista previa local como cuando el contenido de `public` se publique en Vercel.

## Publicar gratis con GitHub y Vercel

### 1. Crear el repositorio en GitHub

1. Entra en https://github.com y crea una cuenta o inicia sesión.
2. Pulsa **New repository**.
3. Nombre sugerido: `safekids-portal`.
4. Selecciona **Public** si deseas que cualquiera vea el código; evita subir claves, contraseñas o datos de niños.
5. Crea el repositorio.

### 2. Subir archivos

1. Descomprime este ZIP.
2. En el repositorio de GitHub, usa **Add file → Upload files**.
3. Sube el contenido de la carpeta del proyecto conservando esta estructura:
   - `public/`
   - `vercel.json`
   - `README.md`
   - `.gitignore`
4. Pulsa **Commit changes**.

### 3. Desplegar en Vercel

1. Entra en https://vercel.com y crea una cuenta o inicia sesión.
2. Selecciona **Add New → Project**.
3. Importa el repositorio `safekids-portal`.
4. Si solicita configuración:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: dejar vacío
   - Output Directory: `public`
   - Install Command: dejar vacío
5. Pulsa **Deploy**.
6. Vercel generará una dirección HTTPS del tipo `https://nombre-proyecto.vercel.app`.

Si el panel no acepta `public` como Output Directory, verifica que `public/index.html` exista y vuelve a desplegar con esa carpeta configurada como salida.

## Actualizar la web

Cuando modifiques archivos y subas los cambios a GitHub mediante **Commit changes**, Vercel normalmente vuelve a desplegar el sitio automáticamente.

## Después: base de datos

La siguiente etapa propuesta es Firebase:
- Firebase Authentication: cuentas.
- Cloud Firestore: perfiles y eventos, con reglas de acceso.
- Firebase Cloud Messaging: notificaciones push.
- Aplicaciones Android nativas: ubicación y seguimiento conforme a permisos del sistema.

No poner claves privadas en el código público de GitHub. Las reglas de Firestore y la autenticación deben configurarse y probarse antes de almacenar datos reales. Los datos de ubicación infantil requieren protección especial y consentimiento adecuado.

## Descargas APK

Cuando se generen y prueben los APK, se pueden publicar como GitHub Releases o en almacenamiento con acceso controlado y enlazarlos desde el centro de descargas. No activar botones hasta que los archivos reales estén disponibles y verificados.
