import $ from 'jquery';
import './pages/pug/includes/inputs/jquery.maskedinput'

import './pages/js/Cards'
import './pages/js/Colors&type'
import './pages/js/Headers&footers'
import './pages/js/FormElements'
import './pages/pug/includes/inputs/jquery.maskInput'

$(function ($) {
    $('.form__input_mask').mask('99.99.9999', { placeholder: "mm.dd.yyyy" });
});