const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

loadCountries();

const displayCountry = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countryisContainer = document.getElementById('country')
    countries.forEach(country => {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countrySty')
        countryDiv.innerHTML = `
        <h3> ${country.name} </h3>
        <p> ${country.capital}</p >
            <button onclick="loadCountryName('${country.name}')">Details</button>
    `;
        countryisContainer.appendChild(countryDiv);
    });

}

const loadCountryName = name => {
    const url = 'https://restcountries.com/v2/name/${name}';
    fetch(url)
        .then(res => res.json())
        .then(name => displayCountryName(name[0]));

}
const displayCountryName = country => {
    const countryInfo = document.getElementById('country-detils')
}
