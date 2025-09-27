const inputTag = document.querySelector("input");
const buttonTag = document.querySelector("button");
const cardsDiv = document.querySelector("#cards");

function updateFoods(foods) {
  let foodHtml = "";
  foods.map((food) => {
    foodHtml += `
        <div class="card border-2 border-gray-400 px-4 py-8 rounded-lg">
          <img class="mb-5 rounded-lg" src="${food.strMealThumb}" alt="food-pic" />
          <span class="font-extrabold text-red-900 text-xl"
            >${food.strMeal}</span
          >
        </div>

        `;
  });
  cardsDiv.innerHTML = foodHtml;
}

async function getFoods(search) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`,
    );
    const data = await response.json();
    updateFoods(data.meals);
  } catch (error) {
    console.log("There was an error establishing the connection!!");
  }
}

function callGetFood() {
  const country =
    String(inputTag.value) === "" ? "American" : String(inputTag.value);
  getFoods(country);
}

buttonTag.addEventListener("click", () => {
  callGetFood();
});

inputTag.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    callGetFood();
  }
});
