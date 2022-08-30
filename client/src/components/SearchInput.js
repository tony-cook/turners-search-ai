import React from 'react'



function SearchInput({onChange, handleSearch}) {
    

  return (
    <div className="search-input">
        <form>
        <input className="search-bar"
            type="text"
            placeholder="Ask a question or provide a search term here..."
            name="s" 
            onChange={onChange}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
        </form>
    </div>
  )
}

export default SearchInput