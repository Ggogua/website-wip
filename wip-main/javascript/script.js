document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        rewind     : true,
        type       : 'fade',
        autoplay   : true,  
        interval   : 3000,
        pagination: false,
    }).mount();
});


document.addEventListener('DOMContentLoaded', () => {
    const inputFields = document.querySelectorAll(".input-field");

    inputFields.forEach(inputField => {
        inputField.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation(); 

            inputField.classList.toggle('style');

            inputFields.forEach(otherInputField => {
                if (otherInputField !== inputField) {
                    otherInputField.classList.remove('style');
                }
            });
        });
    });


    document.addEventListener('click', () => {
        inputFields.forEach(inputField => {
            inputField.classList.remove('style');
        });
    });
});


