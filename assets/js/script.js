$(document).ready(function () {
  var drinkNameList = [
    "110 in the shade",
    "151 Florida Bushwacker",
    "155 Belmont",
    "24k nightmare",
    "3 Wise Men",
    "3-Mile Long Island Iced Tea",
    "410 Gone",
    "501 Blue",
    "57 Chevy with a White License Plate",
    "69 Special",
    "747 Drink",
    "9 1/2 Weeks",
    "A Day at the Beach",
    "A Furlong Too Late",
    "A Gilligan's Island",
    "A Night In Old Mandalay",
    "A Piece of Ass",
    "A Splash of Nash",
    "A True Amaretto Sour",
    "A midsummernight dream",
    "A. J.",
    "A.D.M. (After Dinner Mint)",
    "A1",
    "ABC",
    "ACID",
    "AT&T",
    "Abbey Cocktail",
    "Abbey Martini",
    "Abilene",
    "Absinthe #2",
    "Absolut Evergreen",
    "Absolut Sex",
    "Absolut Stress #2",
    "Absolut Summertime",
    "Absolut limousine",
    "Absolutely Cranberry Smash",
    "Absolutely Fabulous",
    "Absolutly Screwed Up",
    "Acapulco",
    "Ace",
    "Adam",
    "Adam & Eve",
    "Adam Bomb",
    "Adam Sunrise",
    "Addington",
    "Addison",
    "Addison Special",
    "Adios Amigos Cocktail",
    "Adonis Cocktail",
    "Affair",
    "Affinity",
    "After Dinner Cocktail",
    "After Five",
    "After Supper Cocktail",
    "After sex",
    "Afterglow",
    "Afternoon",
    "Alabama Slammer",
    "Alaska Cocktail",
    "Alexander",
    "Alfie Cocktail",
    "Algonquin",
    "Alice Cocktail",
    "Alice in Wonderland",
    "Allegheny",
    "Allies Cocktail",
    "Almeria",
    "Almond Chocolate Coffee",
    "Almond Joy",
    "Aloha Fruit punch",
    "Amaretto And Cream",
    "Amaretto Liqueur",
    "Amaretto Mist",
    "Amaretto Rose",
    "Amaretto Shake",
    "Amaretto Sour",
    "Amaretto Stinger",
    "Amaretto Stone Sour",
    "Amaretto Stone Sour Alternative",
    "Amaretto Sunrise",
    "Amaretto Sunset",
    "Amaretto Sweet & Sour",
    "Amaretto Tea",
    "Amaretto fizz",
    "Americano",
    "Angel Face",
    "Angelica Liqueur",
    "Apello",
    "Aperol Spritz",
    "Apple Berry Smoothie",
    "Apple Cider Punch",
    "Apple Grande",
    "Apple Highball",
    "Apple Karate",
    "Apple Pie with A Crust",
    "Apple Slammer",
    "Applecar",
    "Applejack",
    "Apricot Lady",
    "Apricot punch",
    "Aquamarine",
    "Archbishop",
    "Arctic Fish",
    "Arctic Mouthwash",
    "Arise My Love",
    "Arizona Antifreeze",
    "Arizona Stingers",
    "Arizona Twister",
    "Army special",
    "Arthur Tompkins",
    "Artillery",
    "Artillery Punch",
    "Atlantic Sun",
    "Atomic Lokade",
    "Auburn Headbanger",
    "Autodafé",
    "Autumn Garibaldi",
    "Avalanche",
    "Avalon",
    "Aviation",
    "Aztec Punch",
    "B-52",
    "B-53",
    "Baby Eskimo",
    "Baby Guinness",
    "Bacardi Cocktail",
    "Bahama Mama",
    "Bailey's Dream Shake",
    "Balmoral",
    "Banana Cantaloupe Smoothie",
    "Banana Cream Pi",
    "Banana Daiquiri",
    "Banana Milk Shake",
    "Banana Strawberry Shake",
    "Banana Strawberry Shake Daiquiri",
    "Barracuda",
    "Bee's Knees",
    "Belgian Blue",
    "Bellini",
    "Bellini Martini",
    "Bermuda Highball",
    "Berry Deadly",
    "Between The Sheets",
    "Bible Belt",
    "Big Red",
    "Bijou",
    "Black & Tan",
    "Black Forest Shake",
    "Black Russian",
    "Black and Brown",
    "Blackthorn",
    "Bleeding Surgeon",
    "Blind Russian",
    "Bloody Maria",
    "Bloody Mary",
    "Bloody Punch",
    "Blue Hurricane",
    "Blue Lagoon",
    "Blue Margarita",
    "Blue Mountain",
    "Blueberry Mojito",
    "Bluebird",
    "Bob Marley",
    "Bobby Burns Cocktail",
    "Bombay Cassis",
    "Boomerang",
    "Boozy Snickers Milkshake",
    "Bora Bora",
    "Boston Sidecar",
    "Boston Sour",
    "Boulevardier",
    "Bounty Hunter",
    "Bourbon Sling",
    "Bourbon Sour",
    "Boxcar",
    "Brain Fart",
    "Brainteaser",
    "Bramble",
    "Brandon and Will's Coke Float",
    "Brandy Alexander",
    "Brandy Cobbler",
    "Brandy Flip",
    "Brandy Sour",
    "Brave Bull Shooter",
    "Brigadier",
    "Broadside",
    "Brooklyn",
    "Bruce's Puce",
    "Bruised Heart",
    "Bubble Gum",
    "Buccaneer",
    "Bumble Bee",
    "Butter Baby",
    "Butterfly Effect",
    "Cafe Savoy",
    "Caipirinha",
    "Caipirissima",
    "California Lemonade",
    "California Root Beer",
    "Campari Beer",
    "Captain Kidd's Punch",
    "Caribbean Boilermaker",
    "Caribbean Orange Liqueur",
    "Casa Blanca",
    "Casino",
    "Casino Royale",
    "Castillian Hot Chocolate",
    "Champagne Cocktail",
    "Cherry Electric Lemonade",
    "Cherry Rum",
    "Chicago Fizz",
    "Chocolate Beverage",
    "Chocolate Black Russian",
    "Chocolate Drink",
    "Chocolate Milk",
    "Chocolate Monkey",
    "Citrus Coke",
    "City Slicker",
    "Classic Old-Fashioned",
    "Clove Cocktail",
    "Clover Club",
    "Cocktail Horse’s Neck",
    "Coffee Liqueur",
    "Coffee-Vodka",
    "Coke and Drops",
    "Corn n Oil",
    "Corpse Reviver",
    "Cosmopolitan",
    "Cosmopolitan Martini",
    "Cranberry Cordial",
    "Cranberry Punch",
    "Cream Soda",
    "Creme de Menthe",
    "Cuba Libra",
    "Cuba Libre",
    "Daiquiri",
    "Damned if you do",
    "Danbooka",
    "Dark Caipirinha",
    "Dark and Stormy",
    "Darkwood Sling",
    "Death in the Afternoon",
    "Derby",
    "Diesel",
    "Dirty Martini",
    "Dirty Nipple",
    "Downshift",
    "Dragonfly",
    "Drinking Chocolate",
    "Dry Martini",
    "Dry Rob Roy",
    "Dubonnet Cocktail",
    "Duchamp's Punch",
    "Egg Cream",
    "Egg Nog #4",
    "Egg Nog - Healthy",
    "Egg-Nog - Classic Cooked",
    "Elderflower Caipirinha",
    "Empellón Cocina's Fat-Washed Mezcal",
    "English Highball",
    "English Rose Cocktail",
    "Espresso Martini",
    "Espresso Rumtini",
    "Fahrenheit 5000",
    "Figgy Thyme",
    "Flaming Dr. Pepper",
    "Flaming Lamborghini",
    "Flander's Flake-Out",
    "Flying Dutchman",
    "Flying Scotchman",
    "Foxy Lady",
    "Frappé",
    "Freddy Kruger",
    "French 75",
    "French Connection",
    "French Martini",
    "French Negroni",
    "Frisco Sour",
    "Frosé",
    "Frozen Daiquiri",
    "Frozen Mint Daiquiri",
    "Frozen Pineapple Daiquiri",
    "Fruit Cooler",
    "Fruit Flip-Flop",
    "Fruit Shake",
    "Funk and Soul",
    "Fuzzy Asshole",
    "GG",
    "Gagliardo",
    "Garibaldi Negroni",
    "Gentleman's Club",
    "Gideon's Green Dinosaur",
    "Gimlet",
    "Gin And Tonic",
    "Gin Basil Smash",
    "Gin Cooler",
    "Gin Daisy",
    "Gin Fizz",
    "Gin Lemon",
    "Gin Rickey",
    "Gin Sling",
    "Gin Smash",
    "Gin Sour",
    "Gin Squirt",
    "Gin Swizzle",
    "Gin Toddy",
    "Gin Tonic",
    "Gin and Soda",
    "Girl From Ipanema",
    "Gluehwein",
    "Godchild",
    "Godfather",
    "Godmother",
    "Golden dream",
    "Grand Blue",
    "Grape lemon pineapple Smoothie",
    "Grass Skirt",
    "Grasshopper",
    "Green Goblin",
    "Greyhound",
    "Grim Reaper",
    "Grizzly Bear",
    "H.D.",
    "Halloween Punch",
    "Happy Skipper",
    "Harvey Wallbanger",
    "Havana Cocktail",
    "Hawaiian Cocktail",
    "Hemingway Special",
    "Herbal flame",
    "Highland Fling Cocktail",
    "Holloween Punch",
    "Homemade Kahlua",
    "Honey Bee",
    "Horse's Neck",
    "Hot Chocolate to Die for",
    "Hot Creamy Bush",
    "Hot Toddy",
    "Hunter's Moon",
    "Ice Pick",
    "Iced Coffee",
    "Iced Coffee Fillip",
    "Imperial Cocktail",
    "Imperial Fizz",
    "Ipamena",
    "Irish Coffee",
    "Irish Cream",
    "Irish Curdling Cow",
    "Irish Russian",
    "Irish Spring",
    "Jack Rose Cocktail",
    "Jack's Vanilla Coke",
    "Jackhammer",
    "Jam Donut",
    "Jamaica Kiss",
    "Jamaican Coffee",
    "Japanese Fizz",
    "Jello shots",
    "Jelly Bean",
    "Jewel Of The Nile",
    "Jitterbug",
    "John Collins",
    "Just a Moonmint",
    "Kamikaze",
    "Karsk",
    "Kentucky B And B",
    "Kentucky Colonel",
    "Kill the cold Smoothie",
    "Kioki Coffee",
    "Kir",
    "Kir Royale",
    "Kiss me Quick",
    "Kiwi Lemon",
    "Kiwi Martini",
    "Kiwi Papaya Smoothie",
    "Kool First Aid",
    "Kool-Aid Shot",
    "Kool-Aid Slammer",
    "Kurant Tea",
    "Lady Love Fizz",
    "Lassi - A South Indian Drink",
    "Lassi - Mango",
    "Lassi - Sweet",
    "Lassi Khara",
    "Lassi Raita",
    "Lazy Coconut Paloma",
    "Lemon Drop",
    "Lemon Elderflower Spritzer",
    "Lemon Shot",
    "Lemouroudji",
    "Limeade",
    "Limona Corona",
    "Loch Lomond",
    "London Town",
    "Lone Tree Cocktail",
    "Lone Tree Cooler",
    "Long Island Iced Tea",
    "Long Island Tea",
    "Long vodka",
    "Lord And Lady",
    "Lunch Box",
    "Mai Tai",
    "Malibu Twister",
    "Mango Mojito",
    "Mango Orange Smoothie",
    "Manhattan",
    "Margarita",
    "Martinez 2",
    "Martinez Cocktail",
    "Martini",
    "Mary Pickford",
    "Masala Chai",
    "Mauresque",
    "Melya",
    "Miami Vice",
    "Michelada",
    "Microwave Hot Cocoa",
    "Midnight Cowboy",
    "Midnight Manx",
    "Midnight Mint",
    "Mimosa",
    "Mint Julep",
    "Mississippi Planters Punch",
    "Mocha-Berry",
    "Mojito",
    "Mojito Extra",
    "Monkey Gland",
    "Monkey Wrench",
    "Moranguito",
    "Moscow Mule",
    "Mother's Milk",
    "Mountain Bramble",
    "Mudslinger",
    "Mulled Wine",
    "Munich Mule",
    "National Aquarium",
    "Negroni",
    "New York Lemonade",
    "New York Sour",
    "Nuked Hot Chocolate",
    "Nutty Irishman",
    "Oatmeal Cookie",
    "Old Cuban",
    "Old Fashioned",
    "Old Pal",
    "Orange Crush",
    "Orange Oasis",
    "Orange Push-up",
    "Orange Rosemary Collins",
    "Orange Scented Hot Chocolate",
    "Orange Whip",
    "Orangeade",
    "Oreo Mudslide",
    "Orgasm",
    "Owen's Grandmother's Revenge",
    "Paloma",
    "Paradise",
    "Passion Fruit Martini",
    "Pegu Club",
    "Penicillin",
    "Pina Colada",
    "Pineapple Gingerale Smoothie",
    "Pineapple Paloma",
    "Pink Gin",
    "Pink Lady",
    "Pink Moon",
    "Pink Panty Pulldowns",
    "Pink Penocha",
    "Pisco Sour",
    "Planter's Punch",
    "Planter’s Punch",
    "Popped cherry",
    "Poppy Cocktail",
    "Pornstar Martini",
    "Port And Starboard",
    "Port Wine Cocktail",
    "Port Wine Flip",
    "Porto flip",
    "Pure Passion",
    "Pysch Vitamin Light",
    "Quaker's Cocktail",
    "Quarter Deck Cocktail",
    "Queen Bee",
    "Queen Charlotte",
    "Queen Elizabeth",
    "Quentin",
    "Quick F**K",
    "Quick-sand",
    "Radioactive Long Island Iced Tea",
    "Radler",
    "Rail Splitter",
    "Ramos Gin Fizz",
    "Raspberry Cooler",
    "Raspberry Julep",
    "Red Snapper",
    "Rose",
    "Rosemary Blue",
    "Royal Bitch",
    "Royal Fizz",
    "Royal Flush",
    "Royal Gin Fizz",
    "Ruby Tuesday",
    "Rum Cobbler",
    "Rum Cooler",
    "Rum Milk Punch",
    "Rum Old-fashioned",
    "Rum Punch",
    "Rum Runner",
    "Rum Screwdriver",
    "Rum Sour",
    "Rum Toddy",
    "Russian Spring Punch",
    "Rusty Nail",
    "Salted Toffee Martini",
    "Salty Dog",
    "San Francisco",
    "Sangria",
    "Sangria The  Best",
    "Sazerac",
    "Scooter",
    "Scotch Cobbler",
    "Scotch Sour",
    "Scottish Highland Liqueur",
    "Screaming Orgasm",
    "Screwdriver",
    "Sea breeze",
    "Sex on the Beach",
    "Shanghai Cocktail",
    "Shark Attack",
    "Sherry Eggnog",
    "Sherry Flip",
    "Shot-gun",
    "Sidecar",
    "Sidecar Cocktail",
    "Singapore Sling",
    "Slippery Nipple",
    "Sloe Gin Cocktail",
    "Smashed Watermelon Margarita",
    "Smut",
    "Snake Bite (UK)",
    "Snakebite and Black",
    "Snowball",
    "Snowday",
    "Sol Y Sombra",
    "Space Odyssey",
    "Spanish chocolate",
    "Spice 75",
    "Spiced Peach Punch",
    "Spiking coffee",
    "Spritz",
    "Spritz Veneziano",
    "Stinger",
    "Stone Sour",
    "Strawberry Daiquiri",
    "Strawberry Lemonade",
    "Strawberry Margarita",
    "Strawberry Shivers",
    "Sunny Holiday Punch",
    "Surf City Lifesaver",
    "Swedish Coffee",
    "Sweet Bananas",
    "Sweet Sangria",
    "Sweet Tooth",
    "Talos Coffee",
    "Tennesee Mud",
    "Tequila Fizz",
    "Tequila Slammer",
    "Tequila Sour",
    "Tequila Sunrise",
    "Tequila Surprise",
    "Texas Rattlesnake",
    "Texas Sling",
    "Thai Coffee",
    "Thai Iced Coffee",
    "Thai Iced Tea",
    "The Evil Blue Thing",
    "The Galah",
    "The Jimmy Conway",
    "The Last Word",
    "The Laverstoke",
    "The Philosopher",
    "The Strange Weaver",
    "Thriller",
    "Tia-Maria",
    "Tipperary",
    "Tom Collins",
    "Tomato Tang",
    "Tommy's Margarita",
    "Turf Cocktail",
    "Turkeyball",
    "Tuxedo Cocktail",
    "Valencia Cocktail",
    "Vampiro",
    "Van Vleet",
    "Vermouth Cassis",
    "Vesper",
    "Vesuvio",
    "Veteran",
    "Victor",
    "Victory Collins",
    "Vodka And Tonic",
    "Vodka Fizz",
    "Vodka Lemon",
    "Vodka Martini",
    "Vodka Russian",
    "Vodka Slime",
    "Vodka Tonic",
    "Waikiki Beachcomber",
    "Whiskey Sour",
    "Whisky Mac",
    "White Lady",
    "White Russian",
    "White Wine Sangria",
    "Whitecap Margarita",
    "Wine Cooler",
    "Wine Punch",
    "Winter Paloma",
    "Winter Rita",
    "Yellow Bird",
    "Yoghurt Cooler",
    "Zambeer",
    "Zenmeister",
    "Ziemes Martini Apfelsaft",
    "Zima Blaster",
    "Zimadori Zinger",
    "Zinger",
    "Zipperhead",
    "Zippy's Revenge",
    "Zizi Coin-coin",
    "Zoksel",
    "Zombie",
    "Zorbatini",
    "Zorro"
  ];

  const drinkFormEl = $('#cocktail-form');
  const drinkNameInputEl = $('#cocktail-name');

  drinkNameInputEl.autocomplete({
    source: drinkNameList
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    let chosenDrink = drinkNameInputEl.val();
    console.log("Chosen Drink:", chosenDrink);
    if (!chosenDrink) {
      console.log('You need to choose a drink!');
      return;
    }
    storeSearchTerm(chosenDrink);
    drinksAPI(chosenDrink);
  }

  drinkFormEl.on('submit', handleFormSubmit);

  function storeSearchTerm(chosenDrink) {
    if (!chosenDrink) {
      console.log('No drink chosen, not storing.');
      return;
    }

    let searches = JSON.parse(localStorage.getItem('cocktail-names')) || [];
    searches.push(chosenDrink);
    localStorage.setItem('cocktail-names', JSON.stringify(searches));

    console.log('Stored Searches:', localStorage.getItem('cocktail-names'));

    displayStoredSearchTerms();
  }

  function displayStoredSearchTerms() {
    let searches = JSON.parse(localStorage.getItem('cocktail-names')) || [];
    let sidebar = $('#search-sidebar');
    sidebar.empty();
    searches.forEach(function (chosenDrink) {
      sidebar.append(`<button>${chosenDrink}</button>`);
    });
  }


  const drinksAPI = function (chosenDrink) {

    let url = `https://the-cocktail-db.p.rapidapi.com/search.php?s=${chosenDrink}`;
    let cOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dd65562ce6msh0d8441fffb5ded0p19d99cjsn8a649b85763c',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    };

    // ////////

    // We then created an Fetch call
    fetch(url, cOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);


        // Below isolates a specific drink object -- data.drinks[i].strDrink -- to create a drinkName array)
        let drinkName = [];

        for (let i = 0; i < data.drinks.length; i++) {
          // drinkName = (data.drinks[i].strDrink)
          drinkName.push(data.drinks[i].strDrink)
        }
        console.log(drinkName)


        // DRINK PHOTO
        let drinkPhoto = [];

        for (let i = 0; i < data.drinks.length; i++) {
          drinkPhoto.push(data.drinks[i].strDrinkThumb)
        }
        console.log(drinkPhoto)

        // INGREDIENTS
        const drinks = data.drinks
        let drinkIngredients = [];

        drinks.forEach(function (drink) {
          let ingredients = Object.keys(drink)
            .filter(function (key) {
              return key.startsWith('strIngredient');
            })
            .reduce(function (result, key) {
              if (drink[key]) {
                result.push(drink[key]);
              }
              return result;
            }, []);

          // Fixed the scoping issue -- declared ingredients outside
          drinkIngredients.push(ingredients);
        });


        // RECIPE
        let drinkInstructions = [];

        for (let i = 0; i < data.drinks.length; i++) {
          drinkInstructions.push(data.drinks[i].strInstructions)
        }
        console.log(drinkInstructions)


        const cardCol = $('<div>').attr('class', 'col-md')
        const drinksCard = $('<div>').attr('class', 'card')
        const cardBody = $('<div>').attr('class', 'card-body')

        // append drink name and photo
        const drinkTitle = $('<h2>').attr('class', 'card-title').text(`${drinkName}`)
        const drinksIcon = $('<img>').attr('src', drinkPhoto).width(200)
        $('#drink-info').append(cardCol)
        cardCol.append(drinksCard)
        drinksCard.append(cardBody)


        // FOR LOOP HERE FOR EACH INGREDIENT
        const drinkIngredientsEl = $('#ingredients');

        // Iterate over the drinkIngredients array
        drinkIngredients.forEach(ingredients => {
          // Create a new unordered list for each set of ingredients
          const ingredientList = $('<ul>').attr('class', 'ingredient-list');

          // Iterate over the current set of ingredients and create list items
          ingredients.forEach(ingredient => {
            const listItem = $('<li>').text(ingredient);
            ingredientList.append(listItem);
          });

          // Append the current unordered list to the #ingredients ul
          drinkIngredientsEl.append(ingredientList);
        });

        // Append the other elements outside the loop into one card
        cardBody.append(drinkTitle, drinksIcon, drinkIngredientsEl, drinkInstructions);

      });
  }


  displayStoredSearchTerms();


  //     Random Cocktail suggestion

  // Button below will select a Random drink below when chosen
  $('.randomBtn').click(function (e) {
    e.preventDefault();
    getRandomCocktail();
  })

  function getRandomCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(
        function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }


          response.json().then(function (data) {
            console.log(data);
            /////////////////////////////////////

            let drinkNameR = [];

            for (let i = 0; i < data.drinks.length; i++) {
              drinkNameR.push(data.drinks[i].strDrink)
            }
            console.log(drinkNameR)


            // RANDOM DRINK PHOTO
            let drinkPhotoR = [];

            for (let i = 0; i < data.drinks.length; i++) {
              drinkPhotoR.push(data.drinks[i].strDrinkThumb)
            }
            console.log(drinkPhotoR)

            // R INGREDIENTS
            const drinksR = data.drinks
            let drinkIngredientsR = [];

            drinksR.forEach(function (drink) {
              let ingredients = Object.keys(drink)
                .filter(function (key) {
                  return key.startsWith('strIngredient');
                })
                .reduce(function (result, key) {
                  if (drink[key]) {
                    result.push(drink[key]);
                  }
                  return result;
                }, []);

              drinkIngredientsR.push(ingredients);
            });

            console.log(drinkIngredientsR)


            // RECIPE
            let drinkInstructionsR = [];

            for (let i = 0; i < data.drinks.length; i++) {
              drinkInstructionsR.push(data.drinks[i].strInstructions)
            }
            console.log(drinkInstructionsR)


            const cardColR = $('<div>').attr('class', 'col-md')
            const drinksCardR = $('<div>').attr('class', 'card')
            const cardBodyR = $('<div>').attr('class', 'card-body')

            // append random drink name and photo
            const drinkTitleR = $('<h2>').attr('class', 'card-title').text(`${drinkNameR}`)
            const drinksIconR = $('<img>').attr('src', drinkPhotoR).width(200)
            $('#drink-info-r').append(cardColR)
            cardColR.append(drinksCardR)
            drinksCardR.append(cardBodyR)


            // FOR LOOP HERE FOR EACH INGREDIENT
            const drinkIngredientsRandEl = $('#ingredients-r');

            // Iterate over the drinkIngredients array
            drinkIngredientsR.forEach(ingredients => {
              // Create a new unordered list for each set of ingredients
              const ingredientListR = $('<ul>').attr('class', 'ingredient-list');

              // Iterate over the current set of ingredients and create list items
              ingredients.forEach(ingredient => {
                const listItemR = $('<li>').text(ingredient);
                ingredientListR.append(listItemR);
              });

              // Append the current unordered list to the #ingredients ul
              drinkIngredientsRandEl.append(ingredientListR);
            });

            // Append the other elements outside the loop into one card
            cardBodyR.append(drinkTitleR, drinksIconR, drinkIngredientsRandEl, drinkInstructionsR);

          });

          ////////////////////////////////////////
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  }


}); // end of '$(document).ready(function()' function

