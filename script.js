// LearningBee Website - Custom JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Sticky Navigation on Scroll
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-yellow-500');
                    link.classList.add('text-gray-700');
                });
                
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-gray-700');
                    activeLink.classList.add('text-yellow-500');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);

    // Contact Form Handling (Formspree)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form elements
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const btnLoading = document.getElementById('btn-loading');
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            const errorText = document.getElementById('error-text');
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const project = document.getElementById('project').value.trim();
            
            // Validate required fields
            if (!name || !email || !project) {
                e.preventDefault();
                errorText.textContent = 'Please fill in all required fields.';
                errorMessage.classList.remove('hidden');
                setTimeout(() => {
                    errorMessage.classList.add('hidden');
                }, 5000);
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                errorText.textContent = 'Please enter a valid email address.';
                errorMessage.classList.remove('hidden');
                setTimeout(() => {
                    errorMessage.classList.add('hidden');
                }, 5000);
                return;
            }
            
            // Phone validation (only if provided)
            if (phone) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(phone)) {
                    e.preventDefault();
                    errorText.textContent = 'Please enter a valid phone number.';
                    errorMessage.classList.remove('hidden');
                    setTimeout(() => {
                        errorMessage.classList.add('hidden');
                    }, 5000);
                    return;
                }
            }
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');
            
            // Form will submit to Formspree
            // Success will be handled by redirect or page reload
        });
    }

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add intersection observer for stats animation
    const statCards = document.querySelectorAll('.stat-card');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    statCards.forEach(card => {
        statsObserver.observe(card);
    });

    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroIllustration = document.querySelector('.hero-illustration');
        
        if (heroIllustration && scrolled < window.innerHeight) {
            heroIllustration.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Check if form was successfully submitted (Netlify redirects back with success parameter)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
                // Remove success parameter from URL
                window.history.replaceState({}, document.title, window.location.pathname);
            }, 10000);
        }
    }

    // Console message
    console.log('%c🐝 Welcome to LearningBee! 🐝', 'color: #FBBF24; font-size: 20px; font-weight: bold;');
    console.log('%c"don\'t worry we will see" ✨', 'color: #60A5FA; font-size: 16px; font-style: italic;');
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Add smooth reveal animation for project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    projectObserver.observe(card);
});

