// ===== IMAGE DATA =====
const images = [
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/7ee14933-4835-48e8-bd95-b603e1468f0b.png", caption: "Sunset walks on the beach, hand in hand", story: "The day we watched the sun paint the sky in shades of love..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/4d1074cc-d722-472c-9b1f-734783f2eeb5.png", caption: "Dancing in the rain together", story: "When the rain fell, we found our own rhythm together..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/fd91188a-5673-497b-8c8d-ed4c6f738fed.png", caption: "Counting stars, dreaming of forever", story: "Under a million stars, we made a million wishes..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/faa662d1-8487-4fb3-807a-fc01d62b12e6.png", caption: "Autumn leaves and warm hearts", story: "Every falling leaf reminded us of how beautiful change can be..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/156d72dd-7968-45e3-bbe9-c73f3f3fab27.png", caption: "Coffee dates and endless conversations", story: "In that little café, time stood still just for us..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/8125d83a-57f0-4412-a2ba-ab356553c013.png", caption: "Dancing under the moonlight", story: "The moon was our spotlight, and the garden was our dance floor..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/e08f40d6-9d2d-46e9-9308-dce8569114f0.png", caption: "Magical nights at the carnival", story: "At the top of the ferris wheel, the whole world was ours..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/34d90158-853f-4b69-9ee6-493dafe0e110.png", caption: "Picnic in the flower fields", story: "Surrounded by flowers, but you were the most beautiful bloom..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/154ce01f-735e-40f4-a052-ded8efdf1740.png", caption: "Warm hugs in the cold winter", story: "The snow was cold, but your warmth made everything perfect..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/9509559a-c0e0-419a-8ca5-1ad8b7187275.png", caption: "City lights and bridge walks", story: "The city sparkled, but nothing shone brighter than your smile..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/4b89a892-ac51-4cec-8066-c44aeaf26d1a.png", caption: "Watching the sunrise together", story: "We climbed to the top of the world, and the sunrise was our reward..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/e5f8460e-9cec-42f0-9cd4-66c267f4a2c3.png", caption: "Lost in a garden of roses", story: "Among a thousand roses, I'd still choose you every time..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/b4e3dfdf-8ecd-456d-bae3-c5475c4f6789.png", caption: "Bicycle rides through the countryside", story: "Pedaling through the countryside, every road led to happiness..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/dad11305-901c-40f9-988a-1c707dd01a49.png", caption: "Quiet moments in the library", story: "In the silence of books, our hearts spoke the loudest..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/1430c916-1c14-450e-9f30-5a9ce7238701.png", caption: "Cooking together with love", story: "The kitchen was messy, but our love was the perfect recipe..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/dabc6241-e1d5-45da-8de2-6022609a4109.png", caption: "Peaceful moments on the lake", story: "Floating on calm waters, we found our peace in each other..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/98538aaf-bcb1-497d-ac44-a88bda51e20b.png", caption: "Cherry blossoms and new beginnings", story: "Like cherry blossoms, our love bloomed in the most beautiful way..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/e83d1b0b-d28b-4b3f-99ff-336e45ad5592.png", caption: "Rooftop views and city dreams", story: "From the rooftop, we dreamed of a future painted in gold..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/502f4111-23a6-448d-bd6b-65069d912c20.png", caption: "Bonfire nights under the stars", story: "The fire crackled, the stars twinkled, and we had everything..." },
    { src: "https://mgx-backend-cdn.metadl.com/generate/images/910744/2026-03-07/01974e06-81f6-490d-a6f4-c548142de893.png", caption: "Journey together, forever", story: "Every journey with you is my favorite adventure..." }
];

