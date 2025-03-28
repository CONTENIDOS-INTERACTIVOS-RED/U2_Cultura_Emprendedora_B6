<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Análisis de la competencia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p.mb-0.mt-lg-3.text-white Antes de lanzar un negocio, es fundamental conocer qué empresas ya operan en el mercado y cómo se diferencian. Un análisis detallado de la competencia permite identificar oportunidades y amenazas, así como definir estrategias para posicionarse de manera efectiva.
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Empresas competidoras directas e indirectas	
              p.mb-0 Identificar negocios similares y sustitutos.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Fortalezas y debilidades de la competencia		
              p.mb-0 Analizar qué hacen bien y en qué pueden mejorar.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Precios y estrategias de posicionamiento		
              p.mb-0 Comparar costos, promociones y percepción de marca.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Factores de diferenciación y ventajas competitivas		
              p.mb-0 Identificar lo que hace único a cada competidor.
    
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Para ilustrar cómo se aplica este análisis, a continuación se muestra un caso real en el sector de <em>delivery</em> de alimentos:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.pst
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Uber Eats	
                p.mb-0 Amplia red de restaurantes y entregas rápidas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.pst
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Rappi	
                p.mb-0 Ofrece múltiples servicios además de comida, como farmacia y mercado.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.pst
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Glovo
                p.mb-0 Se enfoca en conveniencia con entregas de diversos productos.

        #t_2_1.titulo-segundo(data-aos="flip-up").mb-3
          h2 #[span 2.1] Factores económicos

    p.mb-4 Las condiciones económicas pueden afectar la viabilidad de un negocio. Evaluar el entorno financiero permite anticipar riesgos y oportunidades de inversión. A continuación, se presentan los factores económicos más relevantes para un emprendimiento:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Inflación y tasas de interés		
              p.mb-0.text-center Impacto en costos, precios y financiamiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
              h5.text-center Poder adquisitivo de los consumidores		
              p.mb-0.text-center Capacidad del mercado para adquirir productos o servicios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/11.svg" alt="" style="width: 90px")
              h5.text-center Políticas económicas y estabilidad		
              p.mb-0.text-center Factores macroeconómicos que afectan la inversión.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Disponibilidad de financiamiento		
              p.mb-0.text-center Acceso a crédito y capital de riesgo.

        #t_2_2.titulo-segundo(data-aos="flip-up").mb-3
          h2 #[span 2.2] Factores Socioculturales
  
    p.mb-4 El comportamiento de los consumidores está influenciado por tendencias culturales, valores y estilos de vida. Analizar estos factores ayuda a adaptar la oferta de productos y servicios.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center.mt-lg-4
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cultura de consumo	
              p.mb-0 Preferencias y hábitos de compra de los clientes.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tendencias y cambios en el estilo de vida	
              p.mb-0 Modificaciones en las prioridades y comportamientos del consumidor.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center.mt-lg-2
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Impacto de la digitalización
              p.mb-0 Influencia de las tecnologías en la compra y consumo.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-1.px-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            h5 Ejemplo práctico: comida vegana
            p.mb-0  Evalúa si hay un cambio de hábitos en la población que favorezca su consumo.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_2_3.titulo-segundo(data-aos="flip-up").mb-3
      h2 #[span 2.3] Factores tecnológicos
  
    p.mb-4 El avance tecnológico puede representar tanto una oportunidad como una amenaza. Las empresas deben innovar constantemente para mantenerse competitivas.

    TabsC.color-primario
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Automatización y digitalización" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3
            h4 Automatización y digitalización
            p.mb-0 Uso de tecnología para mejorar procesos.
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Uso de inteligencia artificial" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3
            h4 Uso de inteligencia artificial
            p.mb-0 Aplicaciones en marketing, producción y servicio al cliente.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desarrollo de comercio electrónico" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3
            h4 Desarrollo de comercio electrónico
            p.mb-0 Expansión de ventas en línea y nuevas plataformas.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
    
    .bg-color-12.p-4.mb-5(data-aos="fade-left")
      .row.align-items-center
        .col-lg-auto.p-0
          img(src="@/assets/curso/tema2/20.svg", style="max-width: 150px").mx-auto
        .col-lg
          h5 Ejemplo práctico: librerías físicas
          p.mb-0 Si no implementan venta en línea, pueden quedar rezagadas frente a competidores como Amazon.
    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.py-4
        #t_2_4.titulo-segundo(data-aos="flip-up").mb-3
          h2 #[span 2.4] Factores Políticos y Legales

        p.mb-4 Las regulaciones pueden afectar la operación de un negocio. Conocer el marco legal ayuda a evitar sanciones y garantizar el cumplimiento normativo.

    
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/21.svg" alt="" style="width: 90px")
              h5.text-center Leyes laborales y fiscales			
              p.mb-0.text-center Regulaciones sobre contratación e impuestos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/22.svg" alt="" style="width: 90px")
              h5.text-center Regulaciones medioambientales		
              p.mb-0.text-center Restricciones en producción y comercialización.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/23.svg" alt="" style="width: 90px")
              h5.text-center Políticas de comercio exterior		
              p.mb-0.text-center Condiciones para importar y exportar.
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                h5.text-white Ejemplo práctico: venta de vapeadores 
                p.mb-0.mt-lg-3.text-white Debe analizar si la legislación permite su comercialización.
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_2_5.titulo-segundo(data-aos="flip-up").mb-3
      h2 #[span 2.5] Factores medioambientales

    p.mb-4 El impacto ambiental es cada vez más relevante en las decisiones de consumo. Las empresas deben adaptarse a las nuevas exigencias de sostenibilidad.    
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Disponibilidad de recursos naturales		
              p.mb-0 Acceso a materias primas.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Regulaciones ambientales		
              p.mb-0 Normas que limitan la producción contaminante.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Preferencias por productos sostenibles	
              p.mb-0 Mayor demanda de opciones ecológicas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bg-color-11.px-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2
            h5 Ejemplo práctico: fabricación de botellas plásticas
            p.mb-0  Restricciones por normativas contra plásticos de un solo uso.
          .col-lg-2(data-aos="zoom-in").order-2.order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Evaluación de la viabilidad del negocio
    p.mb-5 Después de analizar todos estos factores, un emprendedor debe responder las siguientes preguntas para determinar la factibilidad de su negocio:

    .bg-full-width.bg-h85-4.mb-5
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color.mt-3
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 ¿Existe un mercado suficiente para mi producto o servicio?
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 ¿Puedo competir en este sector con una ventaja diferenciadora?
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 ¿Las condiciones económicas, políticas y tecnológicas favorecen mi negocio?
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 ¿El entorno sociocultural y medioambiental permiten la operación sostenible del emprendimiento?
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/28.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Herramientas para evaluar el entorno empresarial
    p.mb-5 Para un análisis más preciso, se pueden utilizar diferentes metodologías. La siguiente tabla muestra algunas de las más utilizadas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/29.png")
            .col-lg-7
              h5 Análisis PESTEL
              p Evalúa factores Políticos, Económicos, Socioculturales, Tecnológicos, Ecológicos y Legales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/30.png")
            .col-lg-7
              h5 Análisis FODA
              p Identifica Fortalezas, Oportunidades, Debilidades y Amenazas del negocio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/31.png")
            .col-lg-7
              h5 Big Data e IA
              p Permite analizar tendencias y patrones de consumo en tiempo real.

    #t_2_6.titulo-segundo(data-aos="flip-up").mb-3
      h2 #[span 2.6] Creación de valor

    p.mb-4 Crear valor para los clientes va más allá de ofrecer un producto. Implica garantizar que este resuelva una necesidad de manera innovadora y diferenciada.   

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/32.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Conocimiento del cliente			
                  p.mb-0 Identificar necesidades a través de estudios de mercado.

          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/33.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Propuesta de valor diferenciada			
                  p.mb-0 Destacar con innovación, calidad o tecnología avanzada.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/34.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Experiencia del cliente		
                  p.mb-0 Personalizar la oferta y mejorar la usabilidad del producto.

    
        p Algunos ejemplos prácticos son: 
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100.pst-2
              img.custom-image-card__image(src="@/assets/curso/tema2/35.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tesla	
                p.mb-0 Diferenciación con conducción autónoma e inteligencia artificial.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.pst-2
              img.custom-image-card__image(src="@/assets/curso/tema2/36.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Spotify	
                p.mb-0 Personalización con listas de reproducción basadas en IA.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100.pst-2
              img.custom-image-card__image(src="@/assets/curso/tema2/37.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Netflix
                p.mb-0 Adaptación a tendencias de consumo digital con contenido exclusivo.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/38.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este formato mantiene la estructura clara, con introducciones antes de cada tabla, asegurando que no haya títulos huérfanos y facilitando la lectura.

    #t_2_7.titulo-segundo(data-aos="flip-up").mb-3
      h2 #[span 2.7] Gestión financiera

    .row.mb-5.align-items-center.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/39.png", data-aos="zoom-in")
      .col-lg-10.order-2.order-lg-1
        p(data-aos="fade-left") Administrar correctamente los recursos financieros garantiza la sostenibilidad de cualquier negocio. Para tomar decisiones estratégicas adecuadas, sin importar el tipo de emprendimiento, es esencial considerar varios factores que impactan la estabilidad económica de la empresa.
        h2(data-aos="fade-left") Factores clave en la gestión financiera
        p Para optimizar la administración financiera, se deben evaluar los siguientes aspectos:
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/40.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Presupuesto y control de costos") Establecer un presupuesto realista y monitorear los gastos fijos y variables para evitar desbalances financieros.
          p(numero="2" titulo="Flujo de caja") Mantener un flujo de efectivo positivo para cubrir gastos operativos y planificar inversiones futuras.
          p(numero="3" titulo="Diversificación de ingresos") No depender de una sola fuente de ingresos. Un negocio puede combinar ventas directas con suscripciones o publicidad, como lo hace YouTube con su modelo gratuito basado en anuncios y YouTube Premium.
          p(numero="4" titulo="Financiamiento y capital") Evaluar opciones de financiamiento como inversores, préstamos bancarios o <em>crowdfunding</em> para expandir un negocio sin comprometer su estabilidad financiera.
          p(numero="5" titulo="Indicadores financieros y rentabilidad") Medir el margen de rentabilidad, retorno de inversión (ROI) y otros KPIs financieros para tomar decisiones informadas.
          p(numero="4" titulo="Planeación a largo plazo") Contar con estrategias de crecimiento sostenible permite anticipar oportunidades y adaptarse a cambios económicos o de mercado.
    
    h2(data-aos="fade-left") Uso de herramientas de IA en la gestión financiera
    p.mb-5 Las herramientas tecnológicas permiten optimizar la administración de los recursos financieros. La siguiente tabla resume algunas de sus aplicaciones:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/41.svg" alt="" style="width: 90px")
              h5.text-center Software de contabilidad automatizada				
              p.mb-0.text-center Registra transacciones automáticamente, reduciendo errores humanos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/41.svg" alt="" style="width: 90px")
              h5.text-center Predicción de flujo de caja con IA			
              p.mb-0.text-center Permite prever problemas financieros y anticipar soluciones.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/41.svg" alt="" style="width: 90px")
              h5.text-center Optimización de costos operacionales			
              p.mb-0.text-center Analiza patrones de gasto y sugiere estrategias de ahorro.
        
        #t_2_8.titulo-segundo(data-aos="flip-up").mb-3
          h2 #[span 2.8] Capital empresarial

    .row.mb-5.align-items-center.justify-content-center
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/42.png", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left") El capital empresarial hace referencia a los recursos financieros y materiales necesarios para iniciar y mantener un negocio. Contar con un financiamiento adecuado es clave para la estabilidad y el crecimiento del emprendimiento. Existen diversas fuentes de financiamiento, cada una con sus características y aplicaciones específicas.
        h2(data-aos="fade-left") Fuentes de financiamiento para el emprendimiento
        p A continuación, se presentan las principales fuentes de financiamiento disponibles para los emprendedores:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/43.png")
            .col-lg-7.order-2.order-lg-1
              h5 Capital de riesgo e inversores
              p Financiamiento de inversores privados o fondos de capital de riesgo a cambio de participación en la empresa. Ideal para startups con alto potencial de crecimiento. Uber y Airbnb se expandieron con esta estrategia.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/44.png")
            .col-lg-7.order-2.order-lg-1
              h5 <em>Crowdfunding</em> o financiamiento colectivo
              p Recaudación de fondos a través de plataformas como Kickstarter o GoFundMe. Útil para lanzar productos innovadores sin depender de préstamos bancarios. Pebble, un reloj inteligente, logró financiamiento con esta metodología.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/45.png")
            .col-lg-7.order-2.order-lg-1
              h5 Créditos y subvenciones gubernamentales
              p Préstamos a bajo interés o subsidios destinados a fomentar el emprendimiento, especialmente en sectores estratégicos como tecnología y sostenibilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/46.png")
            .col-lg-7.order-2.order-lg-1
              h5 Financiamiento bancario
              p Acceso a préstamos comerciales o líneas de crédito bancarias. Viable para negocios con un plan sólido y garantías para respaldar el crédito.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/47.png")
            .col-lg-7.order-2.order-lg-1
              h5 <em>Bootstrapping</em> o autofinanciamiento
              p Utilización de recursos propios para evitar depender de terceros. Jeff Bezos financió Amazon con capital propio antes de atraer inversionistas.
    
    h2(data-aos="fade-left") Selección de la fuente de financiamiento adecuada
    p.mb-5 Elegir la mejor opción de financiamiento dependerá de factores como el tipo de negocio, su nivel de riesgo y el tiempo de retorno de la inversión. La siguiente tabla ayuda a visualizar las condiciones de cada fuente:

  
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Capital de riesgo			
              p.mb-0 Requiere alto potencial de crecimiento y participación en la empresa.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 <em>Crowdfunding</em>				
              p.mb-0 Depende de la aceptación del mercado y la capacidad de promoción.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Créditos gubernamentales		
              p.mb-0 Accesibles para sectores estratégicos y proyectos sostenibles.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Préstamos bancarios				
              p.mb-0 Necesita garantías y un historial financiero sólido.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/48.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 <em>Bootstrapping</em>			
              p.mb-0 No depende de terceros, pero limita el crecimiento inicial.
    
    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                p.mb-0.mt-lg-3.text-white Un análisis financiero adecuado permitirá a los emprendedores tomar decisiones informadas y garantizar la estabilidad y crecimiento sostenible de su negocio.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/49.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/279521" target="_blank" rel="noopener noreferrer") Gallart, M. (2024). Emprender con criterio: la guía para emprendedores: (1 ed.). Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.rdstation.com/blog/es/modelo-canvas-que-es/ " target="_blank" rel="noopener noreferrer") RD Station- Maria Camila Crespo (15 de julio de 2024) Modelo Canvas: ¿qué es y cómo utilizarlo?.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RcHFU7gOK1o&ab_channel=LauraP%C3%A1ez" target="_blank" rel="noopener noreferrer") Páez, L. (2019, 13 de junio). Crea tu modelo de negocio en 9 pasos con el modelo CANVAS [Vídeo]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el primer paso clave en la planeación del proceso emprendedor?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Implementar estrategias de marketing.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Definir la idea de negocio y validar la propuesta de valor. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Buscar financiamiento antes de definir el producto.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Analizar la competencia sin segmentar el mercado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes herramientas permite segmentar clientes mediante Big Data?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Salesforce Einstein AI',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Google Analytics ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Amazon Personalize',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'H2O.ai',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es una ventaja del uso del Modelo Canvas en la planificación del proceso emprendedor?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Obliga a los emprendedores a seguir un modelo rígido sin cambios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se enfoca únicamente en los costos de operación.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Permite visualizar y estructurar el negocio de manera integral en nueve bloques. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Solo se aplica a grandes empresas, no a startups.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes opciones representa una fuente de financiamiento basada en inversionistas a cambio de participación en la empresa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>Bootstrapping</em>',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Capital de riesgo ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '<em>Crowdfunding</em>',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Subvenciones gubernamentales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes factores es una causa común de fracaso en los emprendimientos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Planificación estratégica adecuada.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Adaptabilidad a cambios del mercado.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Falta de investigación de mercado. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Uso de IA para analizar tendencias.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
