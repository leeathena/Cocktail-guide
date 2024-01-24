const settings = {
	async: true,
	crossDomain: true,
	url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php?iid=552',
	method: 'GET',
	headers: {
		//api key from site, not my key
    'X-RapidAPI-Key': 'd1c89fb8dbmshbf36e61cb9e9fa9p12e6d5jsn4ab5d76df507',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

//Dynamic Parameters: If we want to make the search parameter dynamic (not hardcoded as 'vodka'), you can replace it with a variable. For example:

const searchKeyword = 'vodka';
const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
  params: { s: searchKeyword },
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
};