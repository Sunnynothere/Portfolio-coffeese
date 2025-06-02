document.addEventListener('DOMContentLoaded', () => {
    // Crear navegación si no existe
    if (!document.querySelector('.nav-container')) {
        const navHTML = `
            <div class="nav-container">
                <nav class="nav">
                    <h1>COFFEESE</h1>
                    <div class="nav-item">
                        <ul>
                            <li><a href="#inicio" class="active">INICIO</a></li>
                            <li><a href="#proyectos">PROYECTOS</a></li>
                            <li><a href="#habilidades">HABILIDADES</a></li>
                            <li><a href="#contacto">CONTACTO</a></li>
                        </ul>
                    </div>
                </nav>
                <h2 class="change-id">EN</h2>
            </div>
        `;
        document.querySelector('.content-wrapper')?.insertAdjacentHTML('afterbegin', navHTML);
    }
    

    // Elementos del DOM
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item a');

    // Función para manejar cambios de sección
    const handleSectionChange = (sectionId = '#inicio') => {
        sections.forEach(section => section.style.display = section.id === sectionId.substring(1) ? 'block' : 'none');
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === sectionId));
    };

    // Eventos de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (link.hash) {
                e.preventDefault();
                history.pushState(null, '', link.hash);
                handleSectionChange(link.hash);
            }
        });
    });

    // Eventos globales
    window.addEventListener('hashchange', () => handleSectionChange(window.location.hash));
    window.addEventListener('popstate', () => handleSectionChange(window.location.hash));

    // Inicialización
    handleSectionChange(window.location.hash || '#inicio');
});

/* LISTA PROYECTOS */

document.addEventListener('DOMContentLoaded', () => {
    const proyectosData = {
        1: {
            titulo: "Cafe - Coffeese",
            descripcion: "Diseño en Figma, HTML y CSS. Diseño de logo 'Coffeese'. JavaScript para ciertas funcionalidades.",
            github: "https://github.com/Sunnynothere/Figma-design-coffeese.git",
            demo: ""
        },
        2: {
            titulo: "Pokemon reDesign",
            descripcion: "Re-diseño de proyecto Pokemon. Usando Astro, Sass, JavaScript.",
            github: "https://github.com/Sunnynothere/pokemon-astro-tailwindcss.git",
            demo: ""
        },
        3: {
            titulo: "Portfolio Santiago, reDesign",
            descripcion: "Diseño previo Figma, cambios en HTML, CSS y JavaScript.",
            github: "https://github.com/Sunnynothere/Santiago-portfolio.git",
            demo: "",
        },
        4: {
            titulo: "Pokemon - SoyHenry",
            descripcion: "Uso de React, Redux, CSS, NodeJs con ExpressJs, PostgreSQL.",
            github: "https://github.com/Sunnynothere/Pokemon-PI.git"
        }
    };

    const proyectosList = document.querySelectorAll('.proyectos-list a');
    const descripcionElement = document.querySelector('.description p');
    const tituloElement = document.querySelector('.description h2');
    const githubLink = document.querySelector('.fa-github').parentNode;
    const demoLink = document.querySelector('.fa-image').parentNode;

    // Carga de proyecto:

    function cargarProyecto(numero) {
        const proyecto = proyectosData[numero];

        tituloElement.textContent = proyecto.titulo;
        descripcionElement.textContent = proyecto.descripcion;
        githubLink.href = proyecto.github;
        githubLink.setAttribute('target', '_blank');
        githubLink.setAttribute('rel', 'noopener noreferrer');
        
        demoLink.href = proyecto.demo;
        demoLink.setAttribute('target', '_blank');
        demoLink.setAttribute('rel', 'noopener noreferrer');

        proyectosList.forEach(item => {
            item.classList.toggle('active', item.textContent === numero.toString());
        })
    }

    // Event Listener - numeros proyectos

    proyectosList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const numeroProyecto = e.target.textContent;
            cargarProyecto(numeroProyecto);
        })
    });

    cargarProyecto(1);
});
