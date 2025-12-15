# 🥭 Mango Range Test

Prueba técnica para **Mango** que consiste en la implementación de un componente `<Range />`
utilizando **Next.js**, **TypeScript** y **React**.

El objetivo es demostrar buenas prácticas de:
- Arquitectura de componentes
- Manejo de estado
- Separación de lógica de negocio
- Testing con React Testing Library

---

## 📦 Requisitos

- Node.js >= 18
- pnpm >= 8
- Next.js 16+ (App Router)
- TypeScript

---

## ⚙️ Instalación

Clona el repositorio e instala las dependencias:


```bash
pnpm install
```
---

## ▶️ Ejecución en desarrollo

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en:

- http://localhost:3000/exercise1  
  → Normal Range

- http://localhost:3000/exercise2  
  → Fixed Values Range

---

## 🧩 Ejercicios

### Exercise 1: Normal Range

- Rango con valores mínimo y máximo obtenidos desde un servicio mock
  (src/services/rangeService.ts)
- Dos manejadores (handles) arrastrables
- Los valores pueden editarse manualmente mediante inputs
- Los valores no pueden cruzarse
- Animaciones de hover y drag

---

### Exercise 2: Fixed Values Range

- Rango con valores fijos:
  [1.99, 5.99, 10.99, 30.99, 50.99, 70.99]
- Valores obtenidos desde un servicio mock
  (src/services/fixedRangeService.ts)
- Dos manejadores arrastrables
- Los valores se muestran como etiquetas (no editables)
- Los valores no pueden cruzarse

---

## 🧪 Tests

Ejecuta los tests con:

```bash
pnpm test
```

Tecnologías utilizadas:
- Jest
- React Testing Library

Los tests cubren:
- Renderizado inicial
- Validación de límites
- Corrección automática de valores inválidos
- Comportamiento en modo normal y modo fijo

---

## 📂 Estructura del proyecto

```text
.
├── app
│   ├── exercise1
│   │   └── page.tsx
│   └── exercise2
│       └── page.tsx
│
├── src
│   ├── components
│   │   └── Range
│   │       ├── Range.tsx
│   │       └── Range.test.tsx
│   │
│   └── services
│       ├── rangeService.ts
│       └── fixedRangeService.ts

