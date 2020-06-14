import $ from 'jquery';
import './pages/pug/includes/inputs/mask-input/jquery.maskedinput'

import './pages/js/Cards'
import './pages/js/Colors&type'
import './pages/js/Headers&footers'
import './pages/js/FormElements'

$(function ($) {
    $('.form__input_mask').mask('99.99.9999', { placeholder: "mm.dd.yyyy" });
});