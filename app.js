import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// console.log(await getDogs());
window.addEventListener('load', async() => {
  // on load

  // fetch all dogs
    const dogs = await getDogs();
    // console.log('🚀 ~ file: app.js ~ line 12 ~ window.addEventListener ~ dogs', dogs);
  // render and append all dog cards to the container
    for (const dog of dogs) {
        let dogPage = renderDogCard(dog);
        dogListContainer.append(dogPage);
    }
});
