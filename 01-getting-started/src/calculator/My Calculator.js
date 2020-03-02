
function inputBox() {
	let	text = document.getElementById('textbox').value;
	return text;
}

const	calculator = {
	mathList:[],

	stringToNum: (s) => {
		let x = parseInt(s);
		return x;
	},

	recurseBuildMath: (a) => { // TODO: rename param
		// Composites individual elements of an array into a math expression using recursion.
		if ((typeof a[0] === 'number') && (typeof a[1] === 'number')) {
			let x = [parseInt(a[0].toString() + a[1].toString())];
			return calculator.recurseBuildMath(x.concat(a.slice(2, a.length)));
		} else if (typeof a[1] === 'string') {
			let x = a.slice(0, 2);
			x = x.concat(calculator.recurseBuildMath(a.slice(2, a.length)));
			return x;
		};
		return a;
	},

	parseInput: (a) => { // names
		// Makes user inputs safe for calculator functions.
		console.log(a)
		if (typeof a[a.length - 1] === 'string' ) {
			a = a.slice(0, a.length - 1);
		};
		if (typeof a[0] === 'string'){
			a = a.slice(1, a.length);
		};
		return calculator.recurseBuildMath(a);
	},

	doArithmetic: (x, y, operator) => { // fix name
		// Takes two numbers and a math operator[string] and returns the result.
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

	calculate: () => {
		//a = calculator.parseInput(calculator.mathList);
		a = calculator.parseInput(calculator.mathList);
		console.log(a);
		let result = a[0];
		for (let i = 1; i < a.length; i++) {
			if ((typeof a[i]) === 'string') {
				result = calculator.doArithmetic(result, a[i + 1], a[i]);
			};
		};
		console.log(result);
		calculator.mathList = [];
		calculator.numToMathList(result);
		calculator.updateScreen(calculator.mathList);
		return (result);
	},

	updateScreen: (numbers) => {
		document.getElementById('calculatorScreen').innerHTML = ""; // clear screen
		let screenDiv = document.getElementById('calculatorScreen');
		let text = numbers.toString();
		let content = document.createTextNode(text);
		screenDiv.appendChild(content);
	},

	addInput: (user_input)  => {
		if (user_input[user_input.length - 1]) {
			
		}
		calculator.mathList.push(user_input)
		console.log(calculator.mathList);
		calculator.updateScreen(calculator.mathList);
		return 0;
	},

	clearInput: () => {
		calculator.mathList = [];
		calculator.updateScreen([]);
	},

	numToMathList: (x) => {
		calculator.clearInput();
		x = x.toString().split();
		x = x.map(Number);
		console.log('heerrre');
		console.log(x)
		calculator.mathList = x;
	}

};

let calc = calculator;



//document.getElementById('one').addEventListener('click', c.addInput(1));
//document.getElement
//var but = document.getElementById('one');
//but.addEventListener('onclick', console.log('you did it!'));




//export default calculator;