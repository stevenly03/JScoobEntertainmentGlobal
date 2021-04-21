import React from "react";

export default function Header(props) {
  const handleClick = () => {
    props.handleClick();
  };

  const handleChange = event => {
    props.filterSelections(event.target.value);
  };

  return (
    <div className='header'>
      <p>{props.toggle ? "Munchies Options " : "Chosen Munchies"}</p>
      <button className='button' onClick={props.toggleState}>
        <span>{!props.toggle ? "Munchies Options" : "Chosen Munchies"}</span>
      </button>
      {!props.toggle ? (
        <button onClick={handleClick} className='button'>
          Randomizer 3000
        </button>
      ) : (
        <form onChange={handleChange}>
          <label>Choose a Snack Type:</label>
          <select name='snacks' id='snacks'>
            <option value='All'>All</option>
            {props.foodTypeList()}
          </select>
        </form>
      )}
    </div>
  );
}
