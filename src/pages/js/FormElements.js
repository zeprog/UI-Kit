import '../scss/FormElements.scss'

$(document).ready(function () {
    $(".form__input_mask").mask("99.99.9999", { placeholder: "дд.мм.гггг" });
})