let rating = document.querySelector('.rating'),
    ratingItem = document.querySelectorAll('.rating_item');

rating.onclick = function (e) {
    let target = e.target;
    if (target.classList.contains('rating_item')) {
        removeClass(ratingItem, 'current_active')
        target.classList.add('active', 'current_active');

    }
}

rating.onmouseover = function (e) {
    let target = e.target;
    if (target.classList.contains('rating_item')) {
        removeClass(ratingItem, 'active')
        target.classList.add('active');
        mouseOverActiveClass(ratingItem)
    }
}

rating.onmouseout = function () {
    addClass(ratingItem, 'active');
    mouseOutActiveClass(ratingItem)
}

function removeClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.remove(arguments[j])
        }
    }
}

function addClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        for (let j = 1; j < arguments.length; j++) {
            ratingItem[i].classList.add(arguments[j])
        }
    }
}

function mouseOverActiveClass(arr) {
    for (let i = 0, iLen = arr.length; i < iLen; i++) {
        if (arr[i].classList.contains('active')) {
            break;
        } else {
            arr[i].classList.add('active')
        }
    }
}

function mouseOutActiveClass(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].classList.contains('current_active')) {
            break;
        } else {
            arr[i].classList.remove('active')
        }
    }
}