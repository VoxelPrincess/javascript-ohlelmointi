(function (window, document, undefined) {
    const priceBanner = document.querySelector('.price-banner');
    const pancakeType = document.querySelector('#type');
    const checkboxes = document.querySelectorAll('.customization-section input[type="checkbox"]');
    const outputs = document.querySelectorAll('.total-price');

    function blinkBanner() {
        priceBanner.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.05)' },
                { transform: ' scale(1)' },
            ],
            {
                duration: 100,
                iterations: 1,
            }
        );
    }

    function calculatePrice() {
        let sum = Number(pancakeType?.value || 5);

        checkboxes?.forEach(checkbox => {
            if (checkbox.checked) {
                sum += Number(checkbox.value);
            }
        });

        outputs?.forEach(output => {
            output.textContent = sum;
        });

        blinkBanner();
    }

    pancakeType?.addEventListener('change', calculatePrice);

    checkboxes?.forEach(checkbox => {
        checkbox.addEventListener('change', calculatePrice);
    });
})(window, document);