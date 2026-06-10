// 選取漢堡按鈕與導覽列
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

// 監聽點擊事件
hamburgerBtn.addEventListener('click', function() {
    // toggle 的作用是：如果沒有 active 就加上去，如果已經有就移除
    navMenu.classList.toggle('active');
});