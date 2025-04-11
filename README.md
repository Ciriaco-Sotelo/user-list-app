# Front-End-prueba-tecnica-React
La siguiente es una prueba para evaluar a los postulantes para un perfil de Front End.

## INTRODUCCIÓN
Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de software de Neology.

## ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
Creatividad para resolver los requerimientos,
Uso de experiencia y conocimiento en base a buenas praticas,
Eficiencia de los algoritmos entregados,
Mostrar la experencía y la manera de poder salir de la caja para romper o identificar cualquier falla o mejora,
Familiaridad con Frameworks y plataformas.


## Prueba Técnica para Desarrollador Front-End React

## Parte 1 tecnica:

Instrucciones para Ejecutar el Proyecto Localmente

📋 Requisitos Previos
Versiones recomendadas:

Node.js v22.14.0 o superior

npm v11.3.0 o superior

Yarn (opcional pero recomendado)

🛠️ Configuración Inicial


# Instalar Yarn globalmente (si no lo tienes)
```
npm install -g yarn
```

# Clonar el repositorio
```
git clone https://github.com/tu-usuario/user-list-app.git

cd user-list-app
```

# Instalar dependencias
```
yarn install
```

# Ejecutar en modo desarrollo
```
yarn dev
```

🚀 Comandos Disponibles
Comando	Descripción
```
npm run dev	# Inicia servidor de desarrollo (Vite)
npm run build	# Compila para producción
npm run preview	# Previsualiza versión de producción
npm run test	# Ejecuta pruebas unitarias
npm run lint	# Ejecuta ESLint para verificar código
```

Después de ejecutar npm run dev o yarn dev, la aplicación estará disponible en:
```
Local:   http://localhost:5173/
```

🛠️ Dependencias Clave

El proyecto usa:

React 18+ con TypeScript

Vite como bundler

Material-UI (MUI) para componentes

Sass para estilos (con sintaxis moderna)

Axios para peticiones HTTP

💡 Recomendaciones
Si tienes problemas con las dependencias:
```
rm -rf node_modules package-lock.json

npm install
```

Para mantener las dependencias actualizadas:
```
npm outdated

npm update
```

Si prefieres Yarn pero no quieres instalarlo globalmente:
```
npx yarn install

npx yarn dev
```

## Parte 2 Teorica (resuelto)


## 1. Angular y React:

**¿Qué es React y cuál es su propósito principal en el desarrollo web?**

**R:** Es una biblioteca de JavaScript para construir interfaces de usuario, especialmente para aplicaciones de una sola página. 

**¿Qué es un componente en React y cómo se crea uno?**

**R:** Es una pieza reutilizable de código que define una parte de la interfaz de usuario. Divide las partes independientes y de fácil mantenimiento. 

Componentes Funcionales: Funciones de JavaScript que retornan JSX (HTML + JavaScript)

Componentes de clase: Legacy, menos usado en React moderno.

**¿Cuál es la diferencia entre ngOnInit() y constructor() en Angular?**

**R:** Son utilizados cuando se inicializan los componentes o servicios, pero su propósito y momentos de ejecución son diferentes.

constructor()

Es un método estándar de TypeScript/JavaScript. 
Se ejecuta antes de que se inicialice.
Su propósito es inicializar propiedades de la clase, inyectar dependencias (servicios, etc) mediante el sistema de inyección.

ngOnInit()

Es un hook del ciclo de vida de Angular.
Se ejecuta justo después de que se inicializan las propiedades enlazadas (@Input()) y el primer cambio de detección (ChangeDetection)
Su propósito es que tiene lógica de inicialización (como llamadas a APIs, acceso a @Input(), etc.).

El constructor() es para preparar la clase y ngOnInit() es para acciones que requieren que el componente esté inicializado. 


## 2. HTML5:

**¿Cuáles son algunas de las nuevas características introducidas en HTML5?**

**R:**
- Etiquetas que describen mejor el contenido, remplazando el uso excesivo de <div> esto evita la profundidad de los elementos, mejorando significativamente la carga del DOM.
- canvas, permite dibujar gráficos 2D/3D con JavaScript (Ideal para juegos o visualizaciones).
- localStorage y sessionStorage para guardar datos en el navegador (sin cookies)
- Formularios mejorados con nuevos tipos de inputs y validación automática (Sin JavaScript)
- API de geolocalización para obtener la ubicación de los usuarios. 
- Ejecuta scripts en segundo plano (sin bloquear la interfaz)
- WebSockets dibireccional en tiempo real entre cliente y servidor.
- Responsive Image optimización para diferentes dispositivos. 

**Describe la diferencia entre las etiquetas <div> y <span>.**

**R:** <div> tipo de elemento bloque (ocupa todo el ancho disponible y crea un salto de línea antes y después). 
Es un contenedor genérico para agrupar bloque de contenido y estructurar el layout.

<span> En línea (solo ocupa el espacio necesario y no fuerza saltos de línea). Agrupa texto o elementos en línea para aplicar estilos o manipulación con JavaScript. Ideal para modificar partes específicas del texto (estilos/texto dentro de una línea)

