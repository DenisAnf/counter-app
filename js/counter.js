const daysValue = document.querySelector('[data-find="counterValue"]');
const btnAddOneDays = document.querySelector('[data-btn="addOneDays"]');
const btnAddTwoDays = document.querySelector('[data-btn="addTwoDays"]');
const btnResetDays = document.querySelector('[data-btn="resetDays"]');

const DAYS_INIITIAL_VALUE = 0;
let counterDay = DAYS_INIITIAL_VALUE;

daysValue.innerText = counterDay

btnAddOneDays.addEventListener('click', function () {
	counterDay = counterDay + parseInt(btnAddOneDays.dataset.day);
	daysValue.innerText = counterDay;
});

btnAddTwoDays.addEventListener('click', function () {
	counterDay = counterDay + parseInt(btnAddTwoDays.dataset.day);
	daysValue.innerText = counterDay;
});

btnResetDays.addEventListener('click', function () {
	counterDay = DAYS_INIITIAL_VALUE;
	daysValue.innerText = counterDay;
});
