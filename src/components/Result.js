import React from "react";

function Result(props) {
  return (
    <div className='u-full-width result'>
      <h2>Results:</h2>
      <p>The Loan Amount: ${props.amount}</p>
      <p>Months To Repay: {props.term}</p>
      <p>Total Payment: ${Math.floor(props.total)}</p>
      <p>Monthly Payment: ${Math.floor(props.total / props.term)}</p>
    </div>
  );
}

export default Result;
