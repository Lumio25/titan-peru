// Datos de los proyectos (normalmente esto vendría de una base de datos)
const proyectosData = {
    "1": {
        titulo: "METRO Lima Tambo",
        estado: "Entregado",
        descripcion: "Ejecución integral de los sistemas IIEE (instalaciones eléctricas), IISS (instalaciones sanitarias), ACI (automatización y control de iluminación en áreas comunes) y DACI (detección y alarma contra incendios), garantizando eficiencia operativa, confort y seguridad integral en toda la edificación. El proyecto incluyó la implementación de sistemas de alta eficiencia energética y automatización de acuerdo a las últimas tendencias en centros comerciales inteligentes.",
        ubicacion: "San Isidro, Lima",
        año: "2023",
        servicios: [
            "Instalaciones eléctricas en media y baja tensión",
            "Sistemas de automatización y control de iluminación",
            "Sistemas contra incendios y detección de alarmas",
            "Instalaciones sanitarias completas"
        ],
        imagenes: [
            "img/proyecto1.jpg",
            "img/proyecto1-1.jpg",
            "img/proyecto1-2.jpg"
        ]
    },
    "2": {
        titulo: "Rehabilitación IE. Gastón Vidal",
        estado: "Entregado",
        descripcion: "Rehabilitación integral de la Institución Educativa Gastón Vidal, incluyendo la implementación de sistemas eléctricos (IIEE), instalaciones sanitarias (IISS) y corrientes débiles. El proyecto abarca el diseño, ejecución y mantenimiento para mejorar la infraestructura educativa con altos estándares de calidad y seguridad.",
        ubicacion: "Nuevo Chimbote - Santa - Ancash",
        año: "2022",
        servicios: [
            "Instalaciones eléctricas",
            "Sistemas de respaldo de energía y UPS",
            "Instalaciones sanitarias",
            "Sistemas de corrientes débiles"
        ],
        imagenes: [
            "img/proyecto2.jpg",
            "img/proyecto2-1.jpg",
            "img/proyecto2-2.jpg"
        ]
    },
    "3": {
        titulo: "Hotel Intro Barranco",
        estado: "Entregado",
        descripcion: "Rehabilitación completa de las instalaciones eléctricas y sanitarias para el Hotel Intro en Barranco, Lima. El proyecto incluyó la renovación del sistema eléctrico, instalación de tablero eléctrico, sistemas de iluminación y redes de datos; así como la implementación de nuevas griferías, baños, duchas y sistema de agua caliente en habitaciones y áreas comunes, junto con trabajos de reparación y mejora en la casona.", 
        ubicacion: "Barranco, Lima",
        año: "2025",
        servicios: [
"Renovación del sistema eléctrico completo",
"Instalación de tablero eléctrico",
"Implementación de redes de datos y comunicaciones",
"Sistemas de seguridad y control de acceso",
"Iluminación eficiente en habitaciones y áreas comunes",
"Instalación de griferías, baños y duchas",
        ],
        imagenes: [
            "img/proyecto3.jpg",
            "img/proyecto3-1.jpg",
            "img/proyecto3-2.jpg"
        ]
    },
    "4": {
        titulo: "Ampliación Latas Vacías - Backus",
        estado: "Entregado",
        descripcion: "Proyecto industrial para la ampliación de la planta de producción de Backus, específicamente en el área de latas vacías. El alcance incluyó la implementación de sistemas eléctricos industriales, instalaciones sanitarias especializadas, sistemas ACI (agua contra incendio), DACI (detección y alarma contra incendios) y HVAC (calefacción, ventilación y aire acondicionado) para garantizar la operatividad segura y eficiente de la nueva área de producción.",
        ubicacion: "Ate, Lima",
        año: "2022",
        servicios: [
            "Instalaciones eléctricas industriales",
            "Sistemas de protección contra incendios",
            "Climatización industrial HVAC",
            "Instalaciones sanitarias para procesos industriales"
        ],
        imagenes: [
            "img/proyecto4.jpg",
            "img/proyecto4-1.jpg",
            "img/proyecto4-2.jpg"
        ]
    },
    "5": {
        titulo: "Rehabilitación IE. Pariacoto",
        estado: "En Ejecución",
        descripcion: "Proyecto de rehabilitación integral para la Institución Educativa Pariacoto en la región Ancash. Incluye la renovación completa de instalaciones eléctricas, sanitarias y sistemas de corrientes débiles para modernizar la infraestructura educativa y proporcionar un entorno de aprendizaje seguro y funcional para los estudiantes.",
        ubicacion: "Pariacoto, Ancash",
        año: "2024-2025",
        servicios: [
            "Renovación de instalaciones eléctricas",
            "Modernización de sistemas sanitarios",
            "Implementación de redes de datos",
            "Sistemas de seguridad y comunicaciones"
        ],
        imagenes: [
            "img/proyecto5.jpg",
            "img/proyecto5-1.jpg",
            "img/proyecto5-2.jpg"
        ]
    },
    "6": {
        titulo: "Rehabilitación IE. San Nicolas",
        estado: "En Ejecución",
        descripcion: "Rehabilitación integral de la infraestructura de servicios para la Institución Educativa San Nicolas en Ancash. El proyecto contempla la implementación de sistemas IIEE (instalaciones eléctricas), IISS (instalaciones sanitarias) y Corrientes Débiles para la institución educativa, con el objetivo de mejorar la calidad de la infraestructura y servicios educativos en la región.",
        ubicacion: "San Nicolas, Ancash",
        año: "2024-2025",
        servicios: [
            "Instalaciones eléctricas de baja tensión",
            "Sistemas sanitarios modernos",
            "Redes de comunicación y datos",
            "Sistemas de iluminación eficiente"
        ],
        imagenes: [
            "img/proyecto6.jpg",
            "img/proyecto6-1.jpg",
            "img/proyecto6-2.jpg"
        ]
    }
};

