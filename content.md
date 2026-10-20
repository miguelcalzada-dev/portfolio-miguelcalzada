# content.md — Fuente de verdad

Extraído del repositorio `portfolio-miguelcalzada` (commit `b1d2bfe`) y de los README públicos de los cuatro proyectos enlazados. No se ha inventado contenido. Todo lo ausente se marca como **PENDIENTE**.

---

## 1. Identidad

- **Nombre completo:** Miguel Ángel Calzada Martín
- **Nombre corto:** Miguel Ángel Calzada
- **Marca actual en la web:** “Miguel Ángel” + palabra protagonista “CALZADA”
- **Rol actual:** Desarrollador Full-Stack · IA & Big Data
- **Rol profesional declarado:** Software Developer
- **Ubicación:** Madrid, España
- **Web:** https://miguelcalzada.com
- **Email:** miguelcalzada2004@gmail.com
- **Teléfono:** +34 665 17 88 25
- **GitHub:** https://github.com/miguelcalzada-dev
- **LinkedIn:** https://www.linkedin.com/in/miguel-calzada-04a19b24b
- **Idiomas:** español nativo; inglés B2 (documentación, reuniones y equipos internacionales).
- **Disponibilidad:** inmediata para trabajo remoto, híbrido o presencial.

### Posicionamiento actual

Desarrollador Full-Stack e IA en Madrid. Construye y despliega APIs, microservicios y productos de datos reales, con trabajo en producción sobre AWS, Docker, Kubernetes, agentes de IA, RAG y CI/CD.

### Tono de voz observado

- Directo, técnico y sobrio.
- Español de España.
- Primera persona en la presentación (“Construyo y despliego”); tercera persona en el asistente y la experiencia.
- Mezcla de frases cortas de posicionamiento con detalle técnico concreto.
- Estética de la web anterior (anti-referencia para el rediseño): brutalista / editorial, papel + tinta + naranja señal.

---

## 2. Copy existente

### Intro del hero

> Desarrollador Full-Stack e IA en Madrid. Construyo y despliego APIs, microservicios y productos de datos reales.

### Meta title

> Miguel Ángel Calzada · Desarrollador Full-Stack e IA

### Meta description

> Desarrollador Full-Stack especializado en Inteligencia Artificial y Big Data desde Madrid. Diseño y despliego APIs, microservicios y productos de datos reales sobre AWS.

### Open Graph description

> Desarrollador Full-Stack e IA desde Madrid. APIs, microservicios y productos de datos reales desplegados en producción.

### Lead de experiencia

> Trabajo como Software Developer en Analisis Survey Unit (Madrid) desde marzo de 2024. Diseño, desarrollo y despliego APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI) sobre AWS con Docker y Kubernetes, y construyo agentes de IA, arquitecturas RAG y pipelines de CI/CD que corren en producción.

### Resumen del asistente

> Miguel Ángel Calzada Martín es desarrollador Full-Stack e IA en Madrid. Diseña APIs REST y microservicios, despliega en AWS y construye agentes de IA, arquitecturas RAG y pipelines de CI/CD en producción.

### Cierre

> © 2026 Miguel Ángel Calzada Martín · Madrid

**PENDIENTE:** no existe una sección “Sobre mí” desarrollada, una propuesta de servicios ni una declaración de objetivos profesionales más allá del copy anterior.

---

## 3. Proyectos

### 3.1 ImpactDB MCP

- **Nombre:** ImpactDB MCP
- **Tipo:** Linaje de datos · MCP
- **URL de demo:** https://miguelcalzada.com/impactdb
- **Repositorio:** https://github.com/miguelcalzada-dev/data-lineage-mcp
- **Imagen:** `/public/work/impactdb.jpg`
- **Descripción real:** Analizador de linaje de datos e impacto de cambios para PostgreSQL. Conecta una base de datos, permite preguntar en lenguaje natural y muestra qué se rompería antes de aplicar un cambio en un grafo interactivo.
- **Funciones confirmadas:**
  - Chat con IA (Groq) para consultar el impacto de un cambio.
  - Predicción de vistas, funciones y claves foráneas afectadas por `ALTER`, `DROP` o `RENAME`.
  - Grafo de dependencias interactivo con zoom y exploración.
  - Visualizador de esquema con búsqueda de tablas, columnas, vistas y funciones.
  - Análisis de cualquier esquema mediante JSON, sin conexión.
  - Cuatro herramientas del estándar Model Context Protocol para agentes externos.
- **Stack real:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, React Flow, Lucide, Node.js, Express, `@modelcontextprotocol/sdk`, `pg`, Supabase/PostgreSQL, Groq, Railway.
- **Rol:** **PENDIENTE** (no documentado).
- **Resultados/métricas:** **PENDIENTE** (no documentados).
- **Estado:** demo pública operativa.

