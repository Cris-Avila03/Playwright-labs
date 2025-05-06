# 🧪 Laboratorios de Automatización con Playwright

Este documento organiza los ejercicios por grupos temáticos o niveles de dificultad. Cada laboratorio contiene una breve descripción, URL de prueba, archivo asociado y los escenarios planteados.

---

## 📂 Grupo 1: Pruebas básicas (título, búsqueda, visibilidad)

### ✅ Lab 1 - Validación de título y búsqueda de producto (OpenCart Demo)
**Archivo:** `lab_1-1.spec.ts`  
**URL de prueba:** [https://opencart.abstracta.us/](https://opencart.abstracta.us/)

**Objetivo:**  
Validar el título de la página principal y realizar una búsqueda sencilla de un producto desde el buscador del sitio.

**Escenarios:**
- [✓] Verificar que el título de la página sea "Your Store".
- [✓] Buscar el producto “MacBook” y validar que aparezca en los resultados.
- [✓] Validar que el producto tenga precio visible.


### ✅ Lab 2 - Validación de frame y texto (DemoQA - Frames)
**Archivo:** `lab_1-2.spec.ts`  
**URL de prueba:** [https://demoqa.com/frames](https://demoqa.com/frames)

**Objetivo:**  
Interactuar con un `iframe` y validar el texto que contiene.

**Escenarios:**
- [✓] Acceder al frame principal.
- [✓] Extraer y validar el texto “This is a sample page”.


### ✅ Lab X - Validación de título y resultados (Mercado Libre)
**Archivo:** `lab_1-3.spec.ts`  
**URL de prueba:** [https://www.mercadolibre.com.co](https://www.mercadolibre.com.co)

**Objetivo:**  
Buscar un producto desde la home de Mercado Libre y validar que los resultados coincidan.

**Escenarios:**
- [ ] Ingresar “silla gamer” en el buscador.
- [ ] Validar que haya resultados.
- [ ] Validar que cada resultado tenga título y precio.