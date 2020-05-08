import React, { useEffect, useState }  from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "f1f41a31";
  const APP_KEY = "7f73723f3607f39e1d2261f1a07cb6c1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect (() => {
     getRecipes();
   }, [query]);

    const getRecipes = async () => {
      const response = await fetch (
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
    };


  return (
    <div className="App">
      <h1>Recipes for Deb!</h1>
      <p className="intro">This is a website I made for Deb to search for recipes from Edamam API. You can use it as well whenever you feel bored of eating the same food again and again. Just enter bellow the main ingredient you are looking for and hit the search button.</p>
      <form className="search-form" onSubmit={getSearch}>
        <input typeof="text" className="search-bar" value={search} onChange={updateSearch}></input>
        <button typeof="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (<Recipe title={recipe.recipe.label} url={recipe.recipe.url} image ={recipe.recipe.image} />
      ))}
    </div>
  );
};

export default App;
