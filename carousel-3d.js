const carousel = document.getElementsByClassName("carousel-3d")[0];
const divs = Array.from(carousel.getElementsByClassName("item"));
let currentItemIndex = 0;

const scrollMax = carousel.scrollWidth - carousel.getBoundingClientRect().width;

divs.forEach((div, i) =>
	div.addEventListener("click", (e) => {
		divs.forEach((el, j) => {
			if (i === j) {
				currentItemIndex = j;
				const left = (scrollMax / divs.length) * (j + 1);
				carousel.scrollTo({ left: left, behavior: "smooth" });
				el.classList.add("select");
				el.classList.remove("left");
				el.classList.remove("right");
				el.style.zIndex = 100;
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
