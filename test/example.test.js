// IMPORT MODULES under test here:
import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dog = {
        name: 'bob',
        breed: 'collie',
        id: 1
    };
    const puppy = {
        name: 'wumbo',
        breed: 'corgi',
        id: 2
    };


    const dogComplex = {
        name: 'wumbo That Speaks',
        breed: 'chihuahua',
        description: 'He barks when he speak English, and understands when you speak the language of the unknown',
        age: 14,
        id: 2
    };
    const puppyComplex = {
        name: 'wumbo That Barks',
        breed: 'dachsund',
        description: 'He barks when he speak Spanish, and understands when you speak the language of the known',
        age: 24,
        id: 5
    };


    const expected = `<a href="./detail/?id=${dog.id}"><div class="dog-card"><p>${dog.name}</p><img src="./assets/${dog.breed}.jpeg"></div></a>`;
    
    const expected1 = `<a href="./detail/?id=${puppy.id}"><div class="dog-card"><p>${puppy.name}</p><img src="./assets/${puppy.breed}.jpeg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);
    const actual1 = renderDogCard(puppy);
    
    
    //test RenderDogDetail
    const expected2 = `<div class="dog-detail"><p class="name">wumbo That Speaks</p><img src="../assets/${dogComplex.breed}.jpeg"><div class="age-and-breed"><p class="age">14 years old</p><p class="breed">chihuahua</p></div><p class="description">He barks when he speak English, and understands when you speak the language of the unknown</p></div>`;

    const expected3 = `<div class="dog-detail"><p class="name">wumbo That Barks</p><img src="../assets/${puppyComplex.breed}.jpeg"><div class="age-and-breed"><p class="age">24 years old</p><p class="breed">dachsund</p></div><p class="description">He barks when he speak Spanish, and understands when you speak the language of the known</p></div>`;
    
    
    const actual2 = renderDogDetail(dogComplex);
    const actual3 = renderDogDetail(puppyComplex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'Dog should return an div, p, and img tag nested within an a tag');
    expect.equal(actual1.outerHTML, expected1, 'Puppy should return an div, p, and img tag nested within an a tag');
    expect.equal(actual2.outerHTML, expected2, 'Should return a div with a class of dog detail and its children should be a p tag with a class of name of description and its sibling should be an image tag and div tag with a class of age-and-breed and another sibling should be a p. The div tag with a class of age-and-breed should have two children p tags, one with a class of age and the other breed respectively.');
    expect.equal(actual3.outerHTML, expected3, 'Should return a div with a class of dog detail and its children should be a p tag with a class of name of description and its sibling should be an image tag and div tag with a class of age-and-breed and another sibling should be a p. The div tag with a class of age-and-breed should have two children p tags, one with a class of age and the other breed respectively.');
});
