import "./App.css";
import Button from '@material-ui/core/Button';
import { useRef, useState } from "react";


function App() {
	const appName = "ReactJS is Fun!";


	const inputFieldRef = useRef();
	const [inputValue, setInputValue] = useState(null);
	const [apidata, setApiData] = useState(null);
	
	

	const dataMapper = (arr) => {
		arr.map(({ strMeal, idMeal, strInstructions }) => {
		
		});
	};

	async function apiHandler() {
		try {
			const apiData = await fetch(
			
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`,
				{ method: "GET" }
			);
			const dataJSON = await apiData.json();
		
			setApiData(dataJSON?.meals);

			dataMapper(dataJSON?.meals);
		} catch (error) {
			console.log("API failure!");
			
      
		}
	}

	const printDish = apidata?.map((data) => {
		
		return <div className="reciepe">
      
      <img src= {data?.strMealThumb} alt="dish-image" ></img>
      
      
      <div className="reciepe-desc">
       
        <div>Area of Meal     - {data?.strArea}</div>
        <div>Category of Meal - {data?.strCategory}</div>
       <div>Name of Meal - {data?.strMeal}</div>
       <div>Tag of Meal- {data?.strTags}</div>
       <div>Ingredient-One - {data?.strIngredient1}</div>
       <div>Ingredient-Two - {data?.strIngredient2}</div>
       <div>Ingredient-Three - {data?.strIngredient3}</div>
       <div>Ingredient-Four - {data?.strIngredient4}</div>
       <div>Ingredient-Five - {data?.strIngredient5}</div>
       <div>Ingredient-Six - {data?.strIngredient6}</div>
       <div>Ingredient-Seven - {data?.strIngredient1}</div>
       
       
       </div>
       <div className="meal-desc">
       <h2>Recipes</h2>
       <div>{data?.strInstructions}</div>
       </div>
     </div>;
  
	});

	return (
		<div className="App">
			<header className="App-header">
				 <h1>Recipe Finder</h1>
		<form 
			onSubmit={(event) => {
			event.preventDefault();
			setInputValue(inputFieldRef.current.value);
			apiHandler();
			}}>
			<input
			type="text"
			placeholder="Enter the name of the dish"
			ref={inputFieldRef}/>
			<button>Find Meal</button>
          
          <div>Search for dishes.</div>
		</form>
				
				{printDish}
				
			</header>
		</div>
	);
}

export default App;