// Inicializar funcionalidades cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            menuToggle.classList.toggle('active');
        });
        
        // Ocultar menú al hacer clic en un enlace (en mobile)
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Restablecer visibilidad del menú al cambiar el tamaño de pantalla
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
                menuToggle.classList.remove('active');
            }
        });
    }
    
    // Funcionamiento de las pestañas en la sección Nosotros
    const tabs = document.querySelectorAll('.tab');
    
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                tabs.forEach(t => t.classList.remove('active'));
                
                // Agregar clase active a la pestaña actual
                this.classList.add('active');
                
                // Obtener el id del contenido a mostrar
                const tabId = this.getAttribute('data-tab');
                
                // Ocultar todos los contenidos
                const tabPanes = document.querySelectorAll('.tab-pane');
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                // Mostrar el contenido correspondiente
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                } else {
                    console.error('No se encontró el elemento con ID:', tabId);
                }
            });
        });
    }
    
    // Cambiar el color del header al hacer scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí normalmente enviarías los datos a un servidor
            // Como ejemplo, mostramos una alerta
            alert('¡Gracias por contactarnos! Te responderemos a la brevedad.');
            contactForm.reset();
        });
    }
    
    // Animación al hacer scroll para las secciones
    const sections = document.querySelectorAll('section');
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar estilos para la animación
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Verificar secciones al cargar la página
    window.addEventListener('load', checkSections);
    
    // Verificar secciones al hacer scroll
    window.addEventListener('scroll', checkSections);
    
// Efecto de opacidad en el banner al hacer scroll (para ambos banners)
const bannerImage = document.getElementById('bannerImage');
const bannerImageMobile = document.getElementById('bannerImageMobile');

