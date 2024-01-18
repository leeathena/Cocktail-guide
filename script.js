// COCKTAIL APIs

/// API for Drinks Names and photos
// will need to change "searchInput" in the url to a variable which is linked to the search term
const searchInput = "vodka";

let url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${searchInput}`;
let cOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dd65562ce6msh0d8441fffb5ded0p19d99cjsn8a649b85763c',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

// //////

// We then created an Fetch call
fetch(url, cOptions)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);


    // below isolates a specific drink object -- data.drinks[i].strDrink -- to create a drinkName array)
    let drinkName = [];

    for (let i = 0; i < data.drinks.length; i++) {
      // drinkName = (data.drinks[i].strDrink)
      drinkName.push(data.drinks[i].strDrink)
    }
    // console.log(drinkName)

    // Below creates an array for each drink's recipe photo
    let drinkPhoto = [];

    for (let i = 0; i < data.drinks.length; i++) {
      drinkPhoto.push(data.drinks[i].strDrinkThumb)
    }
    console.log(drinkPhoto)

        // Below creates an array for each drink's instructions
        let drinkInstructions = [];

        for (let i = 0; i < data.drinks.length; i++) {
          drinkInstructions.push(data.drinks[i].strInstructions)
        }
        console.log(drinkInstructions)

        // // Below creates an array for each drink's ingredients
        // AMARJIT --> please add your code to pull data on drinks ingredients here if you can
        // I've run out of APIs requests for today so will try again tomorrow.



  });


// // TRANSLATION API

// // will need to change "translateInput" in the url to a variable which is linked to the cocktail text result
// const translateInput = 'Hi';
// // will need to change "translationChoice" in the url to a variable which is linked to translate buttons
// const translationChoice = 'es';

// const translateUrl = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
// const tOptions = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-RapidAPI-Key': 'dd65562ce6msh0d8441fffb5ded0p19d99cjsn8a649b85763c',
//         'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
//     },
//     body: JSON.stringify({
//       // the "q" is where you input your text info (jQuery --> get item)
//         q: translateInput,
//         source: 'en',
//         target: translationChoice
//     })
// };


// fetch(translateUrl, tOptions)
//   .then(function (response) {
//           console.log(response)
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data); 
    
//     console.log(data.translations.translatedText);  

//     // $('.translation').text(`translation result: ${data.translations.translatedText}`);


//   });




