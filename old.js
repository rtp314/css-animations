function convertRemToPixels(rem) {
	return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const carousel = document.getElementsByClassName("plain-carousel")[0];
const divs = Array.from(carousel.getElementsByClassName("item"));
const carouselPosition = document.getElementsByClassName("carousel-position")[0];
carouselPosition.innerText = divs.length;

const scrollMax = carousel.scrollWidth - carousel.getBoundingClientRect().width;
// console.log(scrollMax);

divs.forEach((div, i) =>
	div.addEventListener("click", (e) => {
		divs.forEach((el, j) => {
			if (i === j) {
				// const left = (scrollMax / divs.length) * (j + 1);
				el.classList.add("select");
				el.classList.remove("left");
				el.classList.remove("right");
				el.style.zIndex = 100;
				el.scrollIntoView({ behavior: "smooth", inline: "center" });
				carouselPosition.innerText = j;
			} else if (j < i) {
				el.classList.remove("select");
				el.classList.add("left");
				el.classList.remove("right");
				el.style.zIndex = j;
			} else {
				el.classList.remove("select");
				el.classList.remove("left");
				el.classList.add("right");
				el.style.zIndex = 100 - j;
			}
		});
	})
);

document.getElementById("test-button").addEventListener("click", () => {
	carousel.scrollTo(divs[1].offsetLeft + 40, 0);
	console.log(divs[0].offsetLeft);
});
