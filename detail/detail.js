import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async() => {
  // on load
  // get the id from URL
    const parameters = new URLSearchParams(window.location.search);
  // use the id to fetch the dog
    const id = parameters.get('id');
    const dog = await getDog(id);

    let dogDetailPage = renderDogDetail(dog);
    // console.log('🚀 ~ file: detail.js ~ line 15 ~ window.addEventListener ~ dogDetailPage', dogDetailPage);
  
  // render and append this dog's details to the container
    dogDetailContainer.append(dogDetailPage);
});
