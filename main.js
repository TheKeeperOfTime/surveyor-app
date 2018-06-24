let output = document.querySelector('#output');

function convert() {
	let option1 = document.querySelector('#dropdown');
	let option2 = document.querySelector('#dropdown2');

	let input = document.querySelector('#input');
	let numberInput = document.querySelector('#number-input');

	if(option1.value == 'inches' && option2.value == 'cent') {
		document.querySelector('#output-text').innerHTML = numberInput.value * 2.54;
	} else if(option1.value == 'inches' && option2.value == 'feet') {
		document.querySelector('#output-text').innerHTML = numberInput.value / 12;
	} else if(option1.value == 'inches' && option2.value == 'yards') {
		document.querySelector('#output-text').innerHTML = numberInput.value / 36;
	} else if(option1.value == 'inches' && option2.value == 'miles') {
		document.querySelector('#output-text').innerHTML = numberInput.value / 63360;
	} else if(option1.value == 'inches' && option2.value == 'kilometers') {
		document.querySelector('#output-text').innerHTML = numberInput.value / 160934;
	} else if(option1.value == 'inches' && option2.value == 'link') {
		document.querySelector('#output-text').innerHTML = option1.value;
	}
}