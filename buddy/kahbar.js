const searchFood = () => {
    const searchFoodInput = document.getElementById('button-field');
    const valueFood = searchFoodInput.value;
    searchFoodInput.value = '';
    // console.log(valueFood);
    if (valueFood == '') {

    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueFood}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchMeals(data.meals));
        // console.log(url)
    }

}
const displaySearchMeals = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div onclick="loadMealDetil(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetil = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetiles(data.meals[0]));
}

const displayMealDetiles = meal => {
    const mealDetils = document.getElementById('meal-detils');
    // mealDetils.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
                <img src="${meal.strMealThumb}" alt="...">
               <div class="card-body"> 
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
                </div>
    `;
    mealDetils.appendChild(div);

}