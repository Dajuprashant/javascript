// import { useLocation, useParams } from "react-router

const Detail = () => {
  const meal = {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
  };

  return (
    <div className="bg-blue-500 text-white">

      <div className="detail-info flex justify-around ">


        <div>
          <h1 className="font-bold text-2xl">{meal.strMeal}</h1>
          <p><img className="h-[400px] w-[400px]" src={meal.strMealThumb} alt="" /></p>
          <p>{meal.strCategory}</p>
          <p>{meal.strArea}</p>

        </div>

        <div>
          <h1 className="font-bold py-4">List of ingredients</h1>
          <p>{meal.strIngredient1}</p>
          <p>{meal.strIngredient2}</p>
          <p>{meal.strIngredient3}</p>
          <p>{meal.strIngredient4}</p>
          <p>{meal.strIngredient5}</p>
          <p>{meal.strIngredient6}</p>
          <p>{meal.strIngredient7}</p>
          <p>{meal.strIngredient8}</p>
        </div>

        <div className="px-52 font-bold py-4">
          <h1>Measures</h1>
          <p>{meal.strMeasure1}</p>
          <p>{meal.strMeasure2}</p>
          <p>{meal.strMeasure3}</p>
          <p>{meal.strMeasure4}</p>
          <p>{meal.strMeasure5}</p>
          <p>{meal.strMeasure6}</p>
          <p>{meal.strMeasure7}</p>
          <p>{meal.strMeasure8}</p>
        </div>

      </div>

      <p className="p-10">{meal.strInstructions}</p>


    </div>

  )
}
export default Detail