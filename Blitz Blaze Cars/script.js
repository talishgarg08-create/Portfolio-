const vehicles = [
    {
        id: 1,
        name: 'BMW M5 (G90 – 2025)',
        role: 'Fast and fancy sedan',
        image: 'images/bmw-m5.jpg',
        overview: 'The BMW M5 is a super fast car that mixes racing power with luxury comfort. It\'s made for people who want extreme speed but don\'t want to give up being comfortable. This new version uses electric power too, but still feels like a real M car.',
        design: 'The outside looks bold and sporty with sharp lines, big air intakes, and a strong presence on the road. The BMW lights and aerodynamic parts show it\'s built for speed. Inside, it mixes fancy materials with a driver-focused cockpit that feels both luxurious and ready for action.',
        performance: {
            top: '305 km/h',
            accel: '3.5s',
            power: '535 hp',
            torque: '750 Nm',
            description: 'This car has a powerful hybrid engine that gives instant acceleration, precise handling, and great efficiency. The smart suspension and all-wheel drive help you stay in control at high speeds and in everyday driving.'
        },
        technology: ['Curved digital screen with M car features', 'Advanced safety systems', 'Different driving modes for performance', 'Luxury and racing tech working together'],
        highlights: ['Hybrid power system', 'Instant acceleration', 'All-wheel drive', 'Smart suspension'],
        philosophy: 'A fast sedan that loves long trips and still feels calm and steady.'
    },
    {
        id: 2,
        name: 'BMW 7 Series',
        role: 'Super luxury car',
        image: 'images/bmw-7-series.jpg',
        overview: 'The BMW 7 Series is the ultimate luxury car. It\'s all about innovation, comfort, and the latest technology. It\'s built to give a first-class experience for both the driver and people sitting in the back.',
        design: 'With its bold grille, sleek shape, and refined look, the 7 Series makes a strong statement. The inside is like a luxury room with premium seats, cool lighting, and simple, elegant design.',
        performance: {
            top: '250 km/h',
            accel: '4.7s',
            power: '544 hp',
            torque: '750 Nm',
            description: 'The back seats are the star with executive lounge seating, advanced climate control, and amazing entertainment systems. Every detail is made to create a calm, easy journey.'
        },
        technology: ['Huge curved infotainment screen', 'Theatre screen for back seats', 'Voice and gesture controls', 'Next-generation connectivity and safety'],
        highlights: ['Executive back seats', 'Advanced climate control', 'Immersive entertainment', 'Quiet cabin'],
        philosophy: 'A smooth leader that keeps noise out and comfort up.'
    },
    {
        id: 3,
        name: 'Porsche 911',
        role: 'Classic sports car',
        image: 'images/porsche-911.jpg',
        overview: 'The Porsche 911 is a timeless sports car that keeps getting better while staying true to its roots. It delivers precision engineering, amazing performance, and you can drive it every day.',
        design: 'The famous shape is still instantly recognizable, with smooth curves, wide back end, and modern lights. The inside balances simplicity with performance-focused controls.',
        performance: {
            top: '293 km/h',
            accel: '3.2s',
            power: '473 hp',
            torque: '570 Nm',
            description: 'The engine in the back gives it special handling. Precise steering, balanced chassis, and quick acceleration make the 911 one of the best sports cars ever made.'
        },
        technology: ['Driver-focused cockpit', 'Multiple performance driving modes', 'Great on road and track', 'Precision steering and handling'],
        highlights: ['Rear engine layout', 'Precise steering', 'Balanced handling', 'Everyday usability'],
        philosophy: 'Famous shape, sharp steering, and grip that makes corners feel easy.'
    },
    {
        id: 4,
        name: 'Koenigsegg Jesko',
        role: 'Extreme hypercar',
        image: 'images/koenigsegg-jesko.jpg',
        overview: 'The Koenigsegg Jesko is an uncompromising hypercar built for extreme performance. Made with precision and innovation, it pushes the limits of speed, aerodynamics, and mechanical design.',
        design: 'The outside is shaped completely by aerodynamics, with huge air channels, an active rear wing, and lightweight carbon-fiber body. Every surface has a purpose - speed, stability, and control.',
        performance: {
            top: '480+ km/h',
            accel: '2.5s',
            power: '1280 hp',
            torque: '1500 Nm',
            description: 'At its heart is a high-revving twin-turbo V8 engine that makes incredible power. Advanced transmission technology allows almost instant gear shifts, giving relentless acceleration.'
        },
        technology: ['Lightweight carbon monocoque', 'Advanced aerodynamic downforce systems', 'Precision-focused driver cockpit', 'Track-oriented driving dynamics'],
        highlights: ['Ultra-fast gear shifts', 'Moving wings for downforce', 'Light carbon body', 'Extreme power'],
        philosophy: 'Built to be crazy fast, with every part made to chase speed.'
    },
    {
        id: 5,
        name: 'Mercedes-Benz G-Class',
        role: 'Tough luxury SUV',
        image: 'images/mercedes-g-class.jpg',
        overview: 'The Mercedes-Benz G-Class is an icon that mixes military-grade toughness with modern luxury. Its unmistakable boxy design has stayed true to its origins while getting better with technology.',
        design: 'The boxy shape, exposed door hinges, and upright stance define its timeless character. Inside, the cabin mixes toughness with refinement, offering premium materials and advanced digital displays.',
        performance: {
            top: '210 km/h',
            accel: '4.5s',
            power: '577 hp',
            torque: '850 Nm',
            description: 'Built for extreme terrain, the G-Wagon has advanced four-wheel drive, locking differentials, and great ground clearance. It\'s as capable off-road as it is impressive on city streets.'
        },
        technology: ['Dual widescreen digital cockpit', 'Advanced off-road driving modes', 'High-end sound and comfort', 'Locking differentials'],
        highlights: ['Strong frame', 'Three locking diffs', 'Hand-built feel', 'Off-road capable'],
        philosophy: 'Tall, tough, and ready for hills while still feeling fancy.'
    },
    {
        id: 6,
        name: 'Range Rover',
        role: 'Elegant luxury SUV',
        image: 'images/range-rover.jpg',
        overview: 'Range Rover stands as a symbol of refined luxury and all-terrain capability. It seamlessly combines elegance, comfort, and advanced engineering.',
        design: 'The outside has clean surfaces, a floating roofline, and minimalist details. Inside, the cabin focuses on space, premium materials, and a calm, modern look.',
        performance: {
            top: '250 km/h',
            accel: '4.6s',
            power: '523 hp',
            torque: '750 Nm',
            description: 'Built to perform across all terrains, Range Rover delivers confident off-road performance while keeping an amazing smooth ride on highways.'
        },
        technology: ['Advanced terrain response system', 'Touch-based infotainment', 'Driver assistance and safety features', 'Air suspension'],
        highlights: ['Air ride comfort', 'Terrain modes', 'Quiet cabin', 'All-terrain capable'],
        philosophy: 'Glides over rough roads and stays quiet inside.'
    },
    {
        id: 7,
        name: 'Toyota Land Cruiser',
        role: 'Tough off-road SUV',
        image: 'images/toyota-land-cruiser.jpg',
        overview: 'The Toyota Land Cruiser is legendary for its durability and off-road reliability. Built to conquer extreme conditions, it remains a benchmark for rugged performance.',
        design: 'The outside shows strength and purpose with a bold grille, muscular body lines, and commanding stance. The inside balances toughness with comfort and practicality.',
        performance: {
            top: '175 km/h',
            accel: '8.0s',
            power: '409 hp',
            torque: '650 Nm',
            description: 'It has advanced four-wheel drive, high ground clearance, and proven durability across harsh environments. Modern safety features and driver assistance systems make it better without losing its tough identity.'
        },
        technology: ['Advanced four-wheel drive system', 'High ground clearance', 'Modern safety features', 'Driver assistance systems'],
        highlights: ['Strong frame', 'Locking diffs', 'Very reliable', 'Off-road proven'],
        philosophy: 'Made to survive tough places and keep going for years.'
    },
    {
        id: 8,
        name: 'Toyota Vellfire',
        role: 'Luxury family van',
        image: 'images/toyota-vellfire.jpg',
        overview: 'The Toyota Vellfire is a luxury MPV designed for comfort, space, and refinement. It\'s perfect for families and executives who care most about passenger experience.',
        design: 'The bold front end and sleek profile give the Vellfire a premium look. Inside, the focus is on spacious seating, comfort-focused layouts, and a quiet, insulated cabin.',
        performance: {
            top: '170 km/h',
            accel: '8.1s',
            power: '247 hp',
            torque: '239 Nm',
            description: 'It has plush captain seats, rear-seat entertainment options, smooth ride quality, and easy access. Modern infotainment systems and Toyota\'s safety technologies keep everyone secure and comfortable.'
        },
        technology: ['Modern infotainment systems', 'Toyota safety technologies', 'Rear-seat entertainment', 'Smooth hybrid system'],
        highlights: ['Comfy captain seats', 'Smooth sliding doors', 'Hybrid calm', 'Spacious interior'],
        philosophy: 'Feels like a soft lounge on wheels, keeping everyone relaxed.'
    }
];

