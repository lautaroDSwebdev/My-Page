export let dataApp = {
  es: {
    botonIdioma: "English",
    navbar: [
      {
        id: 1,
        href: "#inicio",
        navOption: "Inicio"
      },
    
      {
        id: 2,
        href: "#sobremi",
        navOption: "Sobre Mi"
      },
      {
        id: 3,
        href: "#proyectos",
        navOption: "Proyectos"
      },
      {
        id: 4,
        href: "#contacto",
        navOption: "Contacto"
      }
    ],
   header: {
      saludo: "Hola!",
      nombre: "Soy",
      profesion: "Programador Web"
    },
    InfoSocialMedia: {
        urlGithub:  "https://github.com/lautaroDSwebdev",
        nombregit: "github",
        urlLinkedin: "https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/",
        nombreLinkedin: "linkedin",
        urlWhatsupp: "https://api.whatsapp.com/send?phone=5492494379804",
        nombreWahstapp: "whatsapp",
        urlmail: "mailto:lautarodisalvo5@gmail.com",
        nombreMail: "mail",
        urlCV2024: "https://drive.google.com/file/d/1bK2HGWU8_0QCBMAWQR6Fl5Nd6SjelXxV/view?usp=sharing",
        nombreDriveCV: "mail"
    },
      mail: "Mail",
      facebook: "Facebook",
      whatsapp: "Whatsapp"
    ,
    sobreMi: {
      titulo: "Sobre Mí",
      tecnologias: "Tecnologias",
      proveniencia: "Soy de Argentina",
      aprendoYmejoro: "Aprendo y supero nuevos retos semanalmente y analizo cómo mejoran mis habilidades a través de ellos.",
      experiencia: "+2 Años de experiencia como Programador Front-End",
      sobremi1: "Convierto ideas en código",
      aprendoYmejoro2: "Constantemente mejoro mis habilidades de código practicando semanalmente. También le doy mucha importancia a mis habilidades blandas, busco la mejora constante en ellas.",
      // ../../src/assets/
      // ../../public/
      selfie: "../../src/assets/imagenMia.png" 
      
      
      
    },
    sectionProjects: "Proyectos",
    proyectos: [
      {
        id: 0,
        linkRepo: "https://github.com/lautaroDSwebdev/caprichoso",
        linkweb: "https://caprichoso.netlify.app/home/",
       tituloProyecto: "Caprichoso Portfolio",
       
       imagenProyecto: "../../src/assets/ets/Caprichoso.webp",
        TechUsada: [
          {
            id: 1,
            nombre: "Astro"
          },
          {
            id: 5,
            nombre: "CSS"
          },
          {
            id: 7,
            nombre: "Typescript"
          },
          {
            id: 8,
            nombre: "Tailwind"
          }
        ]
      },
      {
        id: 1,
        linkRepo: "https://github.com/Otorb/edutech",
        linkweb: "https://edusync-ten.vercel.app/",
       tituloProyecto: "EduSync",
       imagenProyecto: "../../src/assets/EduSync-logo.webp",
        TechUsada: [
          {
            id: 1,
            nombre: "React"
          },
          {
            id: 5,
            nombre: "CSS"
          },
          {
            id: 6,
            nombre: "Node Js"
          },
          {
            id: 7,
            nombre: "PostgreSQL"
          },
          {
            id: 8,
            nombre: "Figma"
          }
        ]
      },
      {
        id: 2,
        linkRepo: "https://github.com/lautaroDSwebdev/prueba-tecnica-buscadorPerfilGitHub",
        linkweb: "https://prueba-tecnica-lautaro.netlify.app/",
       tituloProyecto: "Buscador de cuenta Github",
       imagenProyecto: "../../src/assets/vista-desktop-mobile-githubsearch.webp",
        TechUsada: [
          {
            id: 1,
            nombre: "React"
          },
          {
            id: 2,
            nombre: "CSS"
          },
          {
            id: 3,
            nombre: "Api Github"
          }
        
        ]
      },
      {
        id: 3,
        linkRepo: "https://github.com/lautaroDSwebdev/search-country",
        linkweb: "https://search-country-web.netlify.app/#/All",
       tituloProyecto: "Buscador de Paises",
       imagenProyecto: "../../src/assets/SearchCountry.webp",
        TechUsada: [
          {
            id: 1,
            nombre: "React"
          },
          {
            id: 4,
            nombre: "Tailwind"
          },
          {
            id: 5,
            nombre: "Css"
          }
        
        ]
      },
      {
        id: 4,
        linkRepo: "https://github.com/lautaroDSwebdev/My-Page",
       tituloProyecto: "Mi Portfolio",
       imagenProyecto: "../../src/assets/imagen-portfolio-proyecto.webp",
        TechUsada:  [
         {            id: 1,
            nombre: "React"
          },
          {
            id: 2,
            nombre: "Tailwind"
          },
          {
            id: 4,
            nombre: "Figma"
          }
        
        ]
      },
      {
        id: 5,
        linkRepo: "https://github.com/lautaroDSwebdev/proyecto-turismo-espacial",
        linkweb: "https://turismo-espacial-practica-front.netlify.app/",
       tituloProyecto: "Space Turism",
       imagenProyecto: "../../src/assets/space.webp",
        TechUsada:  [
          {
            id: 1,
            nombre: "HTML"
          },
          {
            id: 2,
            nombre: "CSS"
          },
          {
            id: 3,
            nombre: "JavaScript"
          }
          
        
        ]
      },
      {
        id: 6,
        linkweb: "https://lautarodisalvosmco.wixsite.com/prueba1smc",
        tituloProyecto: "Pagina Pizzeria",
        imagenProyecto: "../../src/assets/frame-crocante.webp",
        TechUsada:  [
          {
            id: 1,
            nombre: "Wix"
          }
        
        ]
      },
      {
        id: 7,
        linkweb: "https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud",
        tituloProyecto: "Odontología",
        imagenProyecto: "../../src/assets/frame-odontologia.webp",
        TechUsada: [
          {
            id: 1,
            nombre: "Wix"
          }
        ]
      }
    ],
    contacto: {
      Contacto: "Contacto",
      nombreYapellido: "Tu nombre y apellido",
      agradecimiento: "Gracias por llegar hasta aquí",
      razonContacto: "Cuentame en que te puedo ayudar o colaborar",
      enviar: "Enviar",
      placeholdertextarea: "Comentario que desees agregar"
    }
  },
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
  //      imagenProyecto: "../../src/assets/chUsada: ""
  //     },
  //     {
  //       id: 2,
  //       linkRepo: "https://github.com/lautaroDSwebdev/prueba-tecnica-buscadorPerfilGitHub",
  //       linkweb: "https://prueba-tecnica-lautaro.netlify.app/",
  //      tituloProyecto: "GitHub Account Searcher",
  //      imagenProyecto: "../../src/assets/EduSync logo.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 3,
  //       linkRepo: "https://github.com/lautaroDSwebdev/search-country",
  //       linkweb: "https://search-country-web.netlify.app/#/All",
  //      tituloProyecto: "Country Searcher",
  //      imagenProyecto: "../../src/assets/SearchCountry.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 4,
  //       linkRepo: "https://github.com/lautaroDSwebdev/My-Page",
  //      tituloProyecto: "My Portfolio",
  //      imagenProyecto: "../../src/assets/imagen-portfolio-proyecto.webp",
  //       TechUsada: ""
  //     },      {        id: 5,
  //       linkRepo: "https://github.com/lautaroDSwebdev/proyecto-turismo-espacial",
  //       linkweb: "https://turismo-espacial-practica-front.netlify.app/",
  //      tituloProyecto: "Space Tourism",
  //      imagenProyecto: "../../src/assets/space.webp",
  //       TechUsada: ""
  //     },
  //     {
  //       id: 6,
  //       linkweb: "https://lautarodisalvosmco.wixsite.com/prueba1smc",
  //       tituloProyecto: "Pizzeria Page",
  //       imagenProyecto: "../../src/assets/frame crocante.webp",
  //       "TechUsada": ""
  //     },
  //     {
  //       id: 7,
  //       linkweb: "https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud",
  //       tituloProyecto: "Dentistry",
  //       imagenProyecto: "../../src/assets/frame odontologia.webp",
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