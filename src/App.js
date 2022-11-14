import './App.css';

import romanNumeralsMap from './data/RomanNumeralsMap'

import { useState } from 'react';

function App() {
  const [romanNumeral, setRomanNumeral] = useState('')

  const captureInput = (event) => {
    event.preventDefault()
    let numberToConvert = event.target[0].value;
    setRomanNumeral(arabicToRomanNumberals(numberToConvert))
  }

  function arabicToRomanNumberals (number) {
    number = parseInt(number, 10)
    let numAsString = number.toString()
    if (numAsString.length === 1) {
        return romanNumeralsMap.oneDigit[numAsString] || ""
    } else if (numAsString.length === 2) {
        return romanNumeralsMap.twoDigits[numAsString[0]] + romanNumeralsMap.oneDigit[numAsString[1]] || ""
    } else if (numAsString.length === 3) {
        return romanNumeralsMap.threeDigits[numAsString[0]] + romanNumeralsMap.twoDigits[numAsString[1]] + romanNumeralsMap.oneDigit[numAsString[2]] || ""
    }
}


  return (
    <>
      <section className="result">
        {romanNumeral ? <span className="romanNumeral">{romanNumeral}</span> : <span className="defaultmsg">Your Roman Numeral will appear here</span>}
      </section>
      <form onSubmit={(event) => captureInput(event)}>
        <input type="number" placeholder="Enter a number here..." className="input">
        </input>
        <input type="submit" value="Convert" className="submit">
        </input>
      </form>
    </>
  );
}

export default App;
