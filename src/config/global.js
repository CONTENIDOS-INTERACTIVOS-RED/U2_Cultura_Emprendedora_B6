export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Planeación Proceso Emprendedor',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación del proceso emprendedor en el siglo XXI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Factores esenciales para la planeación del proceso emprendedor',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Herramientas de IA para predecir comportamientos y personalización de ofertas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Factores de éxito y fracaso del emprendedor',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modelo Canvas y su aplicación en los negocios',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Contexto emprendedor y análisis del mercado',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de la competencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores económicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores Socioculturales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Factores tecnológicos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Factores Políticos y Legales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Factores medioambientales',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Creación de valor',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Gestión financiera',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Capital empresarial',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Varios, A. (2019). Fortalecimiento empresarial: capacitación y acompañamiento al espíritu emprendedor: (1 ed.). Universidad Mariana. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/224604',
    },
    {
      referencia:
        'Salcedo Camacho, P. D. (2021). Programa emprendedor: ( ed.). Universidad Privada del Valle.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/191127',
    },
    {
      referencia:
        'Cardella, G. M. (Il.), Hernández-Sánchez, B. R. (Il.) & Sánchez-García, J. C. (Il.). (2024). El contexto personal y la educación emprendedora: (1 ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271735',
    },
    {
      referencia:
        'Cuenca, R. Reátegui, L. & Rentería, M. (2022). El sujeto emprendedor: imaginarios de éxito y representaciones sobre el trabajo: (1 ed.). IEP Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/273878',
    },
    {
      referencia:
        'Fernández Aguado, J. (2023). Entrevista a Aristóteles: filosofía para líderes y emprendedores: (1 ed.). LID Editorial España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/269746',
    },
    {
      referencia:
        'Roca Pacheco, E. D. (Coord.). (2023). Estrategias para fortalecer el ecosistema emprendedor sostenible: (1 ed.). Editorial Exced. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/272415',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de mercado',
      significado:
        'evaluación del tamaño, tendencias y comportamiento del mercado para determinar la viabilidad de un negocio.',
    },
    {
      termino: 'Automatización de procesos',
      significado:
        'uso de tecnología e inteligencia artificial para optimizar y agilizar tareas repetitivas dentro de una empresa.',
    },
    {
      termino: '<em>Big Data</em>',
      significado:
        'conjunto de datos masivos y complejos que requieren procesamiento avanzado para extraer información relevante.',
    },
    {
      termino: 'Capital de riesgo:',
      significado:
        ' financiamiento proporcionado por inversionistas a startups con alto potencial de crecimiento a cambio de participación en la empresa.',
    },
    {
      termino: 'Canales de distribución:',
      significado:
        'medios a través de los cuales una empresa entrega su producto o servicio a los clientes.',
    },
    {
      termino: '<em>Crowdfunding</em>',
      significado:
        ' método de financiamiento colectivo donde múltiples personas contribuyen económicamente a un proyecto o empresa',
    },
    {
      termino: 'Estructura de costos',
      significado:
        'clasificación de los gastos fijos y variables asociados a la operación de un negocio.',
    },
    {
      termino: 'Factores de éxito del emprendimiento',
      significado:
        'elementos clave como visión, planificación estratégica, gestión financiera y adaptación al cambio que contribuyen al éxito de un negocio.',
    },
    {
      termino: 'Factores de fracaso del emprendimiento',
      significado:
        'razones que pueden llevar a la quiebra de un negocio, como mala administración, falta de investigación de mercado y ausencia de innovación.',
    },
    {
      termino: 'Flujo de caja',
      significado:
        'movimiento de ingresos y egresos dentro de una empresa que determina su liquidez y capacidad operativa.',
    },
    {
      termino: 'Gestión financiera',
      significado:
        'administración eficiente de los recursos económicos para garantizar la sostenibilidad y crecimiento de un negocio.',
    },
    {
      termino: 'Innovación empresarial',
      significado:
        'aplicación de nuevas ideas, tecnologías o procesos para mejorar productos, servicios o modelos de negocio.',
    },
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'tecnología que permite a las máquinas aprender y tomar decisiones basadas en datos sin intervención humana.',
    },
    {
      termino: 'Investigación de mercado',
      significado:
        'proceso de recopilación y análisis de información sobre consumidores y competidores para tomar decisiones estratégicas.',
    },
    {
      termino: 'Modelo <em>Canvas</em>',
      significado:
        'herramienta visual que permite estructurar un modelo de negocio a través de nueve bloques fundamentales.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'conjunto de beneficios que un producto o servicio ofrece a los clientes y lo diferencia de la competencia.',
    },
    {
      termino: 'Recursos clave',
      significado:
        'activos esenciales, como tecnología, talento humano y propiedad intelectual, necesarios para la operación de un negocio',
    },
    {
      termino: 'Segmentación de clientes',
      significado:
        'división del mercado en grupos específicos de consumidores con características y necesidades similares.',
    },
    {
      termino: 'Sostenibilidad empresarial',
      significado:
        'capacidad de una empresa para operar y crecer de manera rentable, socialmente responsable y respetuosa con el medioambiente.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'integración de tecnología en todos los aspectos de un negocio para mejorar su eficiencia y competitividad.',
    },
  ],
}
