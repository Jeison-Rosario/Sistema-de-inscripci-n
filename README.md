# Sistema de inscripción

Simulador académico de inscripción desarrollado con HTML, CSS, JavaScript y Bootstrap. Permite introducir datos personales, elegir una carrera, seleccionar horarios de asignaturas y revisar una confirmación antes de finalizar.

**[Abrir demo](https://jeison-rosario.github.io/Sistema-de-inscripci-n/)** · **[Ver portafolio](https://jeison-rosario.github.io/proyectos/)**

> Es una demostración de interfaz. No registra inscripciones reales ni se conecta con un sistema académico.

## Funcionalidades

- Captura de nombre completo, provincia, ciudad, sector, calle y carrera.
- Validación de campos obligatorios: rechaza valores vacíos o compuestos solo por espacios y señala los campos con error.
- Catálogo de cinco asignaturas por carrera, definido directamente en JavaScript.
- Selección de un horario por asignatura mediante botones de opción.
- Resumen de los datos del estudiante y tabla semanal de lunes a sábado.
- Navegación hacia pantallas anteriores, limpieza del formulario y confirmación final mediante un diálogo.

Carreras incluidas: Software, Multimedia, Ciberseguridad, Videojuegos y Redes. Sus asignaturas y horarios son datos de ejemplo del proyecto; no constituyen una oferta académica oficial.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| HTML5 | Pantalla inicial y campos personales |
| CSS | Estilos de validación |
| Bootstrap local | Formularios, tarjetas, botones y tabla adaptable |
| JavaScript | Validación, construcción de pantallas y selección de horarios |

No requiere Node.js, MySQL, SQL Server, claves de API ni variables de entorno.

## Ejecución local

### Abrir directamente

1. Clonar el repositorio:

```sh
git clone https://github.com/Jeison-Rosario/Sistema-de-inscripci-n.git
cd Sistema-de-inscripci-n
```

2. Abrir `index.html` en un navegador moderno.

### Servidor estático opcional

Si tienes Python instalado:

```sh
python -m http.server 8000
```

Abrir http://localhost:8000/. También puede utilizarse Live Server de VS Code. No hay instalación de paquetes ni paso de compilación.

## Recorrido de uso

1. Completar todos los campos de información personal y seleccionar una carrera.
2. Pulsar **Registrar** para mostrar las asignaturas de esa carrera.
3. Elegir un horario en las asignaturas que se deseen incluir.
4. Pulsar **Aceptar** para revisar los datos y la tabla de horarios.
5. Utilizar **Volver atrás** si se desea regresar. Al reconstruir la selección, los horarios deben elegirse nuevamente.
6. Pulsar **Confirmar** y aceptar el diálogo para regresar al formulario con los campos vacíos.

El botón **Limpiar** vacía la información personal. Las selecciones y los datos existen únicamente durante la interacción con la página: no hay almacenamiento persistente ni comprobante descargable.

## Estructura

```text
index.html
assets/
  css/
    lib/bootstrap/       # Hojas de estilo locales de Bootstrap
    site/style.css       # Estados de validación
  js/
    lib/bootstrap/       # JavaScript local de Bootstrap
    site/index.js        # Flujo de inscripción y datos de ejemplo
```

En `assets/js/site/index.js`:

- `validate()` y `validateInputs()`: comprueban campos personales.
- `createSelection()`: construye las asignaturas y los horarios según la carrera.
- `createPersonalInfoCard()`: reconstruye la pantalla de datos personales.
- `createConfirmation()`: muestra los datos y la tabla semanal.
- `finalizar()`: solicita confirmación y restablece el formulario.
- `limpiarInputs()`: limpia los valores.

## Alcance actual

- No incluye usuarios, autenticación, base de datos ni conexión con servicios externos.
- No comprueba cupos, prerrequisitos, duplicados entre estudiantes ni conflictos entre horarios.
- Permite continuar con **Aceptar** sin seleccionar asignaturas; la tabla resultante queda vacía.
- Volver a la selección no conserva los horarios elegidos.
- La validación actual comprueba que los datos personales no estén vacíos; no verifica que una dirección exista.
- Parte de las pantallas se reconstruye con cadenas HTML que incluyen valores introducidos por el usuario. Antes de utilizar datos reales o ampliar el proyecto, conviene sustituir esa interpolación por nodos con `textContent` o una sanitización adecuada.
- El HTML inicial declara `lang="en"` y un título genérico; queda pendiente ajustarlos al español y al nombre del proyecto.

Estas observaciones describen el código actual. Este cambio de documentación no modifica las pantallas ni corrige esos comportamientos.

## Comprobación de esta documentación

Se revisaron el HTML, el JavaScript y los estilos propios. Una comprobación del DOM con jsdom confirmó:

- Rechazo de los seis campos personales vacíos.
- Presentación de cinco asignaturas para Software.
- Acceso a la confirmación con cero materias seleccionadas.
- Limpieza de campos al confirmar.

No se realizó una revisión visual en navegador o móvil ni una prueba de una inscripción real. Para una comprobación manual, recorrer cada carrera, elegir horarios, revisar su distribución por día, volver atrás y finalizar.

## Mejoras posibles

Validar al menos una asignatura y los cruces de horario; conservar la selección al retroceder; separar los datos del catálogo de la manipulación del DOM; mejorar accesibilidad, idioma y título; añadir un comprobante de la simulación. La persistencia y las reglas académicas requerirían una ampliación del proyecto.

## Autor

[Jeison Rosario](https://github.com/Jeison-Rosario)
