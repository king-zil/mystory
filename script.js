// ============================================================
// ROMANTIC 3D WEBSITE - Main Script
// ============================================================

// ===== IMAGE DATA (Completely Separate Arrays) =====

// 1. Semua Gambar - 60 images
const semuaImages = [];
for (let i = 1; i <= 60; i++) {
    semuaImages.push(`images/all/${i}.jpg`);
}

// 2. Gambar Saya - 20 images
const gambarSaya = [];
for (let i = 1; i <= 20; i++) {
    gambarSaya.push(`images/me/${i}.jpg`);
}

// 3. Kenangan - 20 images
const kenanganImages = [];
for (let i = 1; i <= 20; i++) {
    kenanganImages.push(`images/memories/${i}.jpg`);
}

// 4. Gambar Kita - 20 images
const gambarKita = [];
for (let i = 1; i <= 20; i++) {
    gambarKita.push(`images/us/${i}.jpg`);
}

// ===== GALLERY METADATA =====
const galleryMeta = {
    semua: {
        title: '📸 Semua Gambar',
        subtitle: 'All our beautiful moments captured together',
        count: 60
    },
    saya: {
        title: '🤳 Gambar Saya',
        subtitle: 'My personal collection of memories',
        count: 20
    },
    kenangan: {
        title: '💭 Kenangan',
        subtitle: 'Precious memories we cherish forever',
        count: 20
    },
    kita: {
        title: '💑 Gambar Kita',
        subtitle: 'Our moments together, our love story',
        count: 20
    }
};

// ===== STATE =====
let currentGallery = 'semua';
let currentImages = [];
let currentModalIndex = 0;

// ===== DOM ELEMENTS =====
const heroSection = document.getElementById('hero');
const gallerySection = document.getElementById('gallery-section');
const galleryGrid = document.getElementById('gallery-grid');
const galleryTitle = document.getElementById('gallery-title');
const gallerySubtitle = document.getElementById('gallery-subtitle');
const albumTrigger = document.getElementById('album-trigger');
const subMenu = document.getElementById('sub-menu');
const homeBtn = document.getElementById('home-btn');
const exploreBtn = document.getElementById('explore-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');

// ===== SEPARATE GALLERY LOADING FUNCTIONS =====

function loadSemuaImages() {
    currentImages = semuaImages;
    currentGallery = 'semua';
    renderGallery(semuaImages, galleryMeta.semua);
}

function loadGambarSaya() {
    currentImages = gambarSaya;
    currentGallery = 'saya';
    renderGallery(gambarSaya, galleryMeta.saya);
}

function loadKenangan() {
    currentImages = kenanganImages;
    currentGallery = 'kenangan';
    renderGallery(kenanganImages, galleryMeta.kenangan);
}

function loadGambarKita() {
    currentImages = gambarKita;
    currentGallery = 'kita';
    renderGallery(gambarKita, galleryMeta.kita);
}

// ===== RENDER GALLERY =====
function renderGallery(images, meta) {
    galleryTitle.textContent = meta.title;
    gallerySubtitle.textContent = meta.subtitle;
    galleryGrid.innerHTML = '';

    images.forEach((src, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.style.animationDelay = `${index * 0.05}s`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Photo ${index + 1}`;
        img.loading = 'lazy';
        // Placeholder gradient for missing images
        img.onerror = function () {
            this.style.display = 'none';
            card.style.background = getPlaceholderGradient(index);
        };

        const glow = document.createElement('div');
        glow.className = 'card-glow';

        const number = document.createElement('div');
        number.className = 'card-number';
        number.textContent = `#${index + 1}`;

        card.appendChild(img);
        card.appendChild(glow);
        card.appendChild(number);

        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
        });

        // Click to open modal
        card.addEventListener('click', () => {
            openModal(index);
        });

        galleryGrid.appendChild(card);
    });

    // Update active sub-item
    document.querySelectorAll('.sub-item').forEach((item) => {
        item.classList.remove('active');
        if (item.dataset.gallery === currentGallery) {
            item.classList.add('active');
        }
    });
}

// ===== PLACEHOLDER GRADIENTS =====
function getPlaceholderGradient(index) {
    const gradients = [
        'linear-gradient(135deg, #ff6b9d33, #c084fc33)',
        'linear-gradient(135deg, #7c3aed33, #ff6b9d33)',
        'linear-gradient(135deg, #fbbf2433, #ff6b9d33)',
        'linear-gradient(135deg, #c084fc33, #7c3aed33)',
        'linear-gradient(135deg, #ff8fb833, #fbbf2433)',
        'linear-gradient(135deg, #e0b0ff33, #ff6b9d33)'
    ];
    return gradients[index % gradients.length];
}

