import React, { useEffect, useState }  from 'react';
import Recipe from './Recipe';
import Footer from './Footer';
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
    <main className="App">
    <header>
      <div className="left-side">
      <div className="logo">Recipes for Deb</div>
      <div className="intro">This is a website I made for Deb to search for recipes from <a href="https://developer.edamam.com/">Edamam API</a>. You can use it as well whenever you feel bored of eating the same food again and again. Just enter bellow the main ingredient you are looking for and hit the search button.</div>
      </div>
      <div className="right-side">
      <form className="search-form" onSubmit={getSearch}>
        <input typeof="text" className="search-bar" placeholder="Chose ingredient" value={search} onChange={updateSearch} autoFocus></input>
        <button typeof="submit" className="search-button">Search</button>
      </form>
      </div>
    </header>
    <section className="cards">
      {recipes.map(recipe => (<Recipe title={recipe.recipe.label} url={recipe.recipe.url} image ={recipe.recipe.image} />
      ))}
      </section>
      <Footer />
    </main>
  );
};

export default App;
