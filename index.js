let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};




let i = 0;
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
} while (i < 2);

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


/* for(let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	
	if((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('schlecht');
		i--;
	}
}; */

appData.moneyPerDay = appData.budget / 30;

alert('Jeden Tag Budget: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log('minimal niveao');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('mittleres Niveai');
} else if (appData.moneyPerDay > 2000) {
	console.log('Höhes NIveao');
} else {
	console.log('Unerwatetes Fehler');
};