const collectionGrid = document.getElementById('collectionGrid');
const exploreBtn = document.getElementById('exploreBtn');
const contactForm = document.getElementById('contactForm');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const detailOverlay = document.getElementById('detailOverlay');
const detailContent = document.getElementById('detailContent');
const detailClose = document.getElementById('detailClose');
let mapMarkers, mapCards;
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('DOMContentLoaded', () => {
    renderCollection();
    setupCursor();
    setupNav();
    setupScroll();
    // Initialize map elements after DOM is ready
    mapMarkers = document.querySelectorAll('.map-marker');
    mapCards = document.querySelectorAll('.map-card');
    setupMap();
    setupForm();
    setupEngine();
    setupGearbox();
});

function renderCollection() {
    collectionGrid.innerHTML = '';
    vehicles.forEach((car, index) => {
        const card = document.createElement('article');
        card.className = 'card fade-in';
        card.style.transitionDelay = `${index * 60}ms`;
        card.dataset.id = car.id;
        const imageStyle = car.image ? `background-image: url('${car.image}');` : '';
        card.innerHTML = `
            <div class="card-media" style="${imageStyle}" ${car.image ? `data-image="${car.image}"` : ''}></div>
            <div class="card-content">
                <div class="card-top">
                    <div>
                        <h3>${car.name}</h3>
                        <p class="badge">${car.role}</p>
                    </div>
                </div>
                <p>${car.philosophy}</p>
                <div class="card-meta">
                    <span>${car.performance.accel} to 100</span>
                    <span>${car.performance.top} top</span>
                    <span>${car.performance.power}</span>
                </div>
                <div class="card-action" aria-label="Read story">
                    <span>→</span> Read the story
                </div>
            </div>
        `;
        card.addEventListener('click', () => openDetail(car.id));
        collectionGrid.appendChild(card);
    });
}

