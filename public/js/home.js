//Navbar

const navbar = document.querySelector(".navbar");
window.addEventListener(`scroll`, () => {
	if (scrollY >= 180) {
		navbar.classList.add("bg");
	} else {
		navbar.classList.remove("bg");
	}
});

//Image Collage

const images = document.querySelectorAll(".collage-image");

images.forEach((image) => {
	image.addEventListener("mouseover", () => {
		images.forEach((img) => {
			if (img !== image) {
				img.style.filter = "blur(10px)";
			}
		});
	});

	image.addEventListener("mouseout", () => {
		images.forEach((img) => {
			img.style.filter = "none";
		});
	});
});
