import { fetchBreeds, fetchCatByBreed } from './cat-api';

setTimeout(completeBreedSelect(), 2000);
setTimeout(completeCatInfo('abys'), 2000);

function completeBreedSelect() {
  fetchBreeds().then(value => console.log(value));
}

function completeCatInfo(breed_id) {
  fetchCatByBreed(breed_id).then(value => console.log(value));
}
