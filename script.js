// ********** VARIABLES ********** //
const baseURL = 'https://api.covid19api.com/';
const section = document.querySelector('section')

// ********** FETCH ********** //
fetch(`${baseURL}summary`)
.then(function (result) {   
  return result.json(); 
})
.then(function (json) {
  console.log(json)
  displayResults(json)
});


// ********** DISPLAY RESULTS ********** //
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let summary = json;

  for (let i = 0; i < summary.Countries.length; i++) {

  //* VARIABLES *//
    let infoContainer = document.createElement('div');
    let country = document.createElement('button');
    let totalCases = document.createElement('p');
    let newCases = document.createElement('p');


    let current = summary.Countries[i];
    console.log('Current:', current);


  // ********** SETTING TEXT CONTENT AND ATTRIBUTES ********** //
    country.textContent = `${current.Country}`;
    totalCases.textContent = `${current.TotalConfirmed}`;
    newCases.textContent = `${current.NewConfirmed}`;


    //section.appendChild(country);
    //section.appendChild(totalCases);
    section.appendChild(infoContainer);
    infoContainer.appendChild(country);
    infoContainer.appendChild(totalCases);
    infoContainer.appendChild(newCases);
    //country.addEventListener('click', function ());

  }
}







