const image = document.querySelectorAll(".gallery-img");

image.forEach (image => {
    image.addEventListener("click", () => {
        image.classList.toggle("enlarged");
    });
});