const two = 2;
const three = 3;
const five = 5;
const eight = 8;
const nine = 9;

//Task 0 
function getNumbers(stringToSplit) {
  let splittedString = stringToSplit.split(''); 
  const numArray = [];
  for (let i = 0; i < splittedString.length; i++) {
    if (parseFloat(splittedString[i])) {
      numArray.push(parseFloat(splittedString[i])); 
    }
  }
  return numArray;
}
console.log(getNumbers('here1are2some3numbers4'));
console.log(getNumbers('n1um3ber95'));


// Task 1
function findTypes(...args) {
  let defineTypes = {};
	for (let i=0; i < args.length; i++) {
    if(defineTypes[typeof args[i]]) {
      defineTypes[typeof args[i]] += 1;
    } else {
      defineTypes[typeof args[i]] = 1
    }
	}
	return defineTypes;
}

findTypes('number');
findTypes(null, five, 'hello');

//Task 2
function executeforEach(someArr, someFunc) {
  for (let i = 0; i < someArr.length; i++){
    someFunc(someArr[i]);
  }
}

executeforEach([1,two,three], function(el) {
console.log(el + nine) 
});

//Task 3
function mapArray(someArr, someFunc) {
	let mappedArr = [];
	executeforEach(someArr, function(el) {
		mappedArr.push(someFunc(el))
	});
	return mappedArr;
}

mapArray([two, five, eight], function(el) {
	return el + three 
});

//Task 4 
function filterArray(someArr, someFunc) {
	let filtered = [];
	executeforEach(someArr, function(el) {
		if (someFunc(el))	{
			filtered.push(el)
		}
	});
	return filtered;
}

filterArray([two, five, eight], function(el) { 
	return el > three
})

//Task 5
function showFormattedDate(someDate) {
	const letteredMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ];
	const getDate = someDate.getDate();
	const getMonth = letteredMonth[someDate.getMonth()];
	const getYear = someDate.getFullYear();

	return `Date: ${getMonth} ${getDate} ${getYear}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task 6
function canConvertToDate(someDate) {
  return !!Date.parse(someDate);
}

canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

//Task 7
function daysBetween(firstDateString, secondDateString ) {
  const firstDate = Date.parse(firstDateString);
  const secondDate = Date.parse(secondDateString);
  const toSeconds = 1000;
  const toMinutesOrHours = 60;
  const toDays = 24;
  let difference = Math.abs(Math.round((firstDate - secondDate) / 
    (toSeconds * toMinutesOrHours * toMinutesOrHours * toDays)));
  return difference;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

//Task 8
const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

function getAmountOfAdultPeople(data) {
  let personsBirthday = [];
  let getAge = [];
  const adult = 18;
  const year = 365;
  const currentDate = new Date(Date.now()).toLocaleString();
  for (let i = 0; i< data.length; i++) {
    personsBirthday.push(data[i].birthday);
    getAge.push(daysBetween(currentDate, personsBirthday[i])/year);    
    getAge[i] = Math.round(getAge[i]);
  }
	const adultsAmount = filterArray(getAge, function(el) {
		return el > adult;
	});
return adultsAmount.length;
}

getAmountOfAdultPeople(data);

//Task 9
function keys(someObj) {
  const objectKeys = [];
  for (let key in someObj) {
    if (someObj.hasOwnProperty(key)) {
      objectKeys.push(key);
    }
  }
  return objectKeys;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//Task 10
function values(someObj) {
  const objectValues = [];
  for (let key in someObj) {
    if (someObj.hasOwnProperty(key)) {
      objectValues.push(someObj[key]);
    }
  }
  return objectValues;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});
