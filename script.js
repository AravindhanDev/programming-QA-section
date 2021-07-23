/** @format */

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	console.log(question);
	question.addEventListener('mouseover', () => {
		question.classList.add('animate__pulse');
	});

	question.addEventListener('mouseout', () => {
		question.classList.remove('animate__pulse');
	});

	const btn = question.querySelector('.question-btn');

	btn.addEventListener('click', () => {
		question.classList.toggle('show-text');
	});
});