**¿Qué son los atributos data- en HTML5 y para qué se utilizan?**
**R:** Son atributos personalizados que permiten almacenar información adicional en elementos HTML. Están diseñados para guardar datos privados de la página o aplicación que no tienen representación visual pero son útiles para JavaScript (IDs, configuraciones, metadatos) o CSS (atributos en selectores CSS para aplicar estilos condicionales). 


## 3. CSS/Sass:

**¿Qué es Sass y cuál es su ventaja sobre CSS convencional?**

**R:** Es un procesador de CSS que extiende las capacidades del CSS tradicional, añadiendo características avanzadas como variables, anidamiento, mixins, herencia y más. 

- Añade variables reutilizables (colores, fuentes, tamaños, etc.)
- Anida selectores dentro de otros, por jerarquía de dicho elemento. 
- Los mixins son bloques de código reutilizables (como funciones)
- Compartir estilos entre selectores sin repetir código. 
- Realizar calculos matemáticos directamente. 
- Lógica para generar estilos dinámicos. 

**Explica la diferencia entre @import y @use en Sass.**

**R:** @import cargaba otros archivos Sass/CSS y mezclaba el contenido en un solo ámbito global. Puede causar conflictos de nombres

@use carga módulos con un sistema de namespaces (evitando colisiones). Compatible con la modularidad moderna. Las variables con - o _ al inicio son privadas. Solo compila lo que usa. 

**¿Qué es BEM y cómo puede mejorar la estructura y mantenimiento del código CSS?**

**R:** Es una metodología de nomenclatura para organizar y escribir CSS de manera escalable y mantenible. Su objetivo principal es evitar conflictos de especificidad y facilitar la colaboración en equipos grandes y crear un código autoexplicativo. 

Block: Componente independiente y reutilizable (ej: .header, .menu, .card)

Element: Parte de un bloque que no tiene sentido fuera de él (se denota con __)

Modifier: Variante o estado de bloque/elemento (se denota con --)

- Evita conflictos de especificidad
- El nombre de la clase describe su función 
- Reutilización con sus bloques independientes y pueden moverse entre proyectos. 
- Facilita el mantemiento ya que sabes exactamente qué afectará al modificar una clase. 

## 4. JavaScript / TypeScript:

**¿Cuál es la diferencia entre JavaScript y TypeScript?**

**R:** JavaScript es dinámico (tipado débil) puede provocar errores de tipo que se descubren en tiempo de ejecución. 

TypeScript es estático (tipado fuerte) define tipos durante el desarrollo. Detecta errores antes de ejecutar el código. 

TypeScript es un superset de JavaScript, ya que todo código JS válido es TS válido, se compila a JS.

**¿Qué son los tipos en TypeScript y cómo pueden mejorar el desarrollo de aplicaciones web?**

**R:** Los tipos son anotaciones que definen la estructura y el comportamiento de variables, funciones, objetos y otros elementos del código. Realiza una verificación estática de tipos durante el dearrollo, lo que ayuda a detectar erroresantes de ejecutar el código. 

Transforma la experiencia de desarrollo web:
- Menos buggs gracias a la verificación estática (tipado fuerte)
- Mejor mantenibilidad y colaboración
- Productividad con autocompletado y documentación integrada. 

**Explica cómo se declara una variable en JavaScript y en TypeScript.**

**R:** En JavaScript usar palabras clavecomo var, let y const para declarar variables pero no especifica tipos. 

```
let nombre = "Lou";
let effaf = 25;
let esActivo = true;

const PI = 3.1416;
```

Tipado dinámico: una variable puede cambiar de tipo. 

En TypeScript añade tipado estático, lo que significa que defines el tipo de una variable al declararla. 
```
let nombre: string = "Lou";
let edad: number = 25;
let esActivo: boolean = true;

const PI: number = 3.1416;
```

Inferencia de tipos: TS deduce el tipo si no lo especificas. 

## 5. Sistema de Gestión de Paquetes (npm):

**¿Qué es npm y cuál es su función en el desarrollo de aplicaciones web?**

**R:** Es un gestor de paquees predeterminado para Node.js, usado ampliamente en el desarrollo frontend. Simplifica la instalación, gestión y distribución de librerías y herramientas en proyectos web. 

Describe el proceso para instalar un paquete npm en un proyecto.
R: Tener Node.js, preferentemente instalar un gestor de múltiples versiones de Node, útil para trabajar en diferentes proyectos. 
Tener un proyecto inicializado con package.json, si no es así y es el primer paquete crea un package.json (archivo que registra las dependencias) 

```
    npm init -y
```

Instalar un paquete como dependenia de producción

```
    npm install nombre-del-paquete
```

```
    npm i nombre-del-paquete
```

Instalar como dependencia de desarrollo

```
    npm install nombre-del-paquete --save-dev
```

```
    npm i nombre-del-paquete -D
```

Instalar globalmente

```
    npm install -g nombre-del-paquete
```

Instalar una versión específica
```
    npm install nombre-del-paquete@1.2.3
```

Verificamos la instalación

