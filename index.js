let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();


 let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
};




/* let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('schlecht');
		i--;
	}
	i++;
} while (i < 2); */

/* let i = 0;

while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('schlecht');
		i--;
	}
	i++;
} */



function chooseExpenses() {
	for(let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		
		if((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			console.log('schlecht');
			i--;
		}
	};
}

chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert('Jeden Tag Budget: ' + appData.moneyPerDay);
}

detectDayBudget();
detectLevel();


function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('minimales niveao');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('mittleres Niveai');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Höhes NIveao');
	} else {
		console.log('Unerwatetes Fehler');
	}
}



function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?'),
			percent = +prompt('Под какой процент');

		appData.monthIncome = save/100/12 * percent;
		alert('Доход в месяц: ' + appData.monthIncome.toFixed(2));
	}
}

checkSavings();


let exCount = 1;
function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let questOptExpens = prompt('Статья необязательных расходов?');
		appData.optionalExpenses[i] = questOptExpens;
		console.log(appData.optionalExpenses);
	}
}

chooseOptExpenses();