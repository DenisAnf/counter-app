let counterBtn = document.querySelector('.js-btn');
let counterValue = document.querySelector('.js-value');


const COUNTER_INIITIAL_VALUE = 0;
let counterDay = 0;

counterBtn.addEventListener('click', function () {
	day = day + 1;
	counterValue.innerText = day;
});


