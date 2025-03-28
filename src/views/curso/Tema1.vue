<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Planeación del proceso emprendedor en el siglo XXI'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La planeación del proceso emprendedor comprende estrategias y acciones estructuradas para transformar una idea en una empresa viable y sostenible. En el siglo XXI, la cultura emprendedora ha evolucionado con la digitalización, la globalización y la inteligencia artificial (IA), lo que exige nuevas herramientas y enfoques para el desarrollo de negocios.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Factores esenciales para la planeación del proceso emprendedor

    .row.mb-5
      .col-lg-2.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-10.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para desarrollar un negocio exitoso, es necesario considerar diversos aspectos estratégicos que van desde la concepción de la idea hasta la gestión y expansión de la empresa. A continuación, se detallan los elementos clave que conforman este proceso.

        h2(data-aos="fade-left") Definición de la idea de negocio y validación del mercado
        p.mb-5 El primer paso en la planeación es definir una idea de negocio que responda a una necesidad del mercado. Para ello, es fundamental:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.h-100.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 01
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Identificar un problema o una oportunidad en el sector elegido.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.h-100.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 02
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Validar la propuesta de valor con potenciales clientes.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.h-100.p-4(data-aos="fade-up")
          .row
            .col-lg-3
              h5 03
            .col-lg-9.align-items-center
              p.mb-0(data-aos="fade-up") Utilizar IA para analizar tendencias y detectar oportunidades emergentes.

    h2(data-aos="fade-left") Investigación de mercado y segmentación de clientes

    .bg-full-width.bg-h85-3.mb-5
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2.mt-lg-3
                p Después de definir la idea, es crucial comprender el entorno en el que se desarrollará el negocio. Esto incluye:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Análisis del entorno emprendedor y la competencia.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Segmentación de clientes mediante herramientas de <em>Big Data</em>.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-4
                    p.mb-0 Uso de IA para predecir comportamientos de los consumidores.
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Herramientas de IA en la investigación de mercado
    p.mb-5 Las herramientas de inteligencia artificial permiten analizar grandes volúmenes de datos para segmentar clientes y predecir tendencias de consumo. A continuación, se presentan algunas de las más utilizadas:

    .bg-full-width.bg-fondo-4.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7%" y="18.5%" numero="+")
                h5 Google Analytics
                p Una tienda en línea usa Google Analytics para identificar qué productos generan más interés y optimizar su inventario.
    
              .bg-color-white.box-shadow.p-3(x="8%" y="43.5%" numero="+")
                h5 Adobe Analytics
                p Una tienda de ropa detecta patrones de compra y ofrece descuentos en tiempo real, aumentando la conversión en 25%.
    
              .bg-color-white.box-shadow.p-3(x="7.5%" y="68.5%" numero="+")
                h5 Microsoft Power BI
                p Un supermercado ajusta su inventario según los hábitos de compra regionales, logrando un aumento del 15% en ventas.
    
              .bg-color-white.box-shadow.p-3(x="75%" y="19.5%" numero="+")
                h5 Google Cloud AI y BigQuery
                p Una empresa de telecomunicaciones predice cancelaciones y ofrece beneficios a clientes en riesgo, mejorando la retención en un 20%.
              .bg-color-white.box-shadow.p-3(x="77.4%" y="43.5%" numero="+")
                h5 H2O.ai
                p Una plataforma de comida saludable anticipa la demanda de productos estacionales, reduciendo costos en un 12%.
              .bg-color-white.box-shadow.p-3(x="71.8%" y="62.5%" numero="+")
                h5 Tableau
                p Una cadena de supermercados ajusta su stock en distintas regiones, aumentando las ventas en un 15%.
              .bg-color-white.box-shadow.p-3(x="75.5%" y="80.5%" numero="+")
                h5 IBM Watson Analytics
                p Un banco analiza el comportamiento financiero de sus clientes para ofrecer productos personalizados.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Herramientas de IA para predecir comportamientos y personalización de ofertas
    
    p.mb-4 La inteligencia artificial permite anticipar patrones de compra y personalizar la experiencia del cliente. A continuación, se presentan algunas herramientas utilizadas para este propósito:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Salesforce Einstein AI	
                p.mb-0 Una tienda de tecnología recomienda productos, aumentando la conversión en 20 %.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Amazon Personalize	
                p.mb-0 Una plataforma de <em>streaming</em> recomienda contenido, aumentando el tiempo de uso de los usuarios.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center SAS Customer Intelligence 360
                p.mb-0 Una aerolínea personaliza ofertas de <em>upgrades</em>, aumentando la conversión en 40%.

        h2(data-aos="fade-left") Estructura del modelo de negocio y estrategia empresarial

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Una vez comprendido el mercado, es esencial diseñar un modelo de negocio sólido que garantice sostenibilidad y crecimiento. Para ello, se deben implementar estrategias como:
    
        .bg-color-3.px-4.pt-4(data-aos="fade-left")
          .row.align-items-end
            .col-lg-3.order-2
              img(src="@/assets/curso/tema1/9.svg").mx-auto
            .col-lg-9.order-1
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Aplicación del Modelo Canvas para definir la estructura del negocio.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Desarrollo de estrategias de diferenciación e innovación.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-4
                  p.mb-0 Automatización de procesos con IA para mejorar la productividad.
    
    h2.mb-5(data-aos="fade-left") Gestión financiera y obtención de recursos

    .bg-full-width-2.bg-color-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.align-items-center
          .col-lg-5
            img(src="@/assets/curso/tema1/10.svg").mx-auto
          .col-lg-7
            p La sostenibilidad financiera es clave para el éxito del negocio. Dentro de la planificación económica se deben considerar aspectos como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Estimación de costos y proyección de ingresos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Fuentes de financiamiento: capital de riesgo, <em>crowdfunding</em>, préstamos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-4
                p.mb-0 Implementación de software de IA para gestionar flujos de efectivo.
    
    h2(data-aos="fade-left") Plan de acción y desarrollo empresarial
    p.mb-5 El desarrollo de un negocio requiere una ejecución estructurada y flexible. Para ello, se recomienda:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        .bg-color-2.px-4.py-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Diseñar cronogramas de ejecución con plazos realistas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Adaptarse a cambios del mercado mediante herramientas tecnológicas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-4
              p.mb-0 Crear valor a través de la innovación y la personalización de productos o servicios.
    
    h2.mb-5(data-aos="fade-left") Importancia de la planeación en el siglo XXI

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Hoy en día, emprender no depende solo de la creatividad e intuición. Es fundamental integrar estrategias tradicionales con tecnologías emergentes como la IA, la automatización y el análisis de datos. Esto permite anticiparse a cambios, minimizar riesgos y escalar negocios de manera eficiente.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los emprendedores del siglo XXI deben ser ágiles, innovadores y estratégicos. La planeación es clave para transformar ideas en negocios rentables, impactando no solo la economía, sino también el desarrollo social y tecnológico a nivel global.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Factores de éxito y fracaso del emprendedor
    
    p.mb-4 Emprender es un camino lleno de desafíos y oportunidades, donde el éxito o el fracaso dependen de múltiples factores. A continuación, se explican algunos: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Modelo Canvas y su aplicación en los negocios

    .row.mb-5.align-items-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-left") El Modelo Canvas es una metodología visual utilizada para estructurar negocios de manera clara y concisa. Se compone de nueve bloques fundamentales que permiten analizar cada aspecto de la empresa. Incorporar herramientas de IA en este modelo facilita la toma de decisiones basadas en datos y permite prever escenarios con mayor precisión. Para aplicar el Modelo Canvas en un negocio, es fundamental comprender sus componentes. A continuación, se detalla cada bloque con ejemplos prácticos:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-2.order-lg-1
              h5 Propuesta de valor
              p Netflix ofrece acceso ilimitado a contenido en <em>streaming</em> sin anuncios.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-2.order-lg-1
              h5 Segmentos de clientes
              p Amazon segmenta a clientes en Prime, compradores ocasionales y empresas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-2.order-lg-1
              h5 Canales de distribución
              p Apple vende a través de tiendas propias, distribuidores y su web.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-2.order-lg-1
              h5 Relación con los clientes
              p Spotify usa un modelo <em>freemium</em> con opciones premium de pago.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-2.order-lg-1
              h5 Fuentes de ingreso
              p Google obtiene ingresos a través de publicidad con Google Ads.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-2.order-lg-1
              h5 Recursos clave
              p Tesla invierte en tecnología de baterías y propiedad intelectual.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-2.order-lg-1
              h5 Actividades clave
              p Uber desarrolla su plataforma y optimiza rutas y captación de conductores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.order-2.order-lg-1
              h5 Socios clave
              p Nike trabaja con proveedores y distribuidores globales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7.order-2.order-lg-1
              h5 Estructura de costos
              p Airbnb reduce costos operando sin poseer propiedades.

    h2(data-aos="fade-left") Guía para aplicar el Modelo Canvas
    p.mb-5 Para facilitar la implementación del Modelo Canvas, es recomendable seguir un orden lógico al completar cada bloque. La siguiente tabla resume los pasos clave y sus respectivos ejemplos:.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Propuesta de valor") ¿Qué problema resuelve el negocio y qué beneficio ofrece? Netflix ofrece entretenimiento bajo demanda sin anuncios con una experiencia personalizada.
          p(numero="2" titulo="Segmentos de clientes") ¿Quiénes son los clientes potenciales? Amazon Prime tiene clientes premium que buscan envíos rápidos y contenido exclusivo.
          p(numero="3" titulo="Canales de distribución") ¿Cómo se entregará el producto o servicio? Apple vende a través de tiendas propias, distribuidores y su web.
          p(numero="4" titulo="Relación con los clientes") ¿Cómo se interactúa y fideliza a los clientes? Spotify ofrece un modelo <em>freemium</em> donde los clientes pueden optar por una versión premium sin anuncios.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/25.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Fuentes de ingreso") ¿Cómo generará ingresos el negocio? Google gana dinero con Google Ads vendiendo espacios publicitarios.
          p(numero="2" titulo="Recursos clave") ¿Qué activos son esenciales para la operación? Tesla depende de su tecnología de baterías y propiedad intelectual para diferenciarse.
          p(numero="3" titulo="Actividades clave") ¿Cuáles son las acciones esenciales para la empresa? Uber invierte en tecnología para optimizar rutas y captar conductores.
          p(numero="4" titulo="Socios clave") ¿Quiénes son los aliados estratégicos? Nike trabaja con fabricantes de calzado en Asia y distribuidores globales.
          p(numero="5" titulo="Estructura de costos") ¿Cuáles son los costos fijos y variables? Airbnb reduce costos al no poseer propiedades y centrarse en la gestión de reservas.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Una vez completado el modelo, es crucial verificar que cada bloque esté alineado con los demás y evaluar oportunidades de mejora según la evolución del negocio.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Contexto emprendedor y análisis del mercado
    
    p.mb-4 El entorno empresarial influye en la viabilidad de cualquier negocio. Antes de lanzar un emprendimiento, es clave analizar factores externos que pueden afectar su desarrollo. Para evaluar el mercado de un producto o servicio, es necesario analizar distintos factores que influyen en su éxito. 

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/27.svg" alt="" style="width: 90px")
              h5.text-center Tamaño y crecimiento del mercado	
              p.mb-0.text-center Identificar la magnitud del sector y su proyección de crecimiento.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/28.svg" alt="" style="width: 90px")
              h5.text-center Segmentación de clientes	
              p.mb-0.text-center Definir los diferentes grupos de clientes según sus necesidades y características.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/29.svg" alt="" style="width: 90px")
              h5.text-center Tendencias y comportamientos de consumo	
              p.mb-0.text-center Analizar hábitos de compra y cambios en la demanda del mercado.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/30.svg" alt="" style="width: 90px")
              h5.text-center Estacionalidad o fluctuaciones	
              p.mb-0.text-center Evaluar si el producto o servicio tiene variaciones en la demanda a lo largo del año.
        
        h2(data-aos="fade-left") Ejemplo práctico de análisis de mercado
        p.mb-5 Para ilustrar cómo se aplica el análisis de mercado a continuación, se presenta casos concretos en diferentes industrias:

    TabsC.color-primario
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Café <em>gourmet</em>" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Café <em>gourmet</em>
            p.mb-0 Una empresa que desea vender café premium debe analizar si existe suficiente demanda en su área geográfica y si los consumidores están dispuestos a pagar un precio más alto por calidad y experiencia.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/31.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ropa sostenible" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ropa sostenible
            p.mb-0 Un emprendimiento de moda ecológica debe evaluar si su público objetivo valora la producción responsable y si el mercado está dispuesto a pagar un costo adicional por materiales reciclados.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/32.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="<em>Delivery</em> de comida saludable" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 <em>Delivery</em> de comida saludable
            p.mb-0 Un negocio de entrega de comida saludable debe analizar las tendencias de alimentación en su región, la competencia y la viabilidad de su modelo de suscripción.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/33.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/128478" target="_blank" rel="noopener noreferrer") Sánchez-García, J. C. & Hernández-Sánchez, B. R. (2020). El proceso emprendedor: desarrollo conceptual, histórico y teórico: ( ed.). Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.infoautonomos.com/crecimiento-empresarial/claves-gestion-de-empresas/" target="_blank" rel="noopener noreferrer") Infoautonomos (16 de julio de 2024). Claves de éxito y fracaso en gestión de empresas

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=W16gt1qa2N8&ab_channel=PERO%2C%C2%BFQU%C3%89DIR%C3%8DAMARCOAURELIO%3F" target="_blank" rel="noopener noreferrer") Pero, ¿qué diría Marco Aurelio? (2025, 17 de febrero). Si fracasaste, esto es lo que debes hacer ahora | estoicismo. [Vídeo]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
