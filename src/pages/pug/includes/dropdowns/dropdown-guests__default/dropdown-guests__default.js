let placeholder = document.querySelector('.dropdown-guests__placeholder');
let options = document.querySelector('.dropdown-guests__options');
let btnNum = document.querySelector('span');
let inputAdult = document.querySelector('.input-adult');
let inputChild = document.querySelector('.input-child');
let inputBaby = document.querySelector('.input-baby');
let btnClear = document.querySelector('.button-clear');


placeholder.onclick = function () {
    //options.style.maxHeight = options.style.maxHeight == '131px' ? '0px' : '131px';
    options.style.opacity = options.style.opacity == '1' ? '0' : '1';
};

(function ($) {
    $('.dropdown-guests__value').on('click', 'span', function () {
        var input = $('input', this.parentNode),
            val = +input.val() || 0;
        input.val(val += this.className == 'value_down' ? val > 0 ? -1 : 0 : 1);
    });
}(jQuery));

btnNum.onclick = function () {
    if (inputAdult == 0 && inputChild == 0 && inputBaby == 0) {
        btnClear.style.opacity = '0';
        btnClear.style.cursor = 'default';
    } else if (inputAdult > 0 || inputChild == 0 || inputBaby == 0) {
        btnClear.style.opacity = '1';
        btnClear.style.cursor = 'pointer';
    };
};
