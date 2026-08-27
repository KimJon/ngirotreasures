const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const heroRegex = /<section class="hero-section min-h-screen flex items-center pt-20">\s*<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">/;

const newHero = `<section class="hero-section relative min-h-screen flex items-center pt-20 overflow-hidden">
        <!-- Slider Backgrounds -->
        <div id="hero-slider" class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100 hero-slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('./ngiromountain.jpg');"></div>
            <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-0 hero-slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('./honey presentation.jpg');"></div>
            <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-0 hero-slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('./ngiro stalls.jpeg');"></div>
            <div class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-0 hero-slide" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('./ngiro honey display.jpeg');"></div>
        </div>

        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">`;

content = content.replace(heroRegex, newHero);

// Now add the JS slider logic
const jsRegex = /document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*renderProducts\(\);\s*\}\);/;
const newJs = `document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            
            // Hero Slider Logic
            const slides = document.querySelectorAll('.hero-slide');
            if(slides.length > 0) {
                let currentSlide = 0;
                setInterval(() => {
                    slides[currentSlide].classList.remove('opacity-100');
                    slides[currentSlide].classList.add('opacity-0');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.remove('opacity-0');
                    slides[currentSlide].classList.add('opacity-100');
                }, 4000);
            }
        });`;

content = content.replace(jsRegex, newJs);

// Remove the old CSS background from .hero-section to avoid double loading or conflicts
content = content.replace(/\.hero-section\s*\{[\s\S]*?background-attachment:\s*fixed;\s*\}/, '.hero-section {\n            /* Background now handled by JS slider */\n        }');

fs.writeFileSync('index.html', content, 'utf8');
