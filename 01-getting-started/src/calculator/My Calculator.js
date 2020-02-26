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

	calculate: (a) => {
		let sum = 0;
		for (i = 0; i < a.length; i++) {
			if ((typeof a[i]) != 'string') {
				
			};
		};
		return (a);
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