function openDetail(id) {
    const car = vehicles.find(v => v.id === id);
    if (!car) return;
    
    // Filter out 'description' from performance object for display
    const perfEntries = Object.entries(car.performance).filter(([key]) => key !== 'description');
    const heroImageStyle = car.image ? `background-image: url('${car.image}');` : '';
    
    detailContent.innerHTML = `
        <div class="detail-hero" style="${heroImageStyle}" ${car.image ? `data-image="${car.image}"` : ''}></div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;">
            <div>
                <p class="eyebrow">${car.role}</p>
                <h2 style="font-family:var(--font-serif);">${car.name}</h2>
            </div>
            <div class="badge">Full Story</div>
        </div>
        
        <div class="detail-section">
            <h3>Overview</h3>
            <p class="detail-text">${car.overview}</p>
        </div>
        
        <div class="detail-section">
            <h3>Design</h3>
            <p class="detail-text">${car.design}</p>
        </div>
        
        <div class="detail-meta">
            ${perfEntries.map(([label, value]) => `
                <div class="meta-box">
                    <div class="meta-label">${label === 'top' ? 'Top Speed' : label === 'accel' ? '0-100 km/h' : label === 'power' ? 'Power' : label === 'torque' ? 'Torque' : label}</div>
                    <div class="meta-value">${value}</div>
                </div>
            `).join('')}
        </div>
        
        ${car.performance.description ? `
        <div class="detail-section">
            <h3>Performance</h3>
            <p class="detail-text">${car.performance.description}</p>
        </div>
        ` : ''}
        
        <div class="detail-columns">
            <div>
                <h4>Key Features</h4>
                <ul class="detail-list">
                    ${car.highlights.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4>Technology</h4>
                <ul class="detail-list">
                    ${car.technology.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>What It's Like</h3>
            <p class="detail-text">${car.philosophy}</p>
        </div>
        
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:2rem;">
            <button class="btn btn-primary" data-cursor="cta" onclick="prefillInquiry('${car.name}')">Request Information</button>
            <button class="btn btn-ghost" data-cursor="cta" onclick="prefillInquiry('${car.name}')">Ask Questions</button>
        </div>
    `;
    detailOverlay.classList.add('active');
    detailOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    detailOverlay.classList.remove('active');
    detailOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) closeDetail();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailOverlay.classList.contains('active')) {
        closeDetail();
    }
});

