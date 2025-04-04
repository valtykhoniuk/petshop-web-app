const response = await fetch("api/products.json");
const products = await response.json();

function generateSlides(products) {
    const slides = products.map(product => `
        <div class="product-slide">
            <article class="buyable_products__card">
                <img class="buyable_products__image" src="${product.image}" alt="${product.title}">
                <h2 class="buyable_products__card-title">${product.title}</h2>
                <p class="buyable_products__price">$ ${product.price}</p>
                <a class="buyable_products__button" href="#">Add to cart</a>
            </article>
        </div>
    `);
    return slides;
}

// Створюємо слайди
const slides = generateSlides(products);

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.product-carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];
    
    // Для ширших екранів додаємо додаткові слайди
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

renderSlide();

const btnNext = document.querySelector('.product-carousel__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.product-carousel__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);
