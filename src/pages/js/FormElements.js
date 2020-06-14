import '../scss/FormElements.scss';
import '../pug/includes/inputs/jquery.maskInput';

$(document).ready(function () {
    $(".form__input_mask").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
})