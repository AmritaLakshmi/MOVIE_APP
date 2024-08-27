const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter =0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter++;
        if(itemNumber - (4+clickCounter) + (4 - ratio)>0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;  
        }else{
            movieList[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
             
    });
});


//TOGGLE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle");

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active")
});




    document.addEventListener('DOMContentLoaded', function() {
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        const totalItems = carouselItems.length;
        const intervalTime = 5000; // 5 seconds

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }

        function moveToNextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        setInterval(moveToNextSlide, intervalTime);
    });

