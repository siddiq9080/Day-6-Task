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

  

//5.Print the total population of countries using reduce function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
   
    const countryUsingUSD = data.find(country => {
      if (country.currencies) {
      
        return Object.values(country.currencies).includes('USD');
      }
      return false;
    });

    if (countryUsingUSD) {
      console.log("Country that uses US dollars:", countryUsingUSD.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.log("Error fetching data:", error));
