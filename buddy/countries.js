const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

loadCountries();

const displayCountry = countries => {
    for (const country of countries) {
        console.log(country);
    }
    const countryisDiv = document.getElementById('country')
    countries.forEach(country => {
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countryisDiv.appendChild(h3)
    });

}
