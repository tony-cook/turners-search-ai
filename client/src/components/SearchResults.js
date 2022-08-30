import React, {useState} from 'react'
import './style.css';

function SearchResults({results, resultsLength}) {

  return (
    <div className="search-results">
        <div className="search-total">
            {resultsLength !== "" ? `Showing results ${resultsLength} - ${resultsLength}` : ""}
        </div>
        {results.map((result, index) => (
            <div key={index} className="result-container">
                <div className="result-question" >{result.question}</div> 
                <br />
                <div className="result-answer"> {result.answer}</div>
                <br />
            </div>
        ))}
    </div>
  )
}

export default SearchResults