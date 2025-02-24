document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            gsap.from('.nav-links a', {
                y: 50,
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Initialize Typed.js for mobile view
    if (window.innerWidth <= 768) {
        new Typed('#typed-text', {
            strings: [
                'console.log("Let\'s start working together!");',
                'console.log("Ready to build amazing things!");'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            cursorChar: '|'
        });

        // Animate code box content
        gsap.from('.code-content .line-number', {
            opacity: 0,
            x: -20,
            duration: 0.5,
            stagger: 0.1
        });

        gsap.from('.code-content .keyword, .code-content .variable, .code-content .property, .code-content .string', {
            opacity: 0,
            y: 10,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.5
        });
    }

    // Desktop animations
    if (window.innerWidth > 768) {
        gsap.from('nav', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.we-are', {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });

        gsap.from('.agency-text', {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            ease: 'power3.out'
        });
    }

    gsap.from('.red-box', {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Button hover animation
    const button = document.querySelector('.cta-button');

    button.addEventListener('mouseenter', () => {
        gsap.to('.arrow-circle', {
            rotation: 360,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to('.arrow-circle', {
            rotation: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(TextPlugin);

    // Main title animation
    gsap.to('.who_im_main_title', {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out'
    });

    // Description animation
    gsap.to('.who_im_description', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Buttons animation
    gsap.to('.who_im_buttons', {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out'
    });

    // Animated text content
    const text = "Bringing Your Vision to Life with Cutting-Edge Web Solutions";
    const animatedText = document.querySelector('.who_im_animated_text');

    // Set initial opacity
    gsap.set(animatedText, { opacity: 1 });

    // Create typing animation
    gsap.to(animatedText, {
        duration: 3,
        text: {
            value: text,
            delimiter: ""
        },
        ease: "none",
        delay: 1
    });

    // Button hover animations
    document.querySelectorAll('.who_im_btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn.querySelector('.who_im_circle'), {
                rotation: 90,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn.querySelector('.who_im_circle'), {
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('visionModal');
    const btn = document.getElementById('visionBtn');
    const span = document.getElementsByClassName('who_im_close')[0];
    const visionText = document.getElementById('visionText');

    btn.onclick = function (e) {
        e.preventDefault();
        modal.style.display = 'block';
        animateVisionText();
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function animateVisionText() {
        const visionContent = `
function OurVision() {
    const passion = "Transforming ideas into digital realities";
    const innovation = "Pushing the boundaries of web development";
    const collaboration = "Building strong partnerships with clients";
    
    const mission = {
        create: "Cutting-edge web solutions",
        inspire: "Next generation of developers",
        empower: "Businesses through technology"
    };
    
    const values = [
        "Creativity",
        "Integrity",
        "Excellence",
        "Continuous Learning"
    ];
    
    function execute() {
        console.log("Embarking on a journey to revolutionize the digital landscape");
        console.log("Combining " + passion + " with " + innovation);
        console.log("Fostering " + collaboration + " to achieve mutual success");
        
        for (let key in mission) {
            console.log("Our mission: To " + key + " " + mission[key]);
        }
        
        console.log("Guided by our core values:");
        values.forEach(value => console.log("- " + value));
        
        return "A future where technology enhances human potential";
    }
    
    return execute();
}

// Call to action
OurVision();
        `;

        visionText.innerHTML = '';
        const words = visionContent.split(/\s+/);
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = 0;
            visionText.appendChild(span);

            gsap.to(span, {
                opacity: 1,
                duration: 0.05,
                delay: index * 0.05
            });
        });
    }
});










const skills = [
    { name: "Full-Stack Developer", icon: "fa-solid fa-file-code", percentage: "98", orange: true },
    { name: "SEO Knowledge", icon: "fa-solid fa-magnifying-glass", percentage: "98" },
    { name: "Data Analysis", icon: "fa-solid fa-chart-line", percentage: "80" },
    { name: "Project Management", icon: "fa-solid fa-tasks", percentage: "80" },
    { name: "UI/UX Design", icon: "fa-solid fa-video", percentage: "98", orange: true },
    { name: "Graphic Design", icon: "fa-solid fa-palette", percentage: "98" },
    { name: "Social Media Integration", icon: "fa-solid fa-share-nodes", percentage: "90" },
    { name: "App Developer", icon: "fa-solid fa-mobile", percentage: "95", orange: true },
    { name: "Email Marketing", icon: "fa-solid fa-envelope", percentage: "85" },
    { name: "Analytics", icon: "fa-solid fa-chart-pie", percentage: "95" },
    { name: "Digital Marketing", icon: "fa-solid fa-bullseye", percentage: "96", orange: true },
    { name: "PPC Advertising", icon: "fa-solid fa-rectangle-ad", percentage: "88" },
    { name: "CRM", icon: "fa-solid fa-users", percentage: "92" },
    { name: "Logo Design", icon: "fa-solid fa-microscope", percentage: "94" },
    { name: "Web Analytics", icon: "fa-solid fa-gauge-high", percentage: "90", orange: true }
];

function createSkillHexagons() {
    const grid = document.querySelector('.hexagon-grid');
    skills.forEach(skill => {
        const hexagon = document.createElement('div');
        hexagon.className = `hexagon animated-border ${skill.orange ? 'orange' : ''}`;
        hexagon.innerHTML = `
            <div class="percentage">${skill.percentage}%</div>
            <i class="${skill.icon} icon"></i>
            <div class="skill-name">${skill.name}</div>
        `;
        grid.appendChild(hexagon);
    });
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createSkillHexagons();

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    document.querySelectorAll('.hexagon, .stat-box').forEach(element => {
        observer.observe(element);
    });
});






document.addEventListener('DOMContentLoaded', () => {
    // Create timeline
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 1
        }
    });

    // Animate dots
    tl.to(".development-dot", {
        opacity: 1,
        stagger: 0.2
    })
        // Animate line
        .to(".development-line", {
            transform: window.innerWidth <= 768 ? "scaleY(1)" : "scaleX(1)",
            duration: 1.5
        }, "-=1")
        // Animate labels
        .to(".development-label", {
            opacity: 1,
            y: 0,
            stagger: 0.2
        }, "-=1")
        // Animate description
        .to(".development-description", {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.5");
});

// Responsive animation adjustment
window.addEventListener('resize', () => {
    const line = document.querySelector('.development-line');
    if (window.innerWidth <= 768) {
        gsap.set(line, {
            transform: `scaleY(${line.style.transform.includes('1') ? '1' : '0'})`
        });
    } else {
        gsap.set(line, {
            transform: `scaleX(${line.style.transform.includes('1') ? '1' : '0'})`
        });
    }
});




const slides = [{
    image: 'imggg/pro1.jpg',
    category: 'E-Commerce Development',
    title: 'High-Performance eCommerce Store',
    location: 'Built with React, Node, SQL, GSAP',
    description: 'Built a high-performance e-commerce store with HTML, CSS, JavaScript, and React.js, powered by a secure PHP backend for seamless user experience and secure transactions.'
},
{
    image: 'imggg/projectimg1.png',
    category: 'Streaming Platforms',
    title: 'ReelMageddon: Immersive Streaming UX',
    location: 'React.js-Powered Streaming',
    description: 'Outcrowd unveils ReelMageddon’s immersive platform, enhancing brand identity and user experience.'
},
{
    image: 'imggg/pro3.png',
    category: 'Soundproof Booth Solutions',
    title: 'Framery: Modern Soundproof Booths',
    location: 'Reactjs PHP GSAP',
    description: 'Framery delivers high-performance soundproof booths and meeting pods, blending innovative design with a seamless, private workspace experience.'
},
{
    image: 'imggg/pro6.webp',
    category: 'Smart AI Accounting Platform',
    title: 'AI Fintech Design',
    location: 'Full-Stack Web | React, GSAP, SQL',
    description: 'Puzzle, an AI-powered accounting platform for U.S. businesses, enhanced UX with a website redesign, driving 15% growth and attracting 2,300+ users.'
},
{
    image: 'imggg/pro9.png',
    category: 'Smart Property Booking App',
    title: 'Smart Property Booking App',
    location: 'Flutter Swift (iOS) / Kotlin (Android) Node.js',
    description: 'We developed an intuitive booking app for fast, hassle-free apartment rentals, enhancing user experience and conversion rates.'
}
];
let currentSlide = 0;

function updateSlide(direction) {
    const slider = document.querySelector('.my_project_slider');
    const categories = document.querySelectorAll('.my_project_category');
    const description = document.querySelector('.my_project_description');
    // Remove active class from current category
    categories.forEach(cat => cat.classList.remove('active'));
    // Update current slide index
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    // Add active class to new category
    categories[currentSlide].classList.add('active');
    // Create new slide
    const newSlide = document.createElement('div');
    newSlide.className = 'my_project_slide';
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    newSlide.innerHTML = `
            <div class="my_project_slide_content">
                <img src="${slides[currentSlide].image}" alt="${slides[currentSlide].category}" class="my_project_slide_image">
                <div class="my_project_slide_text">
                    <h3>${slides[currentSlide].title}</h3>
                    <p>${slides[currentSlide].location}</p>
                </div>
            </div>
            <div class="my_project_slide_preview">
                <img src="${slides[nextSlideIndex].image}" alt="Next Preview" class="my_project_slide_image">
            </div>
        `;
    // Update description
    gsap.to(description, {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
            description.textContent = slides[currentSlide].description;
            gsap.to(description, {
                opacity: 1,
                duration: 0.3
            });
        }
    });
    // Animate slide transition
    gsap.to('.my_project_slide.active', {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
            document.querySelector('.my_project_slide.active').remove();
        }
    });
    slider.appendChild(newSlide);
    gsap.fromTo(newSlide, {
        opacity: 0,
        x: direction === 'next' ? 100 : -100
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5
    });
    newSlide.classList.add('active');
}
// Event Listeners
document.querySelector('.next').addEventListener('click', () => updateSlide('next'));
document.querySelector('.prev').addEventListener('click', () => updateSlide('prev'));




document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    gsap.to('.faq-header', {
        opacity: 1,
        duration: 1,
        y: 0,
        delay: 0.2
    });
    gsap.to('.faq-item', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5
    });
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    gsap.to(otherItem.querySelector('.faq-answer'), {
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
            // Toggle current item
            item.classList.toggle('active');
            gsap.to(answer, {
                height: isOpen ? 0 : 'auto',
                paddingTop: isOpen ? 0 : '0.5rem',
                paddingBottom: isOpen ? 0 : '1.5rem',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    const blogPosts = document.querySelectorAll('.blog-post');
    const prevButton = document.querySelector('.blog-nav div:first-child');
    const nextButton = document.querySelector('.blog-nav div:last-child');
    const postsPerPage = 2;
    let currentPage = 0;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    function showPage(pageNum) {
        blogPosts.forEach((post, index) => {
            post.classList.remove('active');
            const startIndex = pageNum * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            if (index >= startIndex && index < endIndex) {
                post.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentPage = (currentPage - 1 + totalPages) % totalPages;
        showPage(currentPage);
    });

    nextButton.addEventListener('click', () => {
        currentPage = (currentPage + 1) % totalPages;
        showPage(currentPage);
    });

    // Show initial page
    showPage(0);

});





document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.from(".my_footer_info_header", {
        opacity: 0,
        y: -20,
        duration: 0.8
    })
        .from(".my_footer_info_title", {
            opacity: 0,
            x: -50,
            duration: 0.8
        }, "-=0.4")
        .from(".my_footer_info_contact_icon", {
            scale: 0,
            rotation: -180,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .from(".my_footer_info_row", {
            opacity: 0,
            x: 30,
            stagger: 0.1,
            duration: 0.5
        }, "-=0.6")
        .from(".my_footer_info_footer", {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.4");
});






// feedback
const testimonials = [
    // Page 1
    {
        logo: 'hulu',
        rating: 4.9,
        text: "Thanks to the SEO strategies, our site now ranks higher, driving more organic traffic and boosting visibility. We’re thankful for the impactful results",
        author: 'Kate Davis',
        username: 'flexible_captain_8'
    },
    {
        logo: 'hbomax',
        rating: 4.0,
        text: "UI/UX design made our site easy to navigate, improving user experience. We’re grateful for the great results",
        author: 'Martin Kazlauskas',
        username: 'sartorial_statue_59'
    },
    {
        logo: 'disney',
        rating: 4.8,
        text: "The app you developed is perfect – it runs seamlessly and our users are loving it",
        author: 'Sanjay Sharma',
        username: 'voracious_rainbows_08'
    },
    {
        logo: 'starz',
        rating: 4.5,
        text: "Thanks to your work, our website is faster, more user-friendly, and performs better than ever.",
        author: 'Tawanna Afumba',
        username: 'intranigent_teejam_15'
    },
    {
        logo: 'vix',
        rating: 4.9,
        text: "Your technical expertise in both front-end and back-end made our web app a huge success.Thanks alot!",
        author: 'Larry King',
        username: 'pendulous_unicorn_46'
    },
    {
        logo: 'prime',
        rating: 4.5,
        text: "The website design you created isn’t just beautiful, it’s highly functional and works flawlessly.",
        author: 'Fatima Mohamed',
        username: 'salubrious_artist_72'
        
    }
];
const testimonialss = [
    // Page 2
    {
        logo: 'hulu',
        rating: 4.7,
        text: " Our website is now blazing fast and looks stunning! The seamless frontend and backend integration exceeded our expectations. Truly a top-notch full-stack developer!",
        author: 'david',
        username: 'david_hulu01'
    },
    {
        logo: 'hbomax',
        rating: 4.2,
        text: "Thanks to your SEO expertise, our website ranks higher, bringing in more organic traffic. Amazing work!",
        author: 'Kritika Sharma',
        username: 'kritika_sharma_08'
    },
    {
        logo: 'disney',
        rating: 4.5,
        text: "your data analysis skills helped us understand our audience better, leading to smarter business decisions",
        author: 'Manoj Kumar',
        username: 'manoj_08'
    },
    {
        logo: 'starz',
        rating: 4.5,
        text: "From planning to execution, your project management kept everything on track. Super professional",
        author: 'Sarah Johnson',
        username: 'Sarah Johnson12'
    },
    {
        logo: 'vix',
        rating: 4.8,
        text: "The graphics you created perfectly align with our brand. Your design skills are outstanding!",
        author: 'Emily Carter',
        username: 'Emily Carter_46'
    },
    {
        logo: 'prime',
        rating: 4.3,
        text: "The mobile app you developed is fast, functional, and user-friendly. Our customers love it",
        author: 'ohn Anderson',
        username: 'ohn Anderson_artist_72'
        
    }
];

// Create copies for pages 2 and 3
const allTestimonials = [
    ...testimonials,
    ...testimonialss,
    ...testimonials
];

let currentPage = 0;
const itemsPerPage = 6;
const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

function createTestimonialCard(testimonial) {
    return `
        <div class="clients_feedback_card">
            <div class="clients_feedback_card_header">
                <img src="imggg/feedback_processed.jpg" alt="${testimonial.logo}" class="clients_feedback_logo">
               
                <div class="clients_feedback_rating">
                    <span>${testimonial.rating}</span>
                    <svg width="16" height="16" fill="green" viewBox="0 0 16 16">
                        <path d="M8 0l2.5 5 5.5.8-4 3.9 1 5.3L8 12.5 3 15l1-5.3-4-3.9 5.5-.8z"/>
                    </svg>
                </div>
            </div>
            <p class="clients_feedback_text">"${testimonial.text}"</p>
            <div>
                <div class="clients_feedback_author">${testimonial.author}</div>
                <div class="clients_feedback_username">${testimonial.username}</div>
            </div>
        </div>
    `;
}

function updateNavButtons() {
    document.getElementById('prevBtn').disabled = currentPage === 0;
    document.getElementById('nextBtn').disabled = currentPage === totalPages - 1;
}

function renderPage() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageTestimonials = allTestimonials.slice(start, end);

    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = pageTestimonials.map(testimonial => createTestimonialCard(testimonial)).join('');

    updateNavButtons();
    animateCards();
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        renderPage();
    }
}

function animateCards() {
    gsap.fromTo('.clients_feedback_card',
        {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        }
    );
}

// Initialize the first page
renderPage();





// pricetag
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    gsap.from('.service_price_planAttachment-title', {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.service_price_planAttachment-left-section', {
        duration: 1,
        x: -100,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.service_price_planAttachment-right-section', {
        duration: 1,
        x: 100,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.service_price_planAttachment-buttons-container', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });

    // Service items hover animation
    const serviceItems = document.querySelectorAll('.service_price_planAttachment-service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.3,
                x: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.3,
                x: 0,
                backgroundColor: 'transparent',
                ease: 'power2.out'
            });
        });
    });
});