window.prefillInquiry = (carName) => {
    closeDetail();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    const intentField = document.getElementById('intent');
    const message = document.getElementById('message');
    if (intentField) {
        intentField.value = carName;
    }
    if (message) {
        message.value = `I'd like to get more information about the ${carName}.`;
        message.focus();
    }
};

function setupCursor() {
    let hideTimeout;
    const moveCursor = (e) => {
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorRing.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
        clearTimeout(hideTimeout);
        cursorDot.classList.remove('hide');
        cursorRing.classList.remove('hide');
        hideTimeout = setTimeout(() => {
            cursorDot.classList.add('hide');
            cursorRing.classList.add('hide');
        }, 1500);
    };
    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('interact'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('interact'));
    });
}

function setupNav() {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function setupScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.18 });

    document.querySelectorAll('.fade-in, .story-block').forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            const offset = window.scrollY * 0.15;
            heroVisual.style.transform = `translateY(${offset}px)`;
        }
    });
}

const locationData = {
    Delhi: {
        name: 'Auto motive Delhi',
        description: 'Premium car showroom and service center offering a wide range of luxury vehicles with expert consultation and after-sales support.',
        address: 'Delhi, India',
        hours: 'Mon–Sat · 09:00–22:00 IST'
    },
    Mumbai1: {
        name: 'Brotomotive Mumbai',
        description: 'Luxury automotive experience center featuring high-end vehicles, test drives, and personalized car selection services.',
        address: 'Mumbai, Maharashtra, India',
        hours: 'Mon–Sat · 09:00–22:00 IST'
    },
    Mumbai2: {
        name: 'Matrix Mumbai',
        description: 'Premium car dealership and customization hub specializing in luxury vehicles with bespoke modification options.',
        address: 'Mumbai, Maharashtra, India',
        hours: 'Mon–Sat · 09:00–22:00 IST'
    },
    Mumbai3: {
        name: 'Mansory Mumbai',
        description: 'Exclusive luxury car modifications and sales, offering world-class customization services for high-performance vehicles.',
        address: 'Mumbai, Maharashtra, India',
        hours: 'Mon–Sat · 09:00–22:00 IST'
    }
};

let selectedLocation = null;
const mapCanvas = document.getElementById('mapCanvas');

