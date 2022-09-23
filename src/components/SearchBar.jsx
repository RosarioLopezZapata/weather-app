import React from "react";
import { Search, Click } from "./SearchBar.styles";

export default function SearchBar({onSearch}) {

  function handleOnSearch(event){
    event.preventDefault();
    if (typeof onSearch === 'function'){
      const input = document.getElementById('search-bar-input');
      onSearch(input.value);
      input.value="";
    }
  }
  return (
    <Search>
   <form onSubmit={handleOnSearch}>
     
     <input
        placeholder="Search city..."
        id='search-bar-input'
      />
      <Click type='submit'>Search</Click>
      
   </form>
   </Search>
  );
}