- El paquete se descarga en la carpeta node_modules
- Su nombre y versiones se añaden al package.json 

```
    "dependencies": {
        "nombre-del-paquete": "^versión"
    }
```

o en devDependencies si usaste --save-dev

## 6. Integración e Implementación de APIs y WebSocket :

**Explica qué es una API y cómo se utiliza en el desarrollo web.**

**R:** Es un conjunto de reglas y protocolos que permite que dos aplicaciones o sistemas se comuniquen entre sí. Actua como un intermediario de datos o funcionalidades sin exponer la lógica interna del servidor. 

Las APIs son la columna vertebral de las aplicaciones web modernas. 

- Conecta backend y frontend, ya que frontend consume datos de un backend via API.
- Integra servicios externos para añadir funcionalidades sin desarrollarlas desde cero. 
- Microservicios arquitecturas donde pequeños servicios independientes (ej: carrito de compras, usuarios) se comunican via APIs.
- Las apps moviles consumen las misma APIs que la web.


**¿Qué es JSON y cuál es su relación con las APIs REST?**

**R:** Las APIs REST utilizan JSON como formato principal para enviar y recibir datos entre el cliente (frontend) y servidor (backend). 

JSON es el lenguaje universal de las APIs REST gracias a su simplicidad y eficiencia. Es un formato de texto ligero fácil de leer/editar, diseñado para almacenar e intercambiar datos entre sistemas. 

**Describe el proceso para realizar una solicitud GET a una API REST utilizando JavaScript/TypeScript.**

- Instalar Axios
- Importamos la librería axios
- Definimos el tipo de datos esperado
- URL de la API
- Solicitud GET con Axios (async/await)

**Describe como integrarias un WebSocket**

- Crear un servidor WebSocket (backend)
    - Importar librería (ws la más popular para WebSocekts)
    - Inicializar el servidor en el puerto 8080
    - Manejar conexiones entrantes
    - Escuchar mensajes del cliente
    - Enviar respuesta al cliente
    - Manejar cierre de conexión

- Conexión desde el Cliente (frontend)

## 7. Patrón MVC:

**Define el patrón de diseño Modelo-Vista-Controlador (MVC) y explica sus componentes.**

**R:** Es un patrón arquitectónico que organiza el código de una aplicación en tres componentes principales, separando las responsabilidades para facilitar el mantenimiento y la escalabilidad. 

Modelo: Gestiona los datos y la lógica de negocio (ej: consultas a la base de datos, validaciones). 
No sabe nada sobre la interfaz o cómo se muestra los objetos. 

Vista: Muestra la interfaz de usuario al usuario final (HTML, CSS, JSON, etc.). 
No contiene lógica de negocio, solo presenta datos recibidos del Controlador.

Controlador: Actua como intermediario entre el Modelo y la Vista. Recibe peticiones del usuario (ej: clicks, formularios), procesa datos con el Modelo y decide qué Vista mostrar

**¿Cuál es la ventaja de utilizar el patrón MVC en el desarrollo de aplicaciones web?**

- Separación de preocupaciones, cada componente tiene una responsabilidad clara. 
- Facilita cambios en una capa sin afectar las demás.
- El mismo Modelo puede usarse en múltiples Vistas
- Lógica de negocio (Modelo) puede probarse independientemente. 

## 8. Desarrollo de Pruebas Unitarias e Integración (Jasmine y Karma):

**¿Qué son las pruebas unitarias y por qué son importantes en el desarrollo de software?**

**R:** Son test automatizados que verifican el comportamiento de unidades individuales de código (funciones, métodos o clases) asegurando que funcionen correctamente bajo diferentes condiciones o escenarios.

Su importancia en el desarrollo de software:

- Detecta errores antes de llegar a producción, reduciendo costos de corrección. 
- Permite modificar código con confianza, sabiendo que los test alertarán si algo se rompe. 
- Los test describen cómo debería comportarse el código (ej: qué inputs son válidos)
- Evita la necesidad de pruebas manuales repetitivas. 

**Explica la diferencia entre las pruebas unitarias y las pruebas de integración.**

**R:** Pruebas unitarias
- Verifica el comportamiento de unidades individuales de código (funciones, métodos o clases en aislamiento) 
- Valida la lógica interna de funciones/métodos

Pruebas de integración
- Verifica que múltiples componentes (módulos, servicios, APIS) funcionen correctamente juntos
- Detecta errores en flujos complejos, ej: comunicación entre servicios. 

Ninguna es más importante que otra son complementarias. 
Unitarias asegura que cada pieza funcione bien por separado.
Integración asegura que las piezas encajen correctamente. 

**Describe cómo se configura y ejecuta un conjunto de pruebas Jasmine utilizando Karma en un proyecto Angular.**

**R:** No conozco las pruebas, solo he visto un poco de preubas por jest. 

**¿Qué tan comodo te sentirias trabajando con Angular?**

**R:** Bien, será un reto que con disciplina y dedicación puedo lograr.

Nota: No te preocupes si no puedes responder a todas las preguntas con precisión. Se valorará el conocimiento general y la comprensión de los conceptos clave. ¡Buena suerte!


