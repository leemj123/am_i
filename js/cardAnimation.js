document.getElementById("close-card").addEventListener("click", closeCard);
document.getElementById("open-card").addEventListener("click", function(event) {
    event.stopPropagation(); // 이벤트 전파 차단
    openCard();
});
const card = document.getElementById("card");
// 모달 열기 함수
function openCard() {
    const cardContent = document.getElementById("card-content");
    switch (activeSlideIndex) {
        case 3: cardContent.style.backgroundColor = '#FFD9B3'; break;
        case 2: cardContent.style.backgroundColor = 'rgb(117,117,117)'; break;
        case 1: cardContent.style.backgroundColor = '#A3DA8D'; break;
        case 0: cardContent.style.backgroundColor = '#fa6da9'; break;
        default: cardContent.style.backgroundColor = '#ece5e3'
    }
    card.classList.add("show");
    card.classList.remove("hide"); // hide 클래스 제거
}
function reloadCard() {
    if ( card.classList.contains('show') ) {
        openCard()
    }
}
// 모달 닫기 함수
function closeCard() {
    card.classList.add("hide"); // hide 클래스 추가
    setTimeout(() => {
        card.classList.remove("show"); // 애니메이션 후에 show 클래스 제거
    }, 400); // 애니메이션 시간이 0.4초이므로 같은 시간으로 설정
}

document.addEventListener('click', function(event) {
    const cardContent = document.getElementById('card-content');
    if (card.classList.contains('show') && !cardContent.contains(event.target)) {
        closeCard()
    }
});

