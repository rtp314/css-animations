import "/plain-carousel.js";
import "/carousel-3d.js";

function convertRemToPixels(rem) {
	return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
