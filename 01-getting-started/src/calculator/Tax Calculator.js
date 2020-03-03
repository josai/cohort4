
function inputBox() {
	let	text = document.getElementById('textbox').value;
	return text;
}


const	taxCalculator = {
    
    crunchNumbers: (x) => {
        let net = x;
        let remainder = 0;
        if (x > 214368) {
            remainder = (x - 214368) * 0.66;
            x = x - (x - 214368);
        }
        if (x > 150473) {
            remainder = remainder + ((x - 150473) * 0.71);
            x = x - (x - 150473);
        }
        if (x > 53404) {
            remainder = remainder + ((x - 53404) * 0.74);
            x = x - (x - 53404);
        }
        if (x > 48534) {
            remainder = remainder + ((x - 48534) * 0.795);
            x = x - (x - 48534);
        }
        remainder = net - (remainder + (x * 0.85));
        return parseFloat(remainder.toFixed(8));
    },

    calculate: (income) => {
        return taxCalculator.crunchNumbers(income);
    }
}

export default taxCalculator;