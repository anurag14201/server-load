const searchFood = () => {
    const searchFoodInput = document.getElementById('button-field');
    const valueFood = searchFoodInput.value;
    searchFoodInput.value = '';
    // console.log(valueFood);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueFood}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchMeals(data.meals));
    // console.log(url)
}
const displaySearchMeals = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
}