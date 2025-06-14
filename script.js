// Datos de los proyectos (normalmente esto vendría de una base de datos)
const proyectosData = {
    "1": {
        titulo: "Metro Lima Tambo",
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
        titulo: "IE. Gastón Vidal - Nuevo Chimbote",
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
        titulo: "IE. Pariacoto - Ancash",
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
        titulo: "IE. San Nicolas - Ancash",
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
// Datos de los servicios con imágenes
const serviciosData = {
    "electricas": {
        titulo: "Instalaciones Eléctricas",
        imagenes: [
            {
                src: "img/servicio-electrico-1.jpg",
                titulo: "Tableros Eléctricos",
                descripcion: "Instalación y mantenimiento de tableros de distribución eléctrica."
            },
            {
                src: "img/servicio-electrico-2.jpg",
                titulo: "Cableado Estructurado",
                descripcion: "Sistemas de cableado para edificios comerciales e industriales."
            },
            {
                src: "img/servicio-electrico-3.jpg",
                titulo: "Iluminación LED",
                descripcion: "Proyectos de iluminación eficiente con tecnología LED."
            },
            {
                src: "img/servicio-electrico-4.jpg",
                titulo: "Sistemas de Emergencia",
                descripcion: "Instalación de sistemas de respaldo y emergencia eléctrica."
            },
            {
                src: "img/servicio-electrico-5.jpg",
                titulo: "Mantenimiento Preventivo",
                descripcion: "Programas de mantenimiento para sistemas eléctricos."
            },
            {
                src: "img/servicio-electrico-6.jpg",
                titulo: "Automatización",
                descripcion: "Sistemas de control y automatización industrial."
            }
        ]
    },
    "sanitarias": {
        titulo: "Instalaciones Sanitarias",
        imagenes: [
            {
                src: "img/servicio-sanitario-1.jpg",
                titulo: "Redes de Agua",
                descripcion: "Instalación de redes de agua potable y sistemas de distribución."
            },
            {
                src: "img/servicio-sanitario-2.jpg",
                titulo: "Sistemas de Desagüe",
                descripcion: "Diseño e instalación de sistemas de evacuación de aguas."
            },
            {
                src: "img/servicio-sanitario-3.jpg",
                titulo: "Equipos de Bombeo",
                descripcion: "Instalación y mantenimiento de sistemas de bombeo."
            },
            {
                src: "img/servicio-sanitario-4.jpg",
                titulo: "Tratamiento de Aguas",
                descripcion: "Sistemas de tratamiento y purificación de agua."
            },
            {
                src: "img/servicio-sanitario-5.jpg",
                titulo: "Instalaciones Industriales",
                descripcion: "Soluciones sanitarias para plantas industriales."
            },
            {
                src: "img/servicio-sanitario-6.jpg",
                titulo: "Mantenimiento Correctivo",
                descripcion: "Reparación y mantenimiento de instalaciones sanitarias."
            }
        ]
    },
    "incendio": {
        titulo: "Agua Contra Incendio",
        imagenes: [
            {
                src: "img/servicio-incendio-1.jpg",
                titulo: "Sistemas de Rociadores",
                descripcion: "Instalación de sistemas de rociadores automáticos."
            },
            {
                src: "img/servicio-incendio-2.jpg",
                titulo: "Extintores",
                descripcion: "Mantenimiento y recarga de extintores."
            },
            {
                src: "img/servicio-incendio-3.jpg",
                titulo: "Alarmas Contra Incendio",
                descripcion: "Instalación de sistemas de alarmas y detección de incendios."
            },
            {
                src: "img/servicio-incendio-4.jpg",
                titulo: "Capacitación",
                descripcion: "Capacitación en manejo de emergencias y uso de extintores."
            },
            {
                src: "img/servicio-incendio-5.jpg",
                titulo: "Planes de Emergencia",
                descripcion: "Desarrollo de planes de emergencia y evacuación."
            },
            {
                src: "img/servicio-incendio-6.jpg",
                titulo: "Inspecciones",
                descripcion: "Inspecciones periódicas de sistemas contra incendios."
            }
        ]
    },
    "corrientes": {
        titulo: "Corrientes Débiles",
        imagenes: [
            {
                src: "img/servicio-corrientes-1.jpg",
                titulo: "CCTV",
                descripcion: "Instalación de sistemas de cámaras de seguridad."
            },
            {
                src: "img/servicio-corrientes-2.jpg",
                titulo: "Intercomunicadores",
                descripcion: "Sistemas de intercomunicación para edificios."
            },
            {
                src: "img/servicio-corrientes-3.jpg",
                titulo: "Redes de Datos",
                descripcion: "Instalación de redes de datos y telecomunicaciones."
            },
            {
                src: "img/servicio-corrientes-4.jpg",
                titulo: "Control de Acceso",
                descripcion: "Sistemas de control de acceso y seguridad."
            },
            {
                src: "img/servicio-corrientes-5.jpg",
                titulo: "Sistemas de Sonido",
                descripcion: "Instalación de sistemas de sonido y megafonía."
            },
            {
                src: "img/servicio-corrientes-6.jpg",
                titulo: "Mantenimiento",
                descripcion: "Mantenimiento de sistemas de corrientes débiles."
            }
        ]
    },
    "hvac": {
        titulo: "HVAC",
        imagenes: [
            {
                src: "img/servicio-hvac-1.jpg",
                titulo: "Instalación de Aire Acondicionado",
                descripcion: "Instalación de sistemas de aire acondicionado."
            },
            {
                src: "img/servicio-hvac-2.jpg",
                titulo: "Mantenimiento de HVAC",
                descripcion: "Mantenimiento de sistemas de calefacción y ventilación."
            },
            {
                src: "img/servicio-hvac-3.jpg",
                titulo: "Sistemas de Ventilación",
                descripcion: "Instalación de sistemas de ventilación mecánica."
            },
            {
                src: "img/servicio-hvac-4.jpg",
                titulo: "Calefacción",
                descripcion: "Instalación de sistemas de calefacción para espacios."
            },
            {
                src: "img/servicio-hvac-5.jpg",
                titulo: "Optimización Energética",
                descripcion: "Soluciones para optimizar el consumo energético."
            },
            {
                src: "img/servicio-hvac-6.jpg",
                titulo: "Consultoría",
                descripcion: "Consultoría en sistemas HVAC."
            }
        ]
    },
    "construccion": {
        titulo: "Construcción Civil",
        imagenes: [
            {
                src: "img/servicio-construccion-1.jpg",
                titulo: "Diseño Arquitectónico",
                descripcion: "Diseño arquitectónico de proyectos de construcción."
            },
            {
                src: "img/servicio-construccion-2.jpg",
                titulo: "Análisis Estructural",
                descripcion: "Análisis estructural para garantizar la seguridad."
            },
            {
                src: "img/servicio-construccion-3.jpg",
                titulo: "Ejecución de Proyectos",
                descripcion: "Ejecución de proyectos de construcción civil."
            },
            {
                src: "img/servicio-construccion-4.jpg",
                titulo: "Supervisión de Obras",
                descripcion: "Supervisión de obras para asegurar calidad."
            },
            {
                src: "img/servicio-construccion-5.jpg",
                titulo: "Mantenimiento de Infraestructura",
                descripcion: "Mantenimiento de infraestructura existente."
            },
            {
                src: "img/servicio-construccion-6.jpg",
                titulo: "Consultoría en Construcción",
                descripcion: "Consultoría para proyectos de construcción."
            }
        ]
    },
    "auxiliares": {
        titulo: "Servicios Auxiliares",
        imagenes: [
            {
                src: "img/servicio-auxiliar-1.jpg",
                titulo: "Cercos Eléctricos",
                descripcion: "Instalación de cercos eléctricos para seguridad."
            },
            {
                src: "img/servicio-auxiliar-2.jpg",
                titulo: "Alquiler de Equipos",
                descripcion: "Alquiler de equipos de medición y construcción."
            },
            {
                src: "img/servicio-auxiliar-3.jpg",
                titulo: "Andamios",
                descripcion: "Suministro e instalación de andamios."
            },
            {
                src: "img/servicio-auxiliar-4.jpg",
                titulo: "Herramientas Especializadas",
                descripcion: "Provisión de herramientas especializadas para construcción."
            },
            {
                src: "img/servicio-auxiliar-5.jpg",
                titulo: "Mantenimiento de Equipos",
                descripcion: "Mantenimiento de equipos de construcción."
            },
            {
                src: "img/servicio-auxiliar-6.jpg",
                titulo: "Capacitación en Seguridad",
                descripcion: "Capacitación en seguridad para trabajadores."
            }
        ]
    },
    "otros": {
        titulo: "Otros Servicios",
        imagenes: [
            {
                src: "img/servicio-otros-1.jpg",
                titulo: "Gas GLP",
                descripcion: "Instalación de sistemas de gas GLP."
            },
            {
                src: "img/servicio-otros-2.jpg",
                titulo: "Pintura",
                descripcion: "Servicios de pintura para interiores y exteriores."
            },
            {
                src: "img/servicio-otros-3.jpg",
                titulo: "Drywall",
                descripcion: "Instalación de sistemas de drywall."
            },
            {
                src: "img/servicio-otros-4.jpg",
                titulo: "Soldadura",
                descripcion: "Servicios de soldadura para estructuras."
            },
            {
                src: "img/servicio-otros-5.jpg",
                titulo: "Servicios Especializados",
                descripcion: "Servicios especializados complementarios."
            },
            {
                src: "img/servicio-otros-6.jpg",
                titulo: "Consultoría",
                descripcion: "Consultoría para proyectos integrales."
            }
        ]
    }
};

// Función para abrir el modal de servicios
function openServiceModal(serviceType) {
    const serviceData = serviciosData[serviceType];
    const modal = document.getElementById('serviceModal');
    
    if (!serviceData || !modal) return;
    
    // Actualizar título
    document.getElementById('serviceModalTitle').textContent = serviceData.titulo;
    
    // Limpiar y cargar imágenes
    const galleryGrid = document.querySelector('.service-gallery-grid');
    galleryGrid.innerHTML = '';
    
    serviceData.imagenes.forEach(imagen => {
        const imageItem = document.createElement('div');
        imageItem.className = 'service-image-item';
        imageItem.innerHTML = `
            <div class="service-image-container">
                <img src="${imagen.src}" alt="${imagen.titulo}">
            </div>
            <div class="service-image-description">
                <h4>${imagen.titulo}</h4>
                <p>${imagen.descripcion}</p>
            </div>
        `;
        galleryGrid.appendChild(imageItem);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Bloquear scroll
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de servicios
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// Event listeners para los servicios
document.addEventListener('DOMContentLoaded', function() {
    // Agregar click a las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            openServiceModal(serviceType);
        });
    });
    
    // Cerrar modal
    const closeBtn = document.querySelector('.close-service-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }
    
    // Cerrar al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('serviceModal');
        if (event.target === modal) {
            closeServiceModal();
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeServiceModal();
        }
    });
});
