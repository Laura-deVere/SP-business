class Slider {
	constructor() {
		this.sliders = document.getElementsByClassName('slider');
		this.sliderBtns = [].slice.call(document.getElementsByClassName('slider-btn-1'));
		this.currentSlider;
		this.currentSliderImages;
		this.currentSliderBtns;
		this.currentIndex = 0;
		this.events();
	}

	events() {
		this.splitArr();
		for (let i = 0; i < this.sliderBtns.length; i ++) {
			const btn = this.sliderBtns[i];
			for (let j = 0; j < btn.length; j++) {
				btn[j].addEventListener('click', (e) => {
					this.currentIndex = j;
					console.log(e.target.parentNode.parentNode);
					this.currentSlider = e.target.parentNode.parentNode;
					this.currentImages();
				});
			}
		}		
	}

	splitArr() {
		const result = [];
		const arrLength = this.sliderBtns.length;
		let index = 0;
		const cutArr = 4;

		for(index = 0; index < arrLength; index += cutArr) {
			let chunkArr = this.sliderBtns.slice(index, index+cutArr);
			result.push(chunkArr);
		}
		this.sliderBtns = result;
	}

	currentImages() {
		this.currentSliderImages = [].slice.call(this.currentSlider.getElementsByClassName('slider--img'));
		this.selectImage();
		this.setBtns();
	}

	setBtns() {
		this.currentSliderBtns = [].slice.call(this.currentSlider.getElementsByClassName('slider-btn-1'));
	}

	selectImage() {
		this.currentSliderImages[this.currentIndex].style.display = 'none' ? 'block' : 'none';
		this.currentSliderImages.forEach((el, i) => {
			if(i !== this.currentIndex) {
				el.classList.add('hidden');
			} else {
				this.currentSliderImages[this.currentIndex].classList.remove('hidden');
			}
		});
	}
}