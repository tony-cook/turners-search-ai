import React, {useState} from 'react'
import axios from 'axios';
import './style.css';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function Content() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [resultsLength, setResultsLength] = useState("")
  
  function handleSearch (e) {
    e.preventDefault()
    const requestData = {query: query}
    
    axios.post(`http://localhost:8080/faqs`, requestData)
      .then(resp => resp.data)
      .then(result => result)
      .then(res => {
          const resultsArray = res[1]
          const resultsTotal = res[0]
          setResults(resultsArray)
          setResultsLength(resultsTotal)
          console.log(results)

          if (resultsLength !== resultsTotal) {
            setResults(resultsArray)
            setResultsLength(resultsTotal) 
          }
      })
  }

  function onChange(event) {
    setQuery(event.target.value)
  }

  
  return (
    <div className="content">
      <a className="page-link" href="https://www.turners.co.nz/?">Home</a> 
      <span className="seperator"> > </span>
      <a className="page-link" href="https://www.turners.co.nz/?">Cars</a>
      <span className="seperator"> > </span>
      <a className="page-link" href="https://www.turners.co.nz/?">How to Buy</a>
      <span className="seperator"> > </span>
      <a className="page-link" href="https://www.turners.co.nz/?">How to Buy a Car FAQs</a>
      <div className="heading1">How to Buy a Car FAQs </div>
      <div className="heading2">Frequently Asked Questions about Online Auctions </div>
      <div className="heading3">
        Ask a question or provide a search term then we work our magic and show you only the most related questions.
      </div>
      <SearchInput onChange={onChange} handleSearch={handleSearch}/>
      <SearchResults results={results} resultsLength={resultsLength}/>
    </div>
  )
}

export default Content