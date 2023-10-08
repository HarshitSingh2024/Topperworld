const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
var crsrblur = document.querySelector("#cursor-blur")

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = 'black';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


var circle = document.querySelector("#circle");
var a = document.querySelectorAll("#header a");

a.forEach(frame => {
	frame.addEventListener("mousemove", function (dets) {
		gsap.to(circle, {
			scale: 4
		})

		gsap.to(frame.children, {
			color: "crimson",
			dutarion: .4
		})
	})
	frame.addEventListener("mouseleave", function (dets) {
		gsap.to(circle, {
			scale: 1
		})

		gsap.to(frame.children, {
			color: "white",
			dutarion: .4,
		})
	})
})

window.addEventListener("mousemove", function (dets) {
	gsap.to(circle, {
		x: dets.clientX,
		y: dets.clientY,
		dutarion: .3,
		ease: Expo
	})
})

