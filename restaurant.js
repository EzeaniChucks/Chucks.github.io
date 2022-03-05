var decrease = document.getElementById('btnD');
var reset= document.getElementById('btnR');
var increase = document.getElementById('btnI');
var counter = document.getElementById('counter');


decrease.addEventListener('click', function(){
	counter.textContent= Number(counter.textContent) - 1;
});

reset.addEventListener('click', function(){
	counter.textContent = 0;
})

increase.addEventListener('click', function(){
	counter.textContent++;
})


// function color(rainbowColor){
// var yourPersonality;
// switch (rainbowColor) {
// 	case 'red':
// 		yourPersonality = `You're hot like mercury`;
// 		break;
// 	case 'orange':
// 		yourPersonality= 'You remind me of evening suns';
// 		break;
// 	case 'yellow':
// 		yourPersonality = 'Summer beaches are as beautiful as you';
// 	}
// return yourPersonality;
// };


// var clubChoice = prompt('Which club you dey support sef?');
// switch (clubChoice) {
// 	case 'Chelsea':
// 		alert('You sabi my brother');
// 		break;
// 	case 'Arsenal':
// 		alert('You no sabi anything.');
// 		break;
// 	default:
// 		alert('The club wey you dey support no dey England, my brother');
// };

//instantiation
class PlayerTemp {
	constructor (name, pageViews, hairColor) {
		this.name = name;
		this.hairColor = hairColor;
		this.pageviews = pageViews;
	}

	introduction (){
		alert(`Your player is ${this.name} with a shirt number of`
			+ `${this.pageViews} and a hair color of ${this.hairColor}`)
	}
}

class PlayerTempHair extends PlayerTemp {
	constructor (name, hairColor){
		super (name, hairColor);
	}

	infoAboutPage(){
		alert(`${this.name}, you have a hair color of ${this.hairColor}`)
	}
}

class PlayerTempPageViews extends PlayerTemp {
	constructor (name, pageViews){
		super (name, pageViews);
	}

	infoAboutPage(){
		alert(`${this.name}, your page has ${this.pageViews} views`)
	}
}

const player1H = new PlayerTempHair ('Damilola', 'Black');
const player1V = new PlayerTempPageViews ('Damilola', 9);
