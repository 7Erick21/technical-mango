# 🥭 Mango Range Test

Prueba técnica para **Mango**: implementación de un componente \`<Range />\` en **Next.js** con **TypeScript**.

---

## 📦 Requisitos

- Node.js >= 18
- pnpm >= 8
- Next.js 13+ con \`appDir\`
- TypeScript

---

## ⚙️ Instalación

Clona el repositorio y ejecuta:

\`\`\`bash
pnpm install
\`\`\`

---

## ▶️ Ejecución en desarrollo

\`\`\`bash
pnpm dev --port 8080
\`\`\`

La aplicación estará disponible en:

- http://localhost:8080/exercise1  
  → **Normal Range**

- http://localhost:8080/exercise2  
  → **Fixed Values Range**

---

## 🧩 Ejercicio

### Exercise 1: Normal Range

- Rango con valores mínimo y máximo obtenidos de un servicio mock  
  (\`services/rangeService.ts\`)
- Dos manejadores (handles) arrastrables
- Los valores se pueden editar manualmente en las etiquetas
- Los valores **no pueden cruzarse**
- Animaciones de **hover** y **drag** incluidas

---

### Exercise 2: Fixed Values Range

- Rango con valores fijos  
  \`[1.99, 5.99, 10.99, 30.99, 50.99, 70.99]\`  
  obtenidos de un servicio mock (\`services/fixedRangeService.ts\`)
- Dos manejadores arrastrables
- Los valores se muestran como etiquetas (**no editables**)
- Los valores **no pueden cruzarse**

---

## 🧪 Tests

Ejecuta los tests con:

\`\`\`bash
pnpm test
\`\`\`

Los tests están implementados con:

- **Jest**
- **React Testing Library**

---

## 📂 Estructura del proyecto

\`\`\`txt
app/
exercise1/page.tsx
exercise2/page.tsx
components/
Range/
Range.tsx
Range.test.tsx
services/
rangeService.ts
fixedRangeService.ts
\`\`\`

---
