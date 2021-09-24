var elList = document.querySelector(".pokemons__list");

elList.innerHTML = null;
for (pokemon of pokemons) {
  var newLi = document.createElement('li');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h2');
  var pokemonType = document.createElement('p');
  var pokemonHeight = document.createElement('p');
  var pokemonWeight = document.createElement('p');
  var pokemonCandy = document.createElement('p');
  var pokemonCandyCount = document.createElement('p');
  var pokemonEgg = document.createElement('p');
  var pokemonSpawnChance = document.createElement('p');
  var pokemonAvgSpawn = document.createElement('p');
  var pokemonTime = document.createElement('p');
  var pokemonSpawnTime = document.createElement('time');
  var pokemonMultipliers = document.createElement('p');
  var pokemonWeaknesses = document.createElement('p');
  var pokemonNextEvolution = document.createElement('p');



  newHeading.textContent = pokemon.name;
  pokemonType.textContent = "Type: " + pokemon.type;
  pokemonHeight.textContent = "Height: " + pokemon.height;
  pokemonWeight.textContent = "Weight: " + pokemon.weight;
  pokemonCandy.textContent = "Candy: " + pokemon.candy;
  pokemonCandyCount.textContent = "Candy count: " + pokemon.candy_count;
  pokemonEgg.textContent = "Egg: " + pokemon.egg;
  pokemonSpawnChance.textContent = "Spawn chance: " + pokemon.spawn_chance;
  pokemonSpawnTime.textContent = "Spawn Time: " + pokemon.spawn_time;
  pokemonMultipliers.textContent = "Multipliers: " + pokemon.multipliers;
  pokemonWeaknesses.textContent = "Weaknesses: " + pokemon.weaknesses;
  pokemonNextEvolution.textContent = "Next evolution: " + pokemon.next_evolution;



  newLi.setAttribute('class', 'pokemons__item m-4 rounded p-2');
  newHeading.setAttribute('class', 'pokemons__heading');
  newImage.setAttribute('src', pokemon.img);
  newImage.setAttribute('alt', pokemon.name + " Image");
  pokemonSpawnTime.setAttribute('datetime', pokemon.spawn_time)
  pokemonSpawnTime.setAttribute('class', 'spawn__time');

  newLi.appendChild(newImage);
  newLi.appendChild(newHeading);
  newLi.appendChild(pokemonType);
  newLi.appendChild(pokemonHeight);
  newLi.appendChild(pokemonWeight);
  newLi.appendChild(pokemonCandy);
  newLi.appendChild(pokemonCandyCount);
  newLi.appendChild(pokemonEgg);
  newLi.appendChild(pokemonSpawnChance);
  newLi.appendChild(pokemonAvgSpawn);
  newLi.appendChild(pokemonTime);
  pokemonTime.appendChild(pokemonSpawnTime)
  newLi.appendChild(pokemonMultipliers);
  newLi.appendChild(pokemonWeaknesses);
  newLi.appendChild(pokemonNextEvolution);


  elList.appendChild(newLi);
  // console.log(newHeading)
}