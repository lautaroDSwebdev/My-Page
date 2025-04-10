export let dataApp = {
  es: {
    botonIdioma: 'English',
    navbar: [
      {
        id: 1,
        href: '#inicio',
        navOption: 'Inicio'
      },

      {
        id: 2,
        href: '#sobremi',
        navOption: 'Sobre Mi'
      },
      {
        id: 3,
        href: '#proyectos',
        navOption: 'Proyectos'
      },
      {
        id: 4,
        href: '#contacto',
        navOption: 'Contacto'
      }
    ],
    header: {
      saludo: 'Hola!',
      nombre: 'Soy',
      profesion: 'Programador Web'
    },
    InfoSocialMedia: {
      urlGithub: 'https://github.com/lautaroDSwebdev',
      nombregit: 'github',
      urlLinkedin: 'https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/',
      nombreLinkedin: 'linkedin',
      urlWhatsupp: 'https://api.whatsapp.com/send?phone=5492494379804',
      nombreWahstapp: 'whatsapp',
      urlmail: 'mailto:lautarodisalvo5@gmail.com',
      nombreMail: 'mail',
      urlCV2025: './cv-frontend-abril-2025.pdf',
      nombreDriveCV: 'mail'
    },
    mail: 'Mail',
    facebook: 'Facebook',
    whatsapp: 'Whatsapp',
    sobreMi: {
      titulo: 'Sobre Mí',
      tecnologias: 'Tecnologias',
      proveniencia: 'Soy de Argentina',
      aprendoYmejoro: '',
      experiencia: '+2 Años de experiencia como Programador Front-End',
      sobremi1: '',
      porqueSigo:
        'Queriendo encontrar un rumbo en mi vida luego de abordar algunas carreras, opté por la programacion y elegí orientarme por el desarrollo web en el año 2022. Actualmente soy un estudioso y apasionado desarrollador frontend que le encanta colaborar con otros desarrolladores u orientar a nuevos en este frustrante y opinionado camino, es muy reconfortante recibir feedback tanto de mi agilidad tecnica como de mi persona, es por eso que sigo mejorando y ayudando a mas gente con mucho cariño  ',
      // ../../src/assets/
      // ../../public/asstets/
      selfie: './mi-selfie2025.png'
    },
    sectionProjects: 'Proyectos',
    proyectos: [
      {
        id: 0,
        linkRepo: 'https://github.com/justin-A18/clinic-administrator',
        linkweb: 'https://clinic-administrator.vercel.app/',
        tituloProyecto: 'Clinica Hackacode',
        en_proceso: true,
        imagenProyecto: './clinicaHackacode.png',
        TechUsada: [
          {
            id: 1,
            nombre: 'Next js'
          },
          {
            id: 87,
            nombre: 'React Query'
          },
          {
            id: 857,
            nombre: 'Axios'
          },
          {
            id: 837,
            nombre: 'Shad Cn'
          },
          {
            id: 827,
            nombre: 'React Form'
          },
          {
            id: 7,
            nombre: 'Typescript'
          },
          {
            id: 8,
            nombre: 'Tailwind'
          }
        ]
      },
      {
        id: 0,
        linkRepo: 'https://github.com/lautaroDSwebdev/farmacia_replica',
        linkweb: 'https://masfarmaciareplica.netlify.app/',
        tituloProyecto: 'Mas Farmacias replica',
        en_proceso: false,
        imagenProyecto: './farmacia.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'React js'
          },
          {
            id: 87,
            nombre: 'Redux Toolkit'
          },
          {
            id: 7,
            nombre: 'Typescript'
          },
          {
            id: 8,
            nombre: 'Tailwind'
          }
        ]
      },
      {
        id: 0,
        linkRepo: 'https://github.com/lautaroDSwebdev/caprichoso',
        linkweb: 'https://caprichoso.netlify.app/home/',
        tituloProyecto: 'Caprichoso Portfolio',
        en_proceso: false,
        imagenProyecto: './Caprichoso.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'Astro'
          },
          {
            id: 7,
            nombre: 'Typescript'
          },
          {
            id: 8,
            nombre: 'Tailwind'
          }
        ]
      },
      {
        id: 1,
        linkRepo: 'https://github.com/Otorb/edutech',
        linkweb: 'https://edusync-ten.vercel.app/',
        tituloProyecto: 'EduSync',
        en_proceso: false,
        imagenProyecto: './EduSync-logo.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'React js'
          },
          {
            id: 6,
            nombre: 'Node Js'
          },
          {
            id: 7,
            nombre: 'PostgreSQL'
          },
          {
            id: 8,
            nombre: 'Figma'
          }
        ]
      },
      {
        id: 2,
        linkRepo:
          'https://github.com/lautaroDSwebdev/prueba-tecnica-buscadorPerfilGitHub',
        linkweb: 'https://prueba-tecnica-lautaro.netlify.app/',
        tituloProyecto: 'Buscador de cuenta Github',
        en_proceso: false,
        imagenProyecto: './vista-desktop-mobile-githubsearch.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'React js'
          },

          {
            id: 3,
            nombre: 'Api Github'
          }
        ]
      },
      {
        id: 3,
        linkRepo: 'https://github.com/lautaroDSwebdev/search-country',
        linkweb: 'https://search-country-web.netlify.app/#/All',
        tituloProyecto: 'Buscador de Paises',
        en_proceso: false,
        imagenProyecto: './SearchCountry.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'React js'
          },
          {
            id: 4,
            nombre: 'Tailwind'
          }
        ]
      },
      {
        id: 4,
        linkRepo: 'https://github.com/lautaroDSwebdev/My-Page',
        tituloProyecto: 'Mi Portfolio',
        imagenProyecto: './portfolio2025.webp',
        TechUsada: [
          { id: 1, nombre: 'React js' },
          {
            id: 2,
            nombre: 'Tailwind'
          },
          {
            id: 4,
            nombre: 'Figma'
          }
        ]
      },
      {
        id: 5,
        linkRepo:
          'https://github.com/lautaroDSwebdev/proyecto-turismo-espacial',
        linkweb: 'https://turismo-espacial-practica-front.netlify.app/',
        tituloProyecto: 'Space Turism',
        en_proceso: false,
        imagenProyecto: './space.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'HTML'
          },
          {
            id: 2,
            nombre: 'CSS'
          },
          {
            id: 3,
            nombre: 'JavaScript'
          }
        ]
      },
      {
        id: 6,
        linkweb: 'https://lautarodisalvosmco.wixsite.com/prueba1smc',
        tituloProyecto: 'Pagina Pizzeria',
        en_proceso: false,
        imagenProyecto: './frame-crocante.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'Wix'
          }
        ]
      },
      {
        id: 7,
        linkweb: 'https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud',
        tituloProyecto: 'Odontología',
        en_proceso: false,
        imagenProyecto: './frame-odontologia.webp',
        TechUsada: [
          {
            id: 1,
            nombre: 'Wix'
          }
        ]
      }
    ],
    contacto: {
      Contacto: 'Contacto',
      nombreYapellido: 'Tu nombre y apellido',
      agradecimiento: 'Gracias por llegar hasta aquí',
      razonContacto: 'Cuentame en que te puedo ayudar o colaborar',
      enviar: 'Enviar',
      placeholdertextarea: 'Comentario que desees agregar'
    }
  }
  // "en": {
  //   "botonIdioma": "Spanish",
  //   "navbar": [
  //     {
  //       id: 1,
  //       navOption: "Home"
  //     },
  //     {
  //       id: 2,
  //       navOption: "HardSkills"
  //     },
  //     {
  //       id: 3,
  //       navOption: "About Me"
  //     },
  //     {
  //       id: 4,
  //       navOption: "Projects"
  //     },
  //     {
  //       id: 5,
  //       navOption: "Contact"
  //     }
  //   ],
  //  header: {
  //     "saludo": "Hello!",
  //     nombre: "I am",
  //     "profesion": "Frontend Developer"
  //   },
  //   "sobreMi": {
  //     "titulo": "About Me",
  //     "tecnologias": "Technologies",
  //     "proveniencia": "I am from Argentina",
  //     "ofrezco": "I offer the development of very attractive Landing Pages and Web Applications adapted for mobile and desktop screens with API integration",
  //     "experiencia": "2 Years of experience as a Front-End Developer",
  //     "sobremi1": "-As a Front-End developer, I turn ideas into code",
  //     "sobremi2": "-I am capable of handling any obstacle, challenge, or problem",
  //     "oferta": "-I can create attractive, interactive, useful, and professional websites",
  //     "busquedalaboralmia": "-I am looking for a serious and long-term job opportunity to grow together, with a team that allows me to continue learning until I can help others",
  //     "educacion1": "Complete Secondary School",
  //     "educacion2": "Programming and Web Development"
  //   },
  //   sectionProjects: "Projects",
  //   "proyectos": [
  //     {
  //       id: 1,
  //       linkRepo: "https://github.com/Otorb/edutech",
  //       linkweb: "https://edusync-ten.vercel.app/",
  //      tituloProyecto: "EduSync",
  //      imagenProyecto: "./chUsada: ""
  //     },
  //     {
  //       id: 2,
  //       linkRepo: "https://github.com/lautaroDSwebdev/prueba-tecnica-buscadorPerfilGitHub",
  //       linkweb: "https://prueba-tecnica-lautaro.netlify.app/",
  //      tituloProyecto: "GitHub Account Searcher",
  //      imagenProyecto: "./EduSync logo.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 3,
  //       linkRepo: "https://github.com/lautaroDSwebdev/search-country",
  //       linkweb: "https://search-country-web.netlify.app/#/All",
  //      tituloProyecto: "Country Searcher",
  //      imagenProyecto: "./SearchCountry.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 4,
  //       linkRepo: "https://github.com/lautaroDSwebdev/My-Page",
  //      tituloProyecto: "My Portfolio",
  //      imagenProyecto: "./imagen-portfolio-proyecto.webp",
  //       TechUsada: ""
  //     },      {        id: 5,
  //       linkRepo: "https://github.com/lautaroDSwebdev/proyecto-turismo-espacial",
  //       linkweb: "https://turismo-espacial-practica-front.netlify.app/",
  //      tituloProyecto: "Space Tourism",
  //      imagenProyecto: "./space.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 6,
  //       linkweb: "https://lautarodisalvosmco.wixsite.com/prueba1smc",
  //       tituloProyecto: "Pizzeria Page",
  //       imagenProyecto: "./frame crocante.webp",
  //       "TechUsada": ""
  //     },
  //     {
  //       id: 7,
  //       linkweb: "https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud",
  //       tituloProyecto: "Dentistry",
  //       imagenProyecto: "./frame odontologia.webp",
  //       TechUsada: ""
  //     }
  //   ],
  //   "contacto": {
  //     "Contacto": "Contact",
  //     nombre: "First Name",
  //     "apellido": "Last Name",
  //     "agradecimiento": "Thank you for reaching this far",
  //     "enviar": "Send",
  //     "placeholdertextarea": "Comment you wish to add"
  //   }
  // }
}