### 3.2 Applied AI Solutions / AI Lab

- **Nombre:** Applied AI Solutions
- **Nombre interno:** Applied AI Engineering Showcase
- **Tipo:** Suite de IA aplicada
- **URL de demo:** https://miguelcalzada.com/ai-lab
- **Repositorio:** https://github.com/miguelcalzada-dev/applied-ai-engineering-showcase
- **Imagen:** `/public/work/ai-lab.jpg`
- **Descripción real:** Aplicación web interactiva que reúne casos de uso de IA —LLM, RAG, visión por computador y NLP— en una suite unificada con backend FastAPI y una interfaz editorial/brutalista.
- **Funciones confirmadas:**
  - Chat multi-turno con memoria, system prompt y temperatura ajustables, transcripción y voz.
  - Análisis de imágenes por arrastre o webcam con Gemini Vision.
  - RAG con carga de `.txt`/`.pdf`, embeddings, ChromaDB y auditoría de fragmentos.
  - Laboratorio de prompts con latencia, tokens estimados y recuento de palabras.
  - NLP: sentimiento, resumen y clasificación de intención/idioma/tono.
  - Asistente de voz con Speech-to-Text y Text-to-Speech.
- **Stack real:** FastAPI, Pydantic, Uvicorn/Gunicorn, Google Gemini, LangChain, ChromaDB, Vanilla JS/CSS, Railway.
- **Rol:** **PENDIENTE** (no documentado).
- **Resultados/métricas:** **PENDIENTE** (no documentados).
- **Estado:** demo pública operativa.

### 3.3 SQLSense AI

- **Nombre:** SQLSense AI
- **Tipo:** SQL con IA · WebAssembly
- **URL de demo:** https://miguelcalzada.com/sqlsense
- **Repositorio:** https://github.com/miguelcalzada-dev/sqlsense-ai
- **Imagen:** `/public/work/sqlsense.jpg`
- **Descripción real:** Aprende SQL hablando con IA. Traduce lenguaje natural a SQL y viceversa, explica cada cláusula y ejecuta las consultas en una base de datos SQLite efímera que vive en el navegador.
- **Funciones confirmadas:**
  - Lenguaje natural → SQL con ejecución inmediata.
  - SQL → lenguaje natural con explicación paso a paso.
  - Laboratorio SQLite en WebAssembly, sin servidor y con reinicio de estado.
  - Editor SQL libre con atajos de teclado.
  - Esquema y tablas explorables de un concesionario.
  - 24 retos guiados con validación automática.
  - Modo dual: OpenAI o motor local determinista sin clave.
  - Rate limiting en rutas de IA.
- **Stack real:** Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, Zustand, sql.js/SQLite WASM, OpenAI, Lucide, Railway.
- **Rol:** **PENDIENTE** (no documentado).
- **Resultados/métricas:** **PENDIENTE** (no documentados).
- **Estado:** demo pública operativa.

### 3.4 Madrid Transit Pulse

- **Nombre:** Madrid Transit Pulse
- **Tipo:** Big Data · movilidad
- **URL de demo:** https://miguelcalzada.com/madrid-transit
- **Repositorio:** https://github.com/miguelcalzada-dev/madrid-transit-pulse
- **Imagen:** `/public/work/madrid-transit.jpg`
- **Descripción real:** Plataforma de visualización y analítica en tiempo real para monitorizar la red de Cercanías Madrid: geolocalización de trenes, incidencias oficiales y tiempos de llegada estimados por estación.
- **Funciones confirmadas:**
  - Dashboard con KPIs en tiempo real, evolución de flota, incidencias y velocidad media.
  - Buscador de más de 90 estaciones con llegadas estimadas, favoritos y geolocalización.
  - Mapa interactivo con posición de trenes, filtros por línea y detección de retrasos.
  - Monitorización de alertas oficiales de Renfe por severidad y línea.
  - Diseño mobile-first.
- **Stack real:** Next.js 14, React 18, TypeScript, Recharts, Leaflet/React-Leaflet, Node.js 20, Express, Socket.io, GTFS-RT, MongoDB opcional, Jest, Supertest, pytest, Docker Compose, Kafka/Spark en roadmap.
- **Rol:** **PENDIENTE** (no documentado).
- **Resultados/métricas:** **PENDIENTE** (no documentados).
- **Estado:** demo pública operativa. Datos de Renfe Open Data y CRTM. Aplicación no oficial.

---

## 4. Experiencia

### Puesto actual

