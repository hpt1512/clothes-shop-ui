let user_menu = document.getElementById('user-menu');
let account = document.getElementById('account');
let btnClose = document.getElementById('btnClose');
let app = document.querySelector('.app');
let productDetail = document.querySelector('.productDetail');


account.addEventListener('click',function() {
    user_menu.classList.add('open-user-menu');
    app.style.opacity = 0.8;
});
btnClose.addEventListener('click',function() {
    user_menu.classList.remove('open-user-menu');
    app.style.opacity = 1;
});

productDetail.addEventListener('click',function() {
    window.location = "./detail.html";
});
