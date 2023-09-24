import React from 'react'
import "./filterproduct.css"
function Filterproduct(props) {
    function changed(e){
      props.filterValue(e.target.value)
    }
  return (
    <div className='filter-area'>
        <select name="isAvailable" onChange={changed}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>
  )
}

export default Filterproduct;