// ===== SHOW / HIDE SECTIONS =====
function showGallery(galleryKey) {
    heroSection.style.display = 'none';
    gallerySection.style.display = 'block';
    homeBtn.style.display = 'inline-block';

    const footer = document.getElementById('footer');
    footer.style.display = 'block';

    switch (galleryKey) {
        case 'semua':
            loadSemuaImages();
            break;
        case 'saya':
            loadGambarSaya();
            break;
        case 'kenangan':
            loadKenangan();
            break;
        case 'kita':
            loadGambarKita();
            break;
        default:
            loadSemuaImages();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    heroSection.style.display = 'flex';
    gallerySection.style.display = 'none';
    homeBtn.style.display = 'none';
    subMenu.classList.remove('open');
    albumTrigger.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== MODAL =====
function openModal(index) {
    currentModalIndex = index;
    updateModalImage();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalImage() {
    const src = currentImages[currentModalIndex];
    modalImage.src = src;
    modalImage.alt = `Photo ${currentModalIndex + 1}`;
    // If image fails, show gradient placeholder
    modalImage.onerror = function () {
        this.src = '';
        this.style.width = '400px';
        this.style.height = '400px';
        this.style.background = getPlaceholderGradient(currentModalIndex);
        this.style.borderRadius = '16px';
    };
}

function nextImage() {
    currentModalIndex = (currentModalIndex + 1) % currentImages.length;
    updateModalImage();
}

function prevImage() {
    currentModalIndex = (currentModalIndex - 1 + currentImages.length) % currentImages.length;
    updateModalImage();
}

// ===== EVENT LISTENERS =====

// Album trigger
albumTrigger.addEventListener('click', () => {
    subMenu.classList.toggle('open');
    albumTrigger.classList.toggle('active');
});

// Sub-menu items
document.querySelectorAll('.sub-item').forEach((item) => {
    item.addEventListener('click', () => {
        const gallery = item.dataset.gallery;
        showGallery(gallery);
        subMenu.classList.remove('open');
        albumTrigger.classList.remove('active');
    });
});

// Home button
homeBtn.addEventListener('click', showHome);

// Explore button
exploreBtn.addEventListener('click', () => {
    showGallery('semua');
});

// Modal controls
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
modalNext.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
});
modalPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Close sub-menu when clicking outside
document.addEventListener('click', (e) => {
    if (!albumTrigger.contains(e.target) && !subMenu.contains(e.target)) {
        subMenu.classList.remove('open');
        albumTrigger.classList.remove('active');
    }
});

// ===== HERO BACKGROUND SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 6000);
}

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '🩷', '🤍'];

    function spawnHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (12 + Math.random() * 20) + 'px';
        heart.style.animationDuration = (8 + Math.random() * 12) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 22000);
    }

    // Spawn hearts periodically
    setInterval(spawnHeart, 2000);
    // Initial batch
    for (let i = 0; i < 6; i++) {
        setTimeout(spawnHeart, i * 400);
    }
}

// ===== SOFT PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles-container');

    function spawnParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (6 + Math.random() * 10) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';

        // Random colors
        const colors = ['#ff6b9d', '#c084fc', '#fbbf24', '#ff8fb8', '#e0b0ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}44`;

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 18000);
    }

    setInterval(spawnParticle, 800);
    for (let i = 0; i < 10; i++) {
        setTimeout(spawnParticle, i * 200);
    }
}

// ===== THREE.JS ROMANTIC BACKGROUND =====
function initThreeJS() {
    const canvas = document.getElementById('three-canvas');

    // Check if Three.js is available
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Romantic ambient light
    const ambientLight = new THREE.AmbientLight(0xff6b9d, 0.3);
    scene.add(ambientLight);

    // Warm point lights
    const pinkLight = new THREE.PointLight(0xff6b9d, 1.5, 100);
    pinkLight.position.set(20, 20, 20);
    scene.add(pinkLight);

    const purpleLight = new THREE.PointLight(0xc084fc, 1.2, 100);
    purpleLight.position.set(-20, -10, 15);
    scene.add(purpleLight);

    const goldLight = new THREE.PointLight(0xfbbf24, 0.8, 80);
    goldLight.position.set(0, 15, -10);
    scene.add(goldLight);

    // Floating light particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
        new THREE.Color(0xff6b9d),
        new THREE.Color(0xc084fc),
        new THREE.Color(0xfbbf24),
        new THREE.Color(0xff8fb8),
        new THREE.Color(0xe0b0ff)
    ];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random() * 2 + 0.5;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Soft glowing spheres
    const sphereCount = 8;
    const spheres = [];
    for (let i = 0; i < sphereCount; i++) {
        const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 1.5, 16, 16);
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        const material = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.15
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30
        );
        sphere.userData = {
            speed: 0.2 + Math.random() * 0.5,
            amplitude: 5 + Math.random() * 10,
            offset: Math.random() * Math.PI * 2
        };
        scene.add(sphere);
        spheres.push(sphere);
    }

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Rotate particle system gently
        particleSystem.rotation.y = elapsed * 0.02;
        particleSystem.rotation.x = Math.sin(elapsed * 0.01) * 0.1;

        // Animate individual particles (gentle float)
        const pos = particleGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3 + 1] += Math.sin(elapsed * 0.3 + i) * 0.005;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        // Animate spheres
        spheres.forEach((sphere) => {
            const d = sphere.userData;
            sphere.position.y += Math.sin(elapsed * d.speed + d.offset) * 0.02;
            sphere.position.x += Math.cos(elapsed * d.speed * 0.5 + d.offset) * 0.01;
        });

        // Animate lights
        pinkLight.position.x = Math.sin(elapsed * 0.3) * 25;
        pinkLight.position.y = Math.cos(elapsed * 0.2) * 20;
        purpleLight.position.x = Math.cos(elapsed * 0.25) * 25;
        purpleLight.position.y = Math.sin(elapsed * 0.35) * 15;
        goldLight.position.x = Math.sin(elapsed * 0.15) * 15;
        goldLight.position.y = Math.cos(elapsed * 0.4) * 20;

        // Camera parallax
        camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && heroSection.style.display !== 'none') {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - scrolled / 600;
        }
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    initHeroSlider();
    createFloatingHearts();
    createParticles();
    initParallax();
});
