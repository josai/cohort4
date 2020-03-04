
function inputBox() {
	let	text = document.getElementById('textbox').value;
	return text;
}


const	taxCalculator = {
    
    crunchNumbers: (income, bracket, taxPercent) => {
        let remainder = 0;
        if (income > bracket) {
            remainder = (income - bracket) * (1 - taxPercent);
            income = income - (income - bracket);
        }
        return income;
    },

    calculate: (income) => {
        let net = income;
        let remainder = 0;
        if (income > 214368) {
            remainder = (income - 214368) * (1 - 0.33);
            income = income - (income - 214368);
        }
        if (income > 150473) {
            remainder = remainder + ((income - 150473) * (1 - 0.29));
            income = income - (income - 150473);
        }
        if (income > 53404) {
            remainder = remainder + ((income - 53404) * (1 - 0.26));
            income = income - (income - 53404);
        }
        if (income > 48534) {
            remainder = remainder + ((income - 48534) * (1 - 0.205));
            income = income - (income - 48534);
        }
        remainder = net - (remainder + (income * (1 - 0.15)));
        return parseFloat(remainder);
    }
}

export default taxCalculator;