let placeholder = document.querySelector('.dropdown-guests__placeholder');
let options = document.querySelector('.dropdown-guests__options');


placeholder.onclick = function () {
    options.style.maxHeight = options.style.maxHeight == '131px' ? '0px' : '131px';
    options.style.opacity = options.style.opacity == '1' ? '0' : '1';
};

(function ($) {
    $('.dropdown-guests__value').on('click', 'span', function () {
        var inp = $('input', this.parentNode),
            val = +inp.val() || 0;
        inp.val(val += this.className == 'value_down' ? val > 0 ? -1 : 0 : 1);
    });
}(jQuery));