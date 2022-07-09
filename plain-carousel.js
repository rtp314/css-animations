const carousel = document.getElementsByClassName("plain-carousel")[0];
const divs = Array.from(carousel.getElementsByClassName("item"));

divs.forEach((div, i) =>
	div.addEventListener("click", (e) => {
		divs.forEach((el, j) => {
			if (i === j) {
				el.classList.add("select");
				el.style.zIndex = 2;
				el.scrollIntoView({ behavior: "smooth", inline: "center" });
			} else if (j < i) {
				el.classList.remove("select");
				el.style.zIndex = j;
			} else {
				el.classList.remove("select");
				el.style.zIndex = 100 - j;
			}
		});
	})
);
