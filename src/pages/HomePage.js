import { useNavigate } from "react-router";

const HomePage = () => {
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
  // const person = {
  //   id: 9,
  //   name: 'wizz',
  //   age: 35,
  //   image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  // };

  const nav = useNavigate();

  return (
    <div>


      <div onClick={() => nav(`/detail/$(meal.idMeal)`)}  >
        <h1>{meal.strMeal}</h1>
        <p><img className="h-[400px] w-[400px]" src={meal.strMealThumb} alt="" /></p>
      </div>
      <h1>This is about home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis adipisci explicabo cupiditate, blanditiis, perferendis quod atque laborum aut quaerat voluptatem nemo pariatur maiores? Optio esse nemo dolorem quod maiores nobis magni quo soluta iste commodi perferendis voluptatibus, ea nesciunt laudantium maxime dignissimos tempore eum minima, exercitationem minus. Officiis fuga minima aliquam quisquam earum voluptatem veniam dolorem pariatur, a repellendus aut excepturi beatae laudantium alias fugit quam quis ducimus accusantium facere molestiae cum error rerum! Reprehenderit nobis, necessitatibus quod minima deleniti recusandae beatae vitae rem perspiciatis voluptate obcaecati nemo magnam fugiat doloribus quas sequi voluptatum eaque corporis unde quos autem!</p>
    </div>
  )
}
export default HomePage