import React, { useState } from 'react';
import "./SearchForm.css"


export default function SearchForm({searchString, setSearchString, runSearch}) {

  return (
    <div className="searchForm">
        <input type="text" 
                value={searchString}
                placeholder="Search for Products"
                id="searchInput"
                onChange={ (e) => setSearchString(e.target.value) } 
                />
        <button onClick={runSearch}>Search</button>
    </div>
  )
}