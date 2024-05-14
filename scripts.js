// ナビゲーションバーをページ上部に固定する機能
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarOffsetTop = navbar.offsetTop;

    function onScroll() {
        if (window.scrollY >= navbarOffsetTop) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', onScroll);
});

// その他のJavaScript機能をここに追加
// 例: スムーズスクロール、ポートフォリオアイテムのホバーエフェクトなど

document.querySelector('.hamburger').addEventListener('click', function() {
    var navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.style.display = navbarLinks.style.display === 'block' ? 'none' : 'block';
});

// スムーズスクロール機能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ページトップに戻るボタンの機能
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});