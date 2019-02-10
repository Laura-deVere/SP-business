class Navigation {
	constructor() {
		this.sideBarEls = [].slice.call(document.getElementsByClassName('side-nav-els'));
		this.mainNavEls = [].slice.call(document.getElementsByClassName('main-nav-els'));
		this.sections = [].slice.call(document.getElementsByClassName('section'));
		this.allEls = [this.mainNavEls, this.sideBarEls, this.sections];
		this.orange = '#FFAF30';
		this.white = '#fff';
		this.selectedIndex;
		this.events();
	}

	events() {
		this.mainNavEls.forEach((el, i) => {
			el.addEventListener('click', e => {
				this.selectedIndex = i;
				this.changeColors(i);
				this.scrollToTop(i);
			});
		});	

		setTimeout(
			window.addEventListener('scroll', () => {
				this.sections.forEach((el, currIndex) => {
					const visible = this.isInView(el);
					if(visible) {
						this.changeColors(currIndex);
					} else {
						this.resetColors(currIndex);
					}					
				});
			})
		, 10000);
		
	}

	// changeFontColor(i) {
	// 	this.mainNavEls[i].style.color = this.orange;
	// 	this.mainNavEls.forEach((el, currIndex) => {
	// 		if (currIndex !== i) {
	// 			el.style.color = this.white;
	// 		}
	// 	});
	// }

	// changeBackgroundColor(i) {
	// 	this.sideBarEls[i].firstElementChild.style.backgroundColor = this.orange;
	// 	this.sideBarEls.forEach((el, currIndex) => {
	// 		if (currIndex !== i) {
	// 			el.firstElementChild.style.backgroundColor = 'transparent';
	// 		}
	// 	});
	// }

	changeColors(i) {
		this.mainNavEls[i].style.color = this.orange;
		this.sideBarEls[i].firstElementChild.style.backgroundColor = this.orange;

		this.sideBarEls.forEach((el, currIndex) => {
			if (currIndex !== i) {
				// el.firstElementChild.style.backgroundColor = 'transparent';
				this.resetColors(currIndex);
			}
		});

		this.mainNavEls.forEach((el, currIndex) => {
			if (currIndex !== i) {
				this.resetColors(currIndex);
			}
		});
	}

	scrollToTop(i) {
		const el = this.sections[i];
		window.scrollTo({
			'behavior' : 'smooth',
			'left' : 0,
			'top' : el.offsetTop - 125
		});
	}

	isInView(el) {
		const div = el.getBoundingClientRect();
		const elTop = div.top;
		const elBottom = div.bottom;

		const isVisible = elTop < window.innerHeight && elBottom >= 0;

		return isVisible;
	}

	resetColors(i) {
		this.mainNavEls[i].style.color = this.white;
		this.sideBarEls[i].firstElementChild.style.backgroundColor = 'transparent';
	}
}