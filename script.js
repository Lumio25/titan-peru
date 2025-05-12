// Manejo del menú responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
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
    
    // Cambiar el color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
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
    
    // Animación al hacer scroll
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
});