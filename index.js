window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const homeButton = document.querySelector(".home-button");
    
    const buttones= document.querySelectorAll(".buttones button")

    if (window.scrollY > 10) {
         header.style.backgroundColor = "white"; // 스크롤 시 흰색 배경
         header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // 그림자 효과 추가
        
         homeButton.style.color="#453a33";
         buttones.forEach(function(button) {
            button.style.color = "#453a33";  // 버튼 텍스트 색상 변경
        });
    } else {
        header.style.backgroundColor = "transparent"; // 원래대로 투명
        header.style.boxShadow = "none";
        homeButton.style.color="white";
        buttones.forEach(function(button) {
           button.style.color = "white";  // 버튼 텍스트 색상 변경
       });
    }
});