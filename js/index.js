function init() {
    import('https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js');
    import('./index.products-carousel.js');
    import('./timer.js');
    import('./products-service.js');
    import('./cart.js');
    import('./product-list.js')
    import('./alert.js')
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});