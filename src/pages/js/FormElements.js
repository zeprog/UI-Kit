import '../scss/FormElements.scss';
import '../pug/includes/inputs/like-button/like-button';
import '../pug/includes/dropdowns/dropdown/dropdown';
import '../pug/includes/inputs/rate-button/rate-button';

$(document).ready(function () {
    $(".form__input_mask").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
});

