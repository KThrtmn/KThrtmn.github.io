const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++) {

      //creating elements
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let p = document.createElement('p');
  
      
      //interpolations 
      //add details and attributes
      h2.innerHTML = `${prophets[i].name} ${prophets[i].lastname} - Children: ${prophets[i].numofchildren}`;
      p.innerHTML = `Date of Birth: ${prophets[i].birthdate} <br> Birth Place: ${prophets[i].birthplace}`;
      
      

      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', `Offical Portriat of ${prophets[i].name} ${prophets[i].lastname}`);


      // add content to the container
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(image);
      

      document.querySelector('.cards').appendChild(card);
    }
  });