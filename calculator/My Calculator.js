console.log('hello world');


function inputBox() {
	let	text = document.getElementById('textbox').value;
	return text;
}

function size(x) {
	if (x < 10) {
		return 'small';
	} else if ((x > 10) && (x < 19)) {
		return 'med';
	} else if (x >= 20){
		return 'large';
	}
}

function onButtonClicked() {
	console.log("I'm in the button click event");
	let number = parseInt(inputBox(), 10);
	let	num_size = 'The size of your input number is ' + size(number);
	console.log(num_size);
	console.log('10' + 10)
}

document.getElementById('mybutton').addEventListener('click', onButtonClicked);
