let likeClick = document.querySelector('.like__button');
let likeCountStr = document.querySelector('.like__count');
let like = document.querySelectorAll('.like');
let likeIconDefault = document.querySelector('.like__icon_default');
let likeIconActive = document.querySelector('.like__icon_active');

document.querySelectorAll('.like').forEach((element) => {
    element.onclick = function (e) {
        let likeCount = Number.parseInt(likeCountStr.innerHTML);
        if (e.target.tagName == 'LABEL') return;
        console.log(likeCount);
        e.target.tagName == 'LABEL' ? console.log('отработало') : '';
        console.log(e.target)
        let dataAttr = likeCountStr.getAttribute('data-like')
        if (dataAttr == 'like') {
            likeCount++;
            likeCountStr.setAttribute('data-like', 'unlike');
            likeIconDefault.style.opacity = likeIconDefault.style.opacity == '0' ? '1' : '0';
            likeIconActive.style.opacity = likeIconActive.style.opacity == '1' ? '0' : '1';
        } else {
            likeCount--;
            likeCountStr.setAttribute('data-like', 'like')
            likeIconDefault.style.opacity = likeIconDefault.style.opacity == '1' ? '0' : '1';
            likeIconActive.style.opacity = likeIconActive.style.opacity == '0' ? '1' : '0';
        }
        likeCountStr.innerHTML = likeCount;
    };
})
/*
[].forEach.call(like, function (el) {

})


like.onclick = function (e) {
    let likeCount = Number.parseInt(likeCountStr.innerHTML);
    if (e.target.tagName == '.like__count') return;
    console.log(likeCount);
    e.target.className == '.like__count' ? console.log('отработало') : '';
    console.log(e.target)
    let dataAttr = likeCountStr.getAttribute('data-like')
    if (dataAttr == 'like') {
        likeCount++;
        likeCountStr.setAttribute('data-like', 'unlike');
        likeIconDefault.style.opacity = likeIconDefault.style.opacity == '0' ? '1' : '0';
        likeIconActive.style.opacity = likeIconActive.style.opacity == '1' ? '0' : '1';
    } else {
        likeCount--;
        likeCountStr.setAttribute('data-like', 'like')
        likeIconDefault.style.opacity = likeIconDefault.style.opacity == '1' ? '0' : '1';
        likeIconActive.style.opacity = likeIconActive.style.opacity == '0' ? '1' : '0';
    }
    likeCountStr.innerHTML = likeCount;
};

document.addEventListener('click', function (event) {
    if ()
}*/