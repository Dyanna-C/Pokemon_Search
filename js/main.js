
{
    
    let form = document.getElementById('pokeForm');
console.log(form);

    // Create a function to handle submit event
    async function handleSubmit(e){
        e.preventDefault(); // Prevent the event from refreshing the page
        // console.log(e);
        let pokeName = e.target.pokeName.value;
        // console.log(countryName);
        let pokeInfo = await getpokeInfo(pokeName);
        buildPokemonCard(pokeInfo);
        // Clear the input of the country name
        e.target.pokeName.value = '';
    }
    // Function that takes in a country name, makes the request to the API, and returns a JavaScript object
    async function getpokeInfo(PokemonName){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}/`);
        // console.log(response)
        let data = await response.json()
        // console.log(data[0]);
        return data
    }

       // Function that will take in a country object and build an HTML card and append to the country Display
       function buildPokemonCard(pokeObj){
        // Create a card div
        let card = document.createElement('div');
        card.className = 'pokemon card';

        // Create a top image
        let image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = pokeObj.sprites.front_default;
        // Add image as a child to the card div
        card.append(image);

        // Create card body and add
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.append(cardBody);

        // Create country name and population elements and add
        let pokeTitle = document.createElement('h5');
        pokeTitle.className = 'card-title';
        pokeTitle.innerHTML = pokeObj.name.official;
        cardBody.append(pokeTitle);


        let pokeHeight = document.createElement('p')
        pokeHeight.className = 'card-text';
        pokeHeight.innerHTML = `height ${pokeObj.height}`
        cardBody.append(pokeHeight);


        let pokeWeight = document.createElement('p')
        pokeWeight.className = 'card-text';
        pokeWeight.innerHTML = `weight ${pokeObj.weight}`
        cardBody.append(pokeWeight);

        
            // letting the pokemon display
            let display = document.getElementById('pokeGallery');

            display.append(col);
       }
    // add handlesubmit function
    form.addEventListener('submit', handleSubmit)

}



