(function ($) {
    $.fn.maskInput = function () {
        return this.each(function () {
            $("#form__input_mask").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
        });
    }
})(jQuery)

