import { LightningElement, track } from 'lwc';
//import getPokemonData from '@salesforce/apex/PokemonController.getPokemonData';

export default class PokeDisplay extends LightningElement {
    //imageURL;
    allPokemons;
    pokemonData = {};
    error;

    /**this first call only gave us the name of the Pokemon and another url for every Pokemon dataset. 
     * Another fetch has to be made to every Pokemon’s url to get their data(type, number, etc). 
     * For example if we wanted to get Bulbasaur’s info another fetch call will have to be made to the following url https://pokeapi.co/api/v2/pokemon/1/. 
     * Since the info is in an array of hashes, a method can be made that will go trough that array and make the fetch calls to those URLs.
     * Reference: https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
     */

  connectedCallback() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151", { method: "GET" })
      .then(response => response.json())
      .then(function(allPokemons){
        console.log("🚀 ~ data", allPokemons);
        allPokemons.results.forEach(function(pokemon){
          fetchPokemonData(pokemon);
        }) 
      })

    //     if(!response.ok){
    //         this.error = response;
    //     }
    //     return response.json();
    //   })
    // .then(jsonResponse => {
    //   console.log("🚀 ~ data",response );
    //   this.allPokemons = jsonResponse;
      // })
    // .then(function(allPokemons){
    //   allPokemons.results.forEach(function(pokemon){
    //     fetchPokemonData(pokemon);
    //   }) 
    // })
    .catch(error => {
        this.error = error;
        this.allPokemons = undefined;
    })
  }  
  
  fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    }

}

