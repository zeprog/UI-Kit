let placeholder = document.querySelector('.dropdown-guests__placeholder');
let options = document.querySelector('.dropdown-guests__options');

placeholder.onclick = function () {
    options.style.maxHeight = options.style.maxHeight == '131px' ? '0px' : '131px';
    options.style.opacity = options.style.opacity == '1' ? '0' : '1';
};

