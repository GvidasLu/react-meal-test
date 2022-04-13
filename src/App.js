import {useState, useEffect} from 'react';
import './App.css';
import SearchBar from  "./components/search/SeatchBar";
import RecipeCard from "./components/recipe/RecipeCard"

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //funkcija ieskoti receptams ir
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect (() => {
    searchRecipes();
  }, [])

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2>Recipe, Meal, Dishes Searching App</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        query={query}
        // onClick={event => setQuery(event.target.value)}
        setQuery={setQuery}
        isLoading={isLoading}
      />
      <div className="recipes">
        { recipes ? recipes.map(recipe => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
          />
        ))
        : "Error recipes not found"}
      </div>
    </div>
  );
}

export default App;
