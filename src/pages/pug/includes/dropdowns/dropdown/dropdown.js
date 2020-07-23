let placeholder = document.querySelector('.dropdown__placeholder');
let options = document.querySelector('.dropdown__options');


placeholder.onclick = function () {
    placeholder.style.borderBottomLeftRadius = placeholder.style.borderBottomLeftRadius == '0px' ? '4px' : '0px';
    placeholder.style.borderBottomRightRadius = placeholder.style.borderBottomRightRadius == '0px' ? '4px' : '0px';
    options.style.display = options.style.display == 'block' ? 'none' : 'block';
};

(function ($) {
    $.fn.numberCount = function (countOptions) {

        let options = {
            'containerTag': 'div',
            'containerClass': 'dropdown__value',
            'minus': 'value_down',
            'plus': 'value_up',
            'btnTag': 'span'
        };

        options = $.extend(true, options, countOptions);

        let input = $(this);
        input.wrap('<' + options.containerTag + ' class=' + options.containerClass + '>');

        let inputParent = input.parent();
        inputParent.prepend('<' + options.btnTag + ' class=' + options.minus + '>');
        let minus = inputParent.find('.' + options.minus);
        inputParent.append('<' + options.btnTag + ' class=' + options.plus + '>');
        let plus = inputParent.find('.' + options.plus);
        let min = input.attr('min');
        let max = input.attr('max');
        let btnClear = $('.button-clear');
        let step = +input.attr('step');

        if (+input.val() <= +min) {
            minus.addClass('disabled');
        }

        /*if (+input.val() > +min) {
            btnClear.show();
        }*/

        minus.click(function () {
            let input = $(this).parent().find('input');
            let inputValue = input.val();


            if (+inputValue > +min) {
                input.val(+inputValue - 1);

                if (+input.val() === +min) {
                    input.prev('.' + options.minus).addClass('disabled');
                    btnClear.hide();
                }
                if (input.next('.' + options.plus).hasClass('disabled')) {
                    input.next('.' + options.plus).removeClass('disabled')
                }
            } else if (!min) {
                input.val(+inputValue - 1);
            }
        });

        plus.click(function () {
            let input = $('input', this.parentNode);
            let inputValue = +input.val();

            if (+inputValue < +max) {
                input.val(+inputValue + 1);
                btnClear.show();
                if (+input.val() === +max) {

                    input.next('.' + options.plus).addClass('disabled');

                };

                if (input.prev('.' + options.minus).hasClass('disabled')) {

                    input.prev('.' + options.minus).removeClass('disabled')

                };
            } else if (!max) {
                input.val(+inputValue + 1);
            }
        });
    }

}(jQuery));


$('.value__input').each(function () {

    $(this).numberCount();

});