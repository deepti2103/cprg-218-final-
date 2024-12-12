document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll("#slideshow .slide");
    let currentSlide = 0;
  
    function showNextSlide() {
      slides[currentSlide].classList.remove("active");
  
      currentSlide = (currentSlide + 1) % slides.length;
  
      slides[currentSlide].classList.add("active");
    }
    slides[currentSlide].classList.add("active");
    setInterval(showNextSlide, 2000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const ChristmasDate = new Date("December 31, 2024 00:00:00").getTime();
    const countdown = setInterval(function(){

      const now = new Date().getTime();
      const timeDifference = ChristmasDate - now;

      if (timeDifference <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Merry Christmas!";
        return;
      }
      else{
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
      `;
      }
    }, 1000);
  });