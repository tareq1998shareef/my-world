// Start game slider
$(document).ready(function () {
  $(".gameSlider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});


// End game slider
// Start books
//Start toggle active
let all = document.getElementById("all");
let religious = document.getElementById("religious");
let history = document.getElementById("history");
let scientific = document.getElementById("scientific");
all.onclick = function () {
  all.classList.add("active");
  religious.classList.remove("active");
  history.classList.remove("active");
  scientific.classList.remove("active");
  filterBooks("all");
};
religious.onclick = function () {
  religious.classList.add("active");
  all.classList.remove("active");
  history.classList.remove("active");
  scientific.classList.remove("active");
  filterBooks("religious");
};
history.onclick = function () {
  history.classList.add("active");
  all.classList.remove("active");
  religious.classList.remove("active");
  scientific.classList.remove("active");
  filterBooks("history");
};
scientific.onclick = function () {
  scientific.classList.add("active");
  all.classList.remove("active");
  religious.classList.remove("active");
  history.classList.remove("active");
  filterBooks("scientific");
};
//End toggle active
// Start fllter books
function filterBooks(category) {
  let books = document.getElementsByClassName("book");

  // إظهار كل الكتب إذا تم النقر على زر "كل الكتب"
  if (category === "all") {
    for (let i = 0; i < books.length; i++) {
      books[i].style.display = "block";
    }
  } else {
    // إخفاء جميع الكتب
    for (let i = 0; i < books.length; i++) {
      books[i].style.display = "none";
    }

    // إظهار الكتب المناسبة بناءً على الفئة المحددة
    let filteredBooks = document.getElementsByClassName(category);
    for (let i = 0; i < filteredBooks.length; i++) {
      filteredBooks[i].style.display = "block";
    }
  }
}
// End fllter books
// End books



/* Start Tourist places */
function flipBox(box) {
  box.classList.toggle("flipped");
}
/* End Tourist places */
