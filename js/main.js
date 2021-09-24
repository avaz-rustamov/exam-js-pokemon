var elList = document.querySelector(".pokemons__list");

elList.innerHTML = null;
for (pokemon of pokemons) {
  var newLi = document.createElement('li');
  var newImage = document.createElement('img');
  var newHeading = document.createElement('h2');

  newHeading.textContent = pokemon.name;

  newLi.setAttribute('class', 'pokemons__item col-4 m-4 rounded p-2');
  newHeading.setAttribute('class', 'pokemons__heading');
  newImage.setAttribute('src', pokemon.img);
  newImage.setAttribute('alt', pokemon.name + " Image");

  newLi.appendChild(newImage);
  newLi.appendChild(newHeading);
  elList.appendChild(newLi);
  // console.log(newHeading)
}