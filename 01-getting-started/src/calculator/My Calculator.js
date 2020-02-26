//console.log('hello world');


function inputBox() {
	let	text = document.getElementById('textbox').value;
	return text;
}

const	calculator = {

	stringToNum: (s) => {
		let x = parseInt(s);
		return x;
	},

	doMath: (x, y, operator) => {
		// Takes two numbers and a math operator[string] and returns the result
		if (operator === '+') {
			return x + y;
		} else if (operator === '-') {
			return x - y;
		} else if (operator === '/') {
			return x / y;
		} else if (operator === '*') {
			return x * y;
		}
	},

	calculate: (a) => {
		let result = a[0];
		for (let i = 1; i < a.length; i++) {
		//	console.log(result);
			if ((typeof a[i]) === 'string') {
				result = calculator.doMath(result, a[i + 1], a[i]);
			};
		};
		return (result);
	}
}

function onButtonClicked() {
	console.log("I'm in the button click event");
	let number = parseInt(inputBox(), 10);
	let	num_size = 'The size of your input number is ' + size(number);
	console.log(num_size);
	console.log('10' + 10)
}

//document.getElementById('mybutton').addEventListener('click', onButtonClicked);

export default calculator;