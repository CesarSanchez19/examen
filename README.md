### Descripción del Proyecto "Front End".

### Primera Parte del Proyecto.

Este proyecto es un **sitio web responsivo** que incorpora una **barra de navegación interactiva**, un **slider de imágenes**, una **sección de artículos** y un **pie de página** informativo. Utiliza HTML, CSS y JavaScript para proporcionar una experiencia de usuario fluida y atractiva. A continuación se detallan las características clave del proyecto:

#### 1. **Estructura General**
- **Diseño Responsivo**: El sitio está diseñado para adaptarse a diferentes tamaños de pantalla, asegurando una experiencia de usuario óptima en dispositivos móviles y de escritorio. Utiliza consultas de medios (media queries) para ajustar estilos en pantallas más pequeñas.

#### 2. **Barra de Navegación**
- **Estilo Personalizado**: La barra de navegación presenta un fondo oscuro con texto en mayúsculas, diseñado para mejorar la visibilidad y la accesibilidad. Los elementos de navegación incluyen efectos de hover que resaltan el texto y muestran un subrayado animado.
- **Interactividad**: Al cargar la página, los elementos de la barra de navegación aparecen de forma secuencial, creando un efecto dinámico.

#### 3. **Slider de Imágenes**
- **Carrusel de Imágenes**: El slider ocupa el ancho completo de la pantalla y presenta imágenes de alta calidad que se adaptan a diferentes dispositivos, gracias a la propiedad `object-fit`.
- **Animaciones**: Las transiciones suaves entre las imágenes mejoran la experiencia visual.

#### 4. **Sección de Artículos**
- **Diseño de Tarjetas**: Los artículos se presentan en un formato de tarjeta, con imágenes, títulos y descripciones. Cada tarjeta incluye efectos de hover que aumentan el tamaño de la imagen, lo que atrae la atención del usuario.
- **Flexibilidad**: La disposición utiliza `flexbox`, permitiendo que las tarjetas se distribuyan uniformemente y se ajusten según el tamaño de la pantalla.

#### 5. **Pie de Página**
- **Información de Contacto y Redes Sociales**: El pie de página incluye enlaces a redes sociales, que cuentan con animaciones al pasar el cursor y transiciones de color.
- **Estilo Coherente**: El pie de página mantiene la paleta de colores del sitio, con texto claro y una estructura organizada que mejora la legibilidad.

#### 6. **Interactividad con JavaScript**
- **Carga Dinámica**: Se utilizan eventos de JavaScript para mostrar los elementos de navegación con un efecto de desvanecimiento al cargar la página.
- **Actualización del Año**: El año actual se muestra automáticamente en el pie de página, actualizándose cada año sin necesidad de modificaciones manuales.

### Segunda Parte del Proyecto.

1. **Estructura general del formulario**:
   - El formulario está envuelto dentro de un `div` con la clase `container`, lo que asegura que el contenido esté alineado y centrado en la página. Este contenedor también cuenta con un margen superior (`mt-5`) para separarlo del contenido anterior.

2. **Colocación del formulario en dos columnas**:
   - Se utiliza un `row` para dividir el espacio en dos columnas. La primera columna, con la clase `col-md-6`, contiene el formulario, mientras que la segunda columna tiene un mapa incrustado y la información de contacto. Esta disposición asegura que el diseño sea responsivo, de modo que el formulario y el mapa se apilen verticalmente en pantallas pequeñas y se coloquen uno al lado del otro en pantallas medianas o grandes.

3. **Campos del formulario**:
   - Cada campo del formulario está dentro de un `div` con la clase `mb-3`, lo que añade un margen inferior a cada campo para que haya espacio entre ellos. A continuación se describen los campos principales:
     - **Nombre (Name)**: Un campo de entrada de texto (`<input>`) con la clase `form-control` para darle estilo de Bootstrap y un atributo `required` para hacer que el campo sea obligatorio.
     - **Apellido (Surname)**: Similar al campo de nombre, también es un campo de texto obligatorio con un diseño uniforme.
     - **Correo electrónico (Email)**: Un campo de tipo `email`, que asegura la validación automática del formato del correo en navegadores compatibles, también obligatorio.
     - **Teléfono (Phone)**: Un campo de tipo `tel` con un patrón definido para aceptar solo 9 dígitos, lo que sugiere que es para un número de teléfono local.
     - **Asunto (Subject)**: Otro campo de texto obligatorio para que el usuario indique el tema de su mensaje.
     - **Mensaje (Message)**: Un área de texto (`<textarea>`) más grande, diseñada para que el usuario ingrese su mensaje con una altura de 6 filas predeterminadas.

4. **Botones del formulario**:
   - Al final del formulario hay un botón de envío (`<button>`), que está estilizado con la clase `btn btn-primary` para darle un estilo visual consistente con los demás elementos del formulario. Al hacer clic en este botón, se envía la información del formulario.

5. **Columna de mapa e información de contacto**:
   - A la derecha del formulario, en la segunda columna (`col-md-6`), se incluye un iframe de Google Maps que muestra la ubicación física del lugar. Debajo del mapa hay una lista de la información de contacto, que incluye dirección, teléfono, correo electrónico y el horario de atención. Cada línea de contacto está acompañada por un icono relevante proporcionado por Font Awesome, lo que mejora la experiencia visual.

6. **Diseño responsivo**:
   - El diseño está preparado para adaptarse a diferentes tamaños de pantalla. En dispositivos móviles, las dos columnas (formulario y mapa) se apilan una encima de la otra, ocupando cada una el 100% del ancho disponible. En pantallas más grandes, como tablets o computadoras de escritorio, las columnas se muestran una al lado de la otra, ocupando cada una la mitad del ancho disponible.

Este diseño es completamente flexible gracias al uso de las clases de Bootstrap, lo que garantiza que se vea bien tanto en dispositivos móviles como en pantallas más grandes.

### Conclusión
Este proyecto combina **diseño moderno** y **funcionalidad interactiva**, lo que resulta en un sitio web atractivo y fácil de usar. Se puede ampliar y personalizar según las necesidades del usuario, lo que lo hace adecuado para una variedad de propósitos, desde blogs personales hasta sitios web de negocios.
