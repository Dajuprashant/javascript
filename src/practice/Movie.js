const Movie = () => {

  const data = [
    {
      "strMeal": "Baked salmon with fennel & tomatoes",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      "idMeal": "52959"
    },
    {
      "strMeal": "Cajun spiced fish tacos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      "idMeal": "52819"
    },
    {
      "strMeal": "Escovitch Fish",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "idMeal": "52944"
    },
    {
      "strMeal": "Fish fofos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      "idMeal": "53043"
    },
    {
      "strMeal": "Fish pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      "idMeal": "52802"
    },
    {
      "strMeal": "Fish Stew with Rouille",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      "idMeal": "52918"
    },
    {
      "strMeal": "Garides Saganaki",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      "idMeal": "52764"
    },
    {
      "strMeal": "Grilled Portuguese sardines",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      "idMeal": "53041"
    },
    {
      "strMeal": "Honey Teriyaki Salmon",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      "idMeal": "52773"
    },];



  return (

    < div className="menu grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 m-10" >
      {data.map((a, i) => {
        return <div>
          <h1>{a.strMeal}</h1>
          <img src={a.strMealThumb} alt="" />
          <h1>{a.idMeal}</h1>
        </div>
      })}

    </div >
  )
}
export default Movie