import React from 'react'

const Jsxrules = () => {
  return (
    <div>
      <h1>JSX RULES</h1>
      <p> jsx only have one parent element</p>
      <p> jsx must be have closed tags for every element</p>
      <p>jsx must replace this class to className and for to htmlFor </p>

      <form>
        <label htmlFor="Name" className='FormLearning'>Your Name</label>
        <input type="text" name="Name" />
        <button> Submit </button>
      </form>
    </div>
  )
}

export default Jsxrules;