const specialLabels = [
    "First Date", "Rainy Day", "Starlit Night", "Autumn Love",
    "Coffee Time", "Moonlit Dance", "Carnival Night", "Flower Field",
    "Winter Magic", "City Lights", "Mountain Top", "Rose Garden",
    "Countryside", "Library Day", "Kitchen Fun", "Lake Serenity",
    "Cherry Bloom", "Rooftop Dream", "Bonfire Night", "Train Journey"
];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createFloatingHearts();
    buildAlbumGrid();
    buildSemuaGrid();
    buildTimeline();
    buildKhususGrid();
    buildStorySection();
    setupNavigation();
    setupLightbox();
    setupScrollAnimations();
});

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');
    const count = 50;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = (Math.random() * 20) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(particle);
    }
}

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['♥', '♡', '❤', '💕', '💗'];

    function spawnHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 18 + 12) + 'px';
        heart.style.animationDuration = (Math.random() * 12 + 10) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 22000);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(spawnHeart, i * 2000);
    }
    setInterval(spawnHeart, 3000);
}

// ===== ALBUM GRID =====
function buildAlbumGrid() {
    const grid = document.getElementById('albumGrid');
    images.forEach((img, i) => {
        const card = document.createElement('div');
        card.className = 'album-card reveal';
        card.style.animationDelay = (i * 0.05) + 's';
        card.innerHTML = `
            <div class="album-card-glow"></div>
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="album-card-overlay">
                <span>${img.caption}</span>
            </div>
        `;
        card.addEventListener('click', () => openLightbox(i));
        grid.appendChild(card);
    });
}

// ===== SEMUA GRID =====
function buildSemuaGrid() {
    const grid = document.getElementById('semuaGrid');
    images.forEach((img, i) => {
        const card = document.createElement('div');
        card.className = 'semua-card reveal';
        card.style.animationDelay = (i * 0.03) + 's';
        card.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="semua-card-overlay">
                <span>${img.caption}</span>
            </div>
        `;
        card.addEventListener('click', () => openLightbox(i));
        grid.appendChild(card);
    });
}

// ===== TIMELINE =====
function buildTimeline() {
    const timeline = document.getElementById('timeline');
    images.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'timeline-item reveal';
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <img src="${img.src}" alt="${img.caption}" loading="lazy" style="cursor:pointer;">
                <div class="timeline-caption">
                    <p>${img.caption}</p>
                </div>
            </div>
        `;
        item.querySelector('img').addEventListener('click', () => openLightbox(i));
        timeline.appendChild(item);
    });
}

// ===== KHUSUS GRID =====
function buildKhususGrid() {
    const grid = document.getElementById('khususGrid');
    images.forEach((img, i) => {
        const card = document.createElement('div');
        card.className = 'khusus-card reveal';
        card.innerHTML = `
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
            <div class="khusus-card-content">
                <span class="khusus-label">✨ ${specialLabels[i]}</span>
                <p>${img.caption}</p>
            </div>
        `;
        card.addEventListener('click', () => openLightbox(i));
        grid.appendChild(card);
    });
}

// ===== STORY SECTION =====
function buildStorySection() {
    const container = document.getElementById('storyContainer');
    images.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'story-item';
        item.innerHTML = `
            <div class="story-number">${String(i + 1).padStart(2, '0')}</div>
            <div class="story-image-wrapper">
                <img src="${img.src}" alt="${img.caption}" loading="lazy" style="cursor:pointer;">
            </div>
            <p class="story-text">${img.story}</p>
            ${i < images.length - 1 ? '<div class="story-divider"></div>' : ''}
        `;
        item.querySelector('img').addEventListener('click', () => openLightbox(i));
        container.appendChild(item);
    });
}

// ===== NAVIGATION =====
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link
        const sections = document.querySelectorAll('.section, .hero-section');
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ===== LIGHTBOX =====
let currentLightboxIndex = 0;

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    img.src = images[index].src;
    caption.textContent = images[index].caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + images.length) % images.length;
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    img.src = images[currentLightboxIndex].src;
    caption.textContent = images[currentLightboxIndex].caption;
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe reveal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Observe story items
    document.querySelectorAll('.story-item').forEach(el => observer.observe(el));

    // Observe section headers
    document.querySelectorAll('.section-header').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}
