# Glia — sitio institucional de demostración

Frontend responsive para una consultora ficticia de higiene y seguridad laboral. Modela navegación institucional, servicios, casos, novedades y un formulario con validación local.

> Todo el contenido comercial, las métricas, los casos y los datos de contacto son ilustrativos. No hay backend y el formulario no envía ni almacena información.

## Stack

React 19, TypeScript, React Router 7, Vite 8, Tailwind CSS 4 y Lucide React.

## Ejecutar

Requiere Node.js `^20.19` o `^22.12`.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm audit
```

No usa variables de entorno.

## Decisiones relevantes

- aviso visible del alcance de demo;
- lazy loading por ruta;
- validación de formulario sin prometer contacto real;
- datos ficticios sin enlaces sociales o legales vacíos;
- configuración Vite mínima y sin inyección de credenciales;
- dependencias actualizadas y auditadas.

## Limitaciones

No ofrece autenticación, persistencia, CMS, analytics, contacto real ni asesoramiento profesional. Las imágenes remotas requieren conexión y no hay tests automatizados.

## Estado

El deployment configurado anteriormente devuelve 404; la evaluación reproducible es local.

## Autor

Desarrollado por [Nicolás De Felippe](https://github.com/nicodf91) como proyecto de portfolio.