- **Cargo:** Software Developer
- **Empresa:** Analisis Survey Unit
- **Ubicación:** Madrid, España
- **Periodo:** marzo 2024 – presente
- **Responsabilidades confirmadas:** diseño, desarrollo y despliegue de APIs REST y microservicios con Java (Spring Boot), Node.js y Python (FastAPI); AWS con Docker y Kubernetes; agentes de IA y arquitecturas RAG; pipelines de CI/CD en producción.
- **Etiquetas:** Java, Spring Boot, Node.js, Python, FastAPI, AWS, Docker, Kubernetes, LLMs, RAG, CI/CD.
- **Logros cuantificados:** **PENDIENTE** (no documentados).

---

## 5. Formación

### Especialización en IA y Big Data

- **Periodo:** 2025 – 2026
- **Detalle:** Machine Learning, Deep Learning, NLP y Big Data Analytics.

### Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)

- **Periodo:** 2022 – 2024
- **Detalle:** Java, Android, diseño de bases de datos y programación orientada a objetos.

**PENDIENTE:** centro educativo, certificaciones y formación complementaria.

---

## 6. Stack

### IA & Machine Learning

Machine Learning · Deep Learning · NLP · TensorFlow · PyTorch · Scikit-learn

### Frontend & Web

React · Next.js · Angular · TypeScript · Tailwind CSS · HTML/CSS

### Backend & APIs

Java / Spring Boot · Node.js · Python / FastAPI · .NET Core · REST · RabbitMQ

### Bases de datos & Datos

PostgreSQL · MongoDB · Redis · SQL · ETL Pipelines · Data Engineering

### DevOps & Cloud

AWS · Docker · Kubernetes · CI/CD · GitHub Actions · Linux

---

## 7. Servicios

**PENDIENTE:** el portfolio actual no enumera servicios. Las capacidades demostrables se limitan a las áreas del stack y a los cuatro proyectos. No se debe inventar una oferta de servicios.

---

## 8. Redes y contacto

- Email: miguelcalzada2004@gmail.com
- Teléfono: +34 665 17 88 25
- GitHub: https://github.com/miguelcalzada-dev
- LinkedIn: https://www.linkedin.com/in/miguel-calzada-04a19b24b
- Web: https://miguelcalzada.com

**PENDIENTE:** otros perfiles (X, Bluesky, Dribbble, etc.) y currículum descargable.

---

## 9. Contenido del asistente (FAQ real)

- **Perfil:** desarrollador Full-Stack e IA en Madrid; APIs REST, microservicios, AWS, agentes de IA, RAG y CI/CD en producción.
- **Experiencia:** Analisis Survey Unit desde marzo de 2024 como Software Developer.
- **Formación:** Especialización en IA y Big Data (2025–2026) y Técnico Superior en DAM (2022–2024).
- **Stack:** IA/ML, frontend, backend, datos y DevOps según la sección 6.
- **Proyectos:** ImpactDB MCP, Applied AI Solutions, SQLSense AI y Madrid Transit Pulse.
- **ImpactDB:** linaje e impacto de cambios para PostgreSQL; grafo interactivo; cuatro herramientas MCP.
- **Ubicación y disponibilidad:** Madrid; disponibilidad inmediata para remoto, híbrido o presencial.
- **Idiomas:** español nativo; inglés B2.
- **Contacto:** email, LinkedIn y GitHub indicados arriba.

---

## 10. Activos visuales existentes

- `/public/work/impactdb.jpg` — captura de ImpactDB MCP.
- `/public/work/ai-lab.jpg` — captura de Applied AI Solutions.
- `/public/work/sqlsense.jpg` — captura de SQLSense AI.
- `/public/work/madrid-transit.jpg` — captura de Madrid Transit Pulse.
- `/app/icon.svg` — favicon cuadrado negro con “MC” en naranja.

**PENDIENTE:** retrato profesional, logotipo vectorial definitivo, imágenes de detalle de proyectos y casos de estudio completos.

---

## 11. Arquitectura de información actual

1. Hero con marca “Miguel Ángel”, nav mínima y palabra “CALZADA”.
2. Proyectos como índice tipográfico con vista previa al hover.
3. Stack en cinco capítulos alternos.
4. Experiencia y formación en timeline.
5. Contacto con email grande y enlaces.
6. Footer legal.
7. Asistente conversacional flotante.

Rutas proxeadas: `/madrid-transit`, `/sqlsense`, `/ai-lab`, `/impactdb`.

---

## 12. Datos que faltan para un portfolio “caro” sin inventar

1. Rol concreto de Miguel en cada proyecto (autor único, frontend, backend, IA, datos…).
2. Resultados o métricas verificables por proyecto (usuarios, rendimiento, latencia, adopción, etc.).
3. Casos de estudio: problema, restricciones, decisiones, solución y aprendizaje.
4. Logros cuantificados del puesto en Analisis Survey Unit.
5. Servicios ofertados y modelo de colaboración (freelance, empleo, consultoría).
6. Centro de formación y certificaciones.
7. Retrato profesional y logotipo definitivo.
8. Enlaces a artículos, charlas o escritura técnica, si existen.
