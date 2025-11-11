// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) { 
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill bars when they come into view
            if (entry.target.classList.contains('skill-bar')) {
                const progressBar = entry.target.querySelector('.skill-progress-bar');
                const width = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 300);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-text, .profile-image, .about-text, .about-image, .education-item, .experience-item, .skill-card, .skill-bar, .project-card, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

// Talents section scroll functionality
const talentsScrollContainer = document.querySelector('.overflow-x-auto.whitespace-nowrap');

if (talentsScrollContainer) {
    // Add smooth scrolling behavior
    talentsScrollContainer.style.scrollBehavior = 'smooth';
    
    // Optional: Auto-scroll functionality (uncomment if desired)
    /*
    let scrollInterval;
    let scrollDirection = 1;
    
    const autoScroll = () => {
        const maxScroll = talentsScrollContainer.scrollWidth - talentsScrollContainer.clientWidth;
        
        if (talentsScrollContainer.scrollLeft >= maxScroll) {
            scrollDirection = -1;
        } else if (talentsScrollContainer.scrollLeft <= 0) {
            scrollDirection = 1;
        }
        
        talentsScrollContainer.scrollLeft += scrollDirection * 2;
    };
    
    // Start auto-scroll when section is in view
    const talentsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollInterval = setInterval(autoScroll, 30);
            } else {
                clearInterval(scrollInterval);
            }
        });
    }, { threshold: 0.5 });
    
    talentsObserver.observe(talentsScrollContainer.closest('section'));
    
    // Pause auto-scroll on hover
    talentsScrollContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });
    
    talentsScrollContainer.addEventListener('mouseleave', () => {
        scrollInterval = setInterval(autoScroll, 30);
    });
    */
    
    // Add touch/mouse drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;
    
    talentsScrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        talentsScrollContainer.style.cursor = 'grabbing';
        startX = e.pageX - talentsScrollContainer.offsetLeft;
        scrollLeft = talentsScrollContainer.scrollLeft;
    });
    
    talentsScrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        talentsScrollContainer.style.cursor = 'grab';
    });
    
    talentsScrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        talentsScrollContainer.style.cursor = 'grab';
    });
    
    talentsScrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - talentsScrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        talentsScrollContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Set initial cursor style
    talentsScrollContainer.style.cursor = 'grab';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});