function setupMap() {
    // Marker interactions
    mapMarkers.forEach(marker => {
        const location = marker.dataset.location;
        
        marker.addEventListener('mouseenter', () => {
            syncLocation(location);
            showMarkerInfo(marker, true);
        });
        
        marker.addEventListener('mouseleave', () => {
            if (selectedLocation !== location) {
                showMarkerInfo(marker, false);
            }
        });
        
        marker.addEventListener('click', () => {
            selectLocation(location);
            showLocationDetails(location);
        });
    });
    
    // Card interactions
    mapCards.forEach(card => {
        const location = card.dataset.location;
        
        card.addEventListener('mouseenter', () => {
            syncLocation(location);
            highlightMarker(location, true);
        });
        
        card.addEventListener('mouseleave', () => {
            if (selectedLocation !== location) {
                highlightMarker(location, false);
            }
        });
        
        card.addEventListener('click', () => {
            selectLocation(location);
            showLocationDetails(location);
            document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
    
    // Map canvas click to deselect
    if (mapCanvas) {
        mapCanvas.addEventListener('click', (e) => {
            if (e.target === mapCanvas || e.target.classList.contains('map-canvas')) {
                deselectLocation();
            }
        });
    }
    
    // Add zoom controls
    addMapControls();
}

function syncLocation(location) {
    mapMarkers.forEach(m => {
        const isActive = m.dataset.location === location;
        m.classList.toggle('active', isActive);
    });
    mapCards.forEach(c => {
        c.classList.toggle('active', c.dataset.location === location);
    });
}

function highlightMarker(location, highlight) {
    const marker = Array.from(mapMarkers).find(m => m.dataset.location === location);
    if (marker) {
        marker.classList.toggle('highlighted', highlight);
    }
}

function showMarkerInfo(marker, show) {
    const info = marker.querySelector('.marker-info');
    if (info) {
        info.style.opacity = show ? '1' : '0';
        info.style.pointerEvents = show ? 'auto' : 'none';
    }
}

function selectLocation(location) {
    selectedLocation = location;
    syncLocation(location);
    mapMarkers.forEach(m => {
        if (m.dataset.location === location) {
            m.classList.add('selected');
            showMarkerInfo(m, true);
        } else {
            m.classList.remove('selected');
            showMarkerInfo(m, false);
        }
    });
}

function deselectLocation() {
    selectedLocation = null;
    mapMarkers.forEach(m => {
        m.classList.remove('selected', 'highlighted');
        showMarkerInfo(m, false);
    });
    mapCards.forEach(c => c.classList.remove('active'));
    hideLocationDetails();
}

function showLocationDetails(location) {
    const data = locationData[location];
    if (!data) return;
    
    let detailsPanel = document.getElementById('mapDetailsPanel');
    if (!detailsPanel) {
        detailsPanel = document.createElement('div');
        detailsPanel.id = 'mapDetailsPanel';
        detailsPanel.className = 'map-details-panel';
        mapCanvas.parentElement.appendChild(detailsPanel);
    }
    
    detailsPanel.innerHTML = `
        <button class="details-close" onclick="deselectLocation()">×</button>
        <h3>${data.name}</h3>
        <p class="details-description">${data.description}</p>
        <div class="details-info">
            <div class="info-item">
                <strong>Address</strong>
                <span>${data.address}</span>
            </div>
            <div class="info-item">
                <strong>Hours</strong>
                <span>${data.hours}</span>
            </div>
        </div>
        <button class="btn btn-primary" style="margin-top: 16px; width: 100%;" onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })">
            Get Information
        </button>
    `;
    
    detailsPanel.classList.add('active');
}

function hideLocationDetails() {
    const detailsPanel = document.getElementById('mapDetailsPanel');
    if (detailsPanel) {
        detailsPanel.classList.remove('active');
    }
}

function addMapControls() {
    const controls = document.createElement('div');
    controls.className = 'map-controls';
    controls.innerHTML = `
        <button class="map-zoom-btn" id="zoomIn" aria-label="Zoom in">+</button>
        <button class="map-zoom-btn" id="zoomOut" aria-label="Zoom out">−</button>
    `;
    
    if (mapCanvas) {
        mapCanvas.appendChild(controls);
        
        let scale = 1;
        const minScale = 0.8;
        const maxScale = 1.5;
        
        document.getElementById('zoomIn').addEventListener('click', () => {
            scale = Math.min(scale + 0.1, maxScale);
            mapCanvas.style.transform = `scale(${scale})`;
        });
        
        document.getElementById('zoomOut').addEventListener('click', () => {
            scale = Math.max(scale - 0.1, minScale);
            mapCanvas.style.transform = `scale(${scale})`;
        });
    }
}

// Make deselectLocation globally available
window.deselectLocation = deselectLocation;

function setupForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const original = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        setTimeout(() => {
            submitBtn.textContent = 'Sent';
            contactForm.reset();
            setTimeout(() => {
                submitBtn.textContent = original;
                submitBtn.disabled = false;
            }, 1800);
        }, 1200);
    });
}

// ============================================
// Generative Engine Visualization
// ============================================

function setupEngine() {
    const canvas = document.getElementById('engineCanvas');
    const rpmBar = document.getElementById('rpmBar');
    if (!canvas || !rpmBar) return;
    
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Engine state
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let rpm = 0;
    let targetRPM = 0;
    let time = 0;
    const particles = [];
    const cylinders = 4;
    const cylinderPositions = [];
    
    // Initialize cylinder positions
    for (let i = 0; i < cylinders; i++) {
        cylinderPositions.push({
            x: canvas.width * (0.2 + (i * 0.2)),
            y: canvas.height * 0.5,
            phase: (i / cylinders) * Math.PI * 2
        });
    }
    
    // Mouse tracking
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        targetRPM = Math.min(100, Math.max(20, 20 + (mouseY / canvas.height) * 80));
    });
    
    container.addEventListener('mouseleave', () => {
        targetRPM = 20;
    });
    
    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1;
            this.decay = 0.02 + Math.random() * 0.02;
            this.size = 2 + Math.random() * 3;
            this.hue = 0; // Red hue
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.life -= this.decay;
            this.hue = (this.hue + 2) % 360;
        }
        
        draw(ctx) {
            if (this.life <= 0) return;
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.life})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Animation loop
    function animate() {
        time += 0.016;
        
        // Smooth RPM transition
        rpm += (targetRPM - rpm) * 0.1;
        
        // Update RPM bar
        if (rpmBar) {
            rpmBar.style.setProperty('--rpm-width', `${rpm}%`);
        }
        
        // Clear canvas
        ctx.fillStyle = 'rgba(27, 26, 26, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw engine block
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const blockX = canvas.width * 0.1;
        const blockY = canvas.height * 0.3;
        const blockW = canvas.width * 0.8;
        const blockH = canvas.height * 0.4;
        ctx.moveTo(blockX + 8, blockY);
        ctx.lineTo(blockX + blockW - 8, blockY);
        ctx.quadraticCurveTo(blockX + blockW, blockY, blockX + blockW, blockY + 8);
        ctx.lineTo(blockX + blockW, blockY + blockH - 8);
        ctx.quadraticCurveTo(blockX + blockW, blockY + blockH, blockX + blockW - 8, blockY + blockH);
        ctx.lineTo(blockX + 8, blockY + blockH);
        ctx.quadraticCurveTo(blockX, blockY + blockH, blockX, blockY + blockH - 8);
        ctx.lineTo(blockX, blockY + 8);
        ctx.quadraticCurveTo(blockX, blockY, blockX + 8, blockY);
        ctx.closePath();
        ctx.stroke();
        
        // Draw cylinders and pistons
        cylinderPositions.forEach((cyl, i) => {
            const phase = cyl.phase + (time * rpm * 0.01);
            const pistonY = cyl.y + Math.sin(phase) * 40;
            
            // Cylinder
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.beginPath();
            ctx.rect(cyl.x - 25, cyl.y - 60, 50, 120);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.stroke();
            
            // Piston
            const pistonGlow = Math.abs(Math.sin(phase)) * 0.5 + 0.5;
            ctx.fillStyle = `rgba(217, 20, 31, ${0.3 + pistonGlow * 0.4})`;
            ctx.beginPath();
            const pistonX = cyl.x - 20;
            const pistonYPos = pistonY - 15;
            const pistonW = 40;
            const pistonH = 30;
            ctx.moveTo(pistonX + 4, pistonYPos);
            ctx.lineTo(pistonX + pistonW - 4, pistonYPos);
            ctx.quadraticCurveTo(pistonX + pistonW, pistonYPos, pistonX + pistonW, pistonYPos + 4);
            ctx.lineTo(pistonX + pistonW, pistonYPos + pistonH - 4);
            ctx.quadraticCurveTo(pistonX + pistonW, pistonYPos + pistonH, pistonX + pistonW - 4, pistonYPos + pistonH);
            ctx.lineTo(pistonX + 4, pistonYPos + pistonH);
            ctx.quadraticCurveTo(pistonX, pistonYPos + pistonH, pistonX, pistonYPos + pistonH - 4);
            ctx.lineTo(pistonX, pistonYPos + 4);
            ctx.quadraticCurveTo(pistonX, pistonYPos, pistonX + 4, pistonYPos);
            ctx.closePath();
            ctx.fill();
            
            // Piston glow
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'rgba(217, 20, 31, 0.6)';
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Spark/exhaust particles
            if (Math.sin(phase) > 0.9 && Math.random() > 0.7) {
                particles.push(new Particle(cyl.x, pistonY - 20));
            }
        });
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw(ctx);
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        // Draw connecting rods (crankshaft visualization)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1.5;
        cylinderPositions.forEach((cyl, i) => {
            const phase = cyl.phase + (time * rpm * 0.01);
            const pistonY = cyl.y + Math.sin(phase) * 40;
            const crankX = canvas.width * 0.5;
            const crankY = canvas.height * 0.5;
            const crankAngle = phase + Math.PI / 2;
            const crankRadius = 30;
            const crankXPos = crankX + Math.cos(crankAngle) * crankRadius;
            const crankYPos = crankY + Math.sin(crankAngle) * crankRadius;
            
            ctx.beginPath();
            ctx.moveTo(cyl.x, pistonY);
            ctx.lineTo(crankXPos, crankYPos);
            ctx.stroke();
        });
        
        // Crankshaft center
        ctx.fillStyle = 'rgba(217, 20, 31, 0.4)';
        ctx.beginPath();
        ctx.arc(canvas.width * 0.5, canvas.height * 0.5, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(217, 20, 31, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Mouse interaction glow
        const distFromMouse = Math.sqrt(
            Math.pow(mouseX - canvas.width * 0.5, 2) + 
            Math.pow(mouseY - canvas.height * 0.5, 2)
        );
        const maxDist = Math.min(canvas.width, canvas.height) * 0.5;
        const glowIntensity = Math.max(0, 1 - (distFromMouse / maxDist));
        
        if (glowIntensity > 0.1) {
            ctx.fillStyle = `rgba(217, 20, 31, ${glowIntensity * 0.1})`;
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 60, 0, Math.PI * 2);
            ctx.fill();
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// ============================================
// Gearbox Simulator
// ============================================

const gearData = {
    N: { torque: 0, speed: 0, rpm: 0, description: 'Neutral - No power transmission' },
    R: { torque: 450, speed: 15, rpm: 1200, description: 'Reverse - Maximum torque for backing up' },
    1: { torque: 750, speed: 45, rpm: 3500, description: 'First Gear - Maximum torque, low speed for starting' },
    2: { torque: 600, speed: 80, rpm: 4000, description: 'Second Gear - High torque for acceleration' },
    3: { torque: 500, speed: 120, rpm: 4500, description: 'Third Gear - Balanced power and speed' },
    4: { torque: 400, speed: 160, rpm: 5000, description: 'Fourth Gear - Efficient cruising gear' },
    5: { torque: 350, speed: 200, rpm: 5500, description: 'Fifth Gear - High speed with good efficiency' },
    6: { torque: 300, speed: 250, rpm: 6000, description: 'Sixth Gear - Maximum speed, highway cruising' }
};

function setupGearbox() {
    const gearButtons = document.querySelectorAll('.gear-btn');
    const currentGearEl = document.getElementById('currentGear');
    const torqueValueEl = document.getElementById('torqueValue');
    const speedValueEl = document.getElementById('speedValue');
    const rpmValueEl = document.getElementById('rpmValue');
    const torqueBarEl = document.getElementById('torqueBar');
    const speedBarEl = document.getElementById('speedBar');
    const rpmBarGearEl = document.getElementById('rpmBarGear');
    const gearDescriptionEl = document.getElementById('gearDescription');
    
    let currentGear = 'N';
    let animationFrame = null;
    
    // Update display with smooth animations
    function updateMetrics(gear) {
        const data = gearData[gear];
        if (!data) return;
        
        currentGear = gear;
        currentGearEl.textContent = gear;
        gearDescriptionEl.textContent = data.description;
        
        // Animate values smoothly
        animateValue(torqueValueEl, parseInt(torqueValueEl.textContent) || 0, data.torque, (val) => {
            torqueValueEl.textContent = Math.round(val);
            torqueBarEl.style.width = `${(val / 750) * 100}%`;
        });
        
        animateValue(speedValueEl, parseInt(speedValueEl.textContent) || 0, data.speed, (val) => {
            speedValueEl.textContent = Math.round(val);
            speedBarEl.style.width = `${(val / 250) * 100}%`;
        });
        
        animateValue(rpmValueEl, parseInt(rpmValueEl.textContent) || 0, data.rpm, (val) => {
            rpmValueEl.textContent = Math.round(val);
            rpmBarGearEl.style.width = `${(val / 6000) * 100}%`;
        });
        
        // Update button states
        gearButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.gear === gear) {
                btn.classList.add('active');
            }
        });
    }
    
    // Smooth value animation
    function animateValue(element, start, end, callback) {
        const duration = 800;
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeProgress;
            
            callback(current);
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        }
        
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
        animationFrame = requestAnimationFrame(animate);
    }
    
    // Add click handlers to gear buttons
    gearButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const gear = btn.dataset.gear;
            updateMetrics(gear);
            
            // Add visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
    
    // Initialize with Neutral
    updateMetrics('N');
}


