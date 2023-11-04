//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


//1.Get all the countries from Asia continent /region using Filter function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    const asianCountries = data.filter(country => country.region === 'Asia');

    console.log("Countries in Asia:", asianCountries);
  })
  .catch(error => console.log("Error fetching data:", error));




//2.Get all the countries with a population of less than 2 lakhs using Filter function


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {

    const countriesWithSmallPopulation = data.filter(country => country.population < 200000);

    console.log("Countries with population less than 2 lakhs:", countriesWithSmallPopulation);
  })
  .catch(error => console.log("Error fetching data:", error));




//3.Print the following details name, capital, flag, using forEach function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
   
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("-------------");
    });
  })
  .catch(error => console.log("Error fetching data:", error));




//4.Print the total population of countries using reduce function


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);

    console.log("Total population of countries:", totalPopulation);
  })
  .catch(error => console.log("Error fetching data:", error));

  

//5.Print the country that uses US dollars as currency.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function () {
  const response = JSON.parse(xhr.responseText);
  console.log(response);
  console.log(
    response.filter((cty) => {
      const { currencies = {} } = cty;
     
      return Object.keys(currencies).includes("USD");
    })
  );
};
