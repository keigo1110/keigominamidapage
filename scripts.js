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