if (bannerImage && bannerImageMobile) {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const maxScroll = 500;
        let opacity = 1 - (scrollPosition / maxScroll);
        opacity = Math.max(0, Math.min(1, opacity));
        
        bannerImage.style.opacity = opacity;
        bannerImageMobile.style.opacity = opacity;
    });
}
    // Modal de proyectos
    const projectModal = document.getElementById('projectModal');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Añadir evento click a cada tarjeta de proyecto
    if (projectCards.length > 0 && projectModal) {
        projectCards.forEach(card => {
            const verMasBtn = card.querySelector('.btn-ver-mas');
            if (verMasBtn) {
                verMasBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const projectId = card.getAttribute('data-project-id');
                    openProjectModal(projectId);
                });
            }
        });
    }
    
    // Función para abrir el modal de proyectos
    function openProjectModal(projectId) {
        const projectData = proyectosData[projectId];
        
        if (!projectData || !projectModal) return;
    
        // Actualizar contenido del modal
        document.getElementById('modalTitle').textContent = projectData.titulo;
        document.getElementById('modalTag').textContent = projectData.estado;
        document.getElementById('modalTag').className = 'project-tag'; // Resetear clases
        if (projectData.estado === 'En Ejecución') {
            document.getElementById('modalTag').classList.add('en-ejecucion');
        } else {
            document.getElementById('modalTag').classList.add('entregado');
        }
        
        document.getElementById('modalDescription').textContent = projectData.descripcion;
        document.getElementById('modalLocation').textContent = projectData.ubicacion;
        document.getElementById('modalYear').textContent = projectData.año;
        
        // Cargar servicios
        const servicesList = document.getElementById('modalServices');
        servicesList.innerHTML = '';
        projectData.servicios.forEach(servicio => {
            const li = document.createElement('li');
            li.textContent = servicio;
            servicesList.appendChild(li);
        });
        
        // Cargar imagen principal
        const mainImage = document.getElementById('mainProjectImage');
        mainImage.src = projectData.imagenes[0];
        mainImage.alt = projectData.titulo;
        
        // Cargar miniaturas
        const thumbnailGallery = document.getElementById('thumbnailGallery');
        thumbnailGallery.innerHTML = '';
        
        projectData.imagenes.forEach((imagen, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imagen;
            thumbnail.alt = `${projectData.titulo} - Imagen ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            
            // La primera miniatura es la activa por defecto
            if (index === 0) {
                thumbnail.classList.add('active');
            }
            
            // Añadir evento para cambiar la imagen principal al hacer clic
            thumbnail.addEventListener('click', function() {
                // Quitar clase active de todas las miniaturas
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                
                // Añadir clase active a la miniatura actual
                this.classList.add('active');
                
                // Actualizar imagen principal
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Efecto de transición para la imagen principal
                mainImage.style.opacity = '0.7';
                setTimeout(() => {
                    mainImage.style.opacity = '1';
                }, 200);
            });
            
            thumbnailGallery.appendChild(thumbnail);
        });
        
        // Mostrar el modal con animación
        projectModal.style.display = 'block';
        setTimeout(() => {
            projectModal.classList.add('show');
        }, 10); // Pequeño retraso para asegurar que la transición CSS funcione correctamente
        
        // Bloquear el scroll de la página
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el modal
    function closeProjectModal() {
        if (!projectModal) return;
        
        projectModal.classList.remove('show');
        
        // Esperar a que termine la animación antes de ocultar completamente
        setTimeout(() => {
            projectModal.style.display = 'none';
            // Restaurar el scroll de la página
            document.body.style.overflow = '';
        }, 300); // La duración debe coincidir con la transición CSS
    }

    // Añadir evento para cerrar el modal con el botón de cerrar
    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

    // Cerrar el modal con la tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Datos de los servicios (puedes personalizar las imágenes y textos)
const serviciosData = {
    "1": {
        titulo: "Instalaciones Eléctricas",
        descripcion: "Realizamos proyectos eléctricos en baja y media tensión, desde el diseño hasta la ejecución y mantenimiento, cumpliendo con las normativas vigentes y garantizando seguridad y eficiencia.",
        trabajos: [
            "Instalación de tableros eléctricos",
            "Tendido de cableado estructurado",
            "Iluminación interior y exterior",
            "Sistemas de puesta a tierra",
            "Mantenimiento preventivo y correctivo",
            "Automatización y control"
        ],
        imagenes: [
            "img/servicio1-1.jpg",
            "img/servicio1-2.jpg",
            "img/servicio1-3.jpg",
            "img/servicio1-4.jpg",
            "img/servicio1-5.jpg",
            "img/servicio1-6.jpg"
        ]
    },
    "2": {
        titulo: "Instalaciones Sanitarias",
        descripcion: "Ofrecemos soluciones integrales en instalaciones sanitarias para edificaciones residenciales, comerciales e industriales, asegurando funcionalidad y cumplimiento de estándares de calidad.",
        trabajos: [
            "Redes de agua fría y caliente",
            "Instalación de grifería y sanitarios",
            "Sistemas de desagüe y ventilación",
            "Mantenimiento de bombas y cisternas",
            "Sistemas de presión constante",
            "Detección y reparación de fugas"
        ],
        imagenes: [
            "img/servicio2-1.jpg",
            "img/servicio2-2.jpg",
            "img/servicio2-3.jpg",
            "img/servicio2-4.jpg",
            "img/servicio2-5.jpg",
            "img/servicio2-6.jpg"
        ]
    },
    "3": {
        titulo: "Agua Contra Incendio",
        descripcion: "Diseñamos e instalamos sistemas de agua contra incendio, cumpliendo con las normativas nacionales e internacionales para la protección de personas y bienes.",
        trabajos: [
            "Instalación de rociadores automáticos",
            "Redes de tuberías y válvulas",
            "Sistemas de bombeo contra incendio",
            "Gabinetes y mangueras",
            "Pruebas hidráulicas y certificación",
            "Mantenimiento de sistemas"
        ],
        imagenes: [
            "img/servicio3-1.jpg",
            "img/servicio3-2.jpg",
            "img/servicio3-3.jpg",
            "img/servicio3-4.jpg",
            "img/servicio3-5.jpg",
            "img/servicio3-6.jpg"
        ]
    },
    "4": {
        titulo: "Corrientes Débiles",
        descripcion: "Implementamos sistemas de corrientes débiles para seguridad, comunicación y automatización, integrando tecnología de vanguardia en cada proyecto.",
        trabajos: [
            "Instalación de CCTV y alarmas",
            "Redes de datos y telefonía",
            "Sistemas de intercomunicación",
            "Control de acceso",
            "Cableado estructurado",
            "Mantenimiento de sistemas"
        ],
        imagenes: [
            "img/servicio4-1.jpg",
            "img/servicio4-2.jpg",
            "img/servicio4-3.jpg",
            "img/servicio4-4.jpg",
            "img/servicio4-5.jpg",
            "img/servicio4-6.jpg"
        ]
    },
    "5": {
        titulo: "HVAC",
        descripcion: "Ofrecemos soluciones en climatización, ventilación y aire acondicionado para todo tipo de ambientes, priorizando eficiencia energética y confort.",
        trabajos: [
            "Instalación de equipos de aire acondicionado",
            "Sistemas de ventilación mecánica",
            "Mantenimiento de equipos HVAC",
            "Sistemas de extracción de aire",
            "Automatización de climatización",
            "Diagnóstico y reparación"
        ],
        imagenes: [
            "img/servicio5-1.jpg",
            "img/servicio5-2.jpg",
            "img/servicio5-3.jpg",
            "img/servicio5-4.jpg",
            "img/servicio5-5.jpg",
            "img/servicio5-6.jpg"
        ]
    },
    "6": {
        titulo: "Construcción Civil",
        descripcion: "Desarrollamos proyectos de construcción civil desde la planificación hasta la entrega final, garantizando calidad, seguridad y cumplimiento de plazos.",
        trabajos: [
            "Obras de albañilería y concreto",
            "Estructuras metálicas y de concreto",
            "Acabados y revestimientos",
            "Supervisión de obra",
            "Remodelaciones y ampliaciones",
            "Gestión de permisos y licencias"
        ],
        imagenes: [
            "img/servicio6-1.jpg",
            "img/servicio6-2.jpg",
            "img/servicio6-3.jpg",
            "img/servicio6-4.jpg",
            "img/servicio6-5.jpg",
            "img/servicio6-6.jpg"
        ]
    },
    "7": {
        titulo: "Servicios Auxiliares",
        descripcion: "Brindamos servicios auxiliares que complementan la ejecución de proyectos de ingeniería y construcción, asegurando soluciones integrales.",
        trabajos: [
            "Cercos eléctricos y perimétricos",
            "Alquiler de equipos y herramientas",
            "Montaje de andamios",
            "Medición y pruebas eléctricas",
            "Soporte técnico en obra",
            "Logística y transporte"
        ],
        imagenes: [
            "img/servicio7-1.jpg",
            "img/servicio7-2.jpg",
            "img/servicio7-3.jpg",
            "img/servicio7-4.jpg",
            "img/servicio7-5.jpg",
            "img/servicio7-6.jpg"
        ]
    },
    "8": {
        titulo: "Otros Servicios",
        descripcion: "Ofrecemos servicios complementarios como gas GLP, pintura, drywall, soldadura y más, adaptándonos a las necesidades específicas de cada cliente.",
        trabajos: [
            "Instalación de gas GLP",
            "Trabajos de pintura y acabados",
            "Construcción en drywall",
            "Soldadura y estructuras metálicas",
            "Mantenimiento general",
            "Servicios personalizados"
        ],
        imagenes: [
            "img/servicio8-1.jpg",
            "img/servicio8-2.jpg",
            "img/servicio8-3.jpg",
            "img/servicio8-4.jpg",
            "img/servicio8-5.jpg",
            "img/servicio8-6.jpg"
        ]
    }
};

// Modal de Servicios
document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    const serviceCards = document.querySelectorAll('.service-card');
    const closeServiceBtn = document.querySelector('.close-modal-servicio');

    // Abrir modal al hacer click en "Ver más"
    serviceCards.forEach(card => {
        const btn = card.querySelector('.btn-ver-mas-servicio');
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const serviceId = card.getAttribute('data-service-id');
                openServiceModal(serviceId);
            });
        }
    });

    function openServiceModal(serviceId) {
        const data = serviciosData[serviceId];
        if (!data || !serviceModal) return;

        // Título
        document.getElementById('modalServiceTitle').textContent = data.titulo;
        // Descripción
        document.getElementById('modalServiceDescription').textContent = data.descripcion;
        // Trabajos
        const worksList = document.getElementById('modalServiceWorks');
        worksList.innerHTML = '';
        data.trabajos.forEach(trabajo => {
            const li = document.createElement('li');
            li.textContent = trabajo;
            worksList.appendChild(li);
        });
        // Galería principal
        const mainImage = document.getElementById('mainServiceImage');
        mainImage.src = data.imagenes[0];
        mainImage.alt = data.titulo;

        // Miniaturas
        const thumbnailGallery = document.getElementById('serviceThumbnailGallery');
        thumbnailGallery.innerHTML = '';
        data.imagenes.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.src = img;
            thumb.alt = `${data.titulo} - Imagen ${idx+1}`;
            thumb.classList.add('service-thumbnail');
            if (idx === 0) thumb.classList.add('active');
            thumb.addEventListener('click', function() {
                document.querySelectorAll('.service-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                mainImage.style.opacity = '0.7';
                setTimeout(() => { mainImage.style.opacity = '1'; }, 200);
            });
            thumbnailGallery.appendChild(thumb);
        });

        // Mostrar modal
        serviceModal.style.display = 'block';
        setTimeout(() => {
            serviceModal.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    // Cerrar modal
    function closeServiceModal() {
        if (!serviceModal) return;
        serviceModal.classList.remove('show');
        setTimeout(() => {
            serviceModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    if (closeServiceBtn) {
        closeServiceBtn.addEventListener('click', closeServiceModal);
    }
    window.addEventListener('click', function(event) {
        if (event.target === serviceModal) {
            closeServiceModal();
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeServiceModal();
        }
    });
});

