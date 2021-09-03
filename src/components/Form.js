import React, { Component } from "react";

class Form extends Component {
  state = {
    amount: "",
    term: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { amount, term } = this.state;
    this.props.loanInformation(amount, term);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: Number(value),
    });
  };

  validateForm = () => {
    const { amount, term } = this.state;

    const notValid = !amount || !term;
    return notValid;
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='row'>
          <label>Amount</label>
          <input
            onChange={this.handleChange}
            id='name'
            type='number'
            name='amount'
            placeholder='Eg:512'
            className='u-full-width'
          />
        </div>
        <div>
          <label>Months to repay</label>
          <select
            name='term'
            className='u-full-width'
            onChange={this.handleChange}
          >
            <option value=''>Select</option>
            <option value='3'>3 months</option>
            <option value='6'>6 months</option>
            <option value='12'>12 months</option>
            <option value='24'>24 months</option>
          </select>
        </div>
        <div>
          <input
            disabled={this.validateForm()}
            type='submit'
            value='Calculate'
            className='u-full-width'
            style={{ backgroundColor: "#5e8086", color: "white" }}
          />
        </div>
      </form>
    );
  }
}

export default Form;
