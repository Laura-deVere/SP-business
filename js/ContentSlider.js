class ContentSlider {
	constructor() {
		this.sliderContent = [].slice.call(document.getElementsByClassName('footer-slider-content'));
		this.sliderBtns = [].slice.call(document.getElementsByClassName('circle--med'));
		this.smSliderBtns = [].slice.call(document.getElementsByClassName('slider-btn-2'));
		this.currentIndex = 0;
		this.orange = '#FFAF30';
		this.gray = '#F4F4F4';
		this.black = '#000000';
		this.events();
	}

	events() {
		this.sliderBtns.forEach((el, i) => {
			el.addEventListener('click', (e) => {
				console.log(i);
				this.currentIndex = i;
				this.changeContent();
				this.changeColor(this.sliderBtns, this.gray, this.orange);
				this.changeColor(this.smSliderBtns, this.gray, this.black);
			});
		});
		this.changeColor(this.sliderBtns, this.gray, this.orange);
		this.changeColor(this.smSliderBtns, this.gray, this.black);
	}

	changeContent() {		
		this.sliderContent.forEach((el, i) => {
			if (this.currentIndex !== i) {
				this.sliderContent[i].classList.add('hidden');
			} else {
				this.sliderContent[this.currentIndex].classList.remove('hidden');
			}
		});
	}

	changeColor(arr, colorOne, colorTwo) {
		arr.forEach((el, i) => {
			if (this.currentIndex !== i) {
				el.style.backgroundColor = colorOne;
			} else {
				el.style.backgroundColor = colorTwo;
			}
		});
	}
}