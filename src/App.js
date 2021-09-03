import React from "react";
import "./normalize.css";
import "./skeleton.css";
import Form from "./components/Form";
import Helper from "./Helper";
import Abacus from "./abacus.png";
import Result from "./components/Result";
import Message from "./components/Message";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = {
    amount: "",
    term: "",
    total: "",
    loading: false,
  };
  loanInformation = (amount, term) => {
    const total = Helper(amount, term);
    this.setState(
      {
        loading: true,
      },
      () => {
        setTimeout(() => {
          this.setState({ amount, term, total, loading: false });
        }, 3000);
      }
    );
  };
  render() {
    const { amount, term, total, loading } = this.state;

    let component;
    if (total === "" && !loading) {
      component = <Message />;
    } else if (loading) {
      component = <Spinner />;
    } else {
      component = <Result total={total} amount={amount} term={term} />;
    }
    return (
      <>
        <h1>Loan Abacus</h1>
        <div className='container'>
          <img
            src={Abacus}
            alt='abacus'
            style={{ height: "50px", width: "50px", zIndex: "100" }}
          />
          <Form loanInformation={this.loanInformation} />
          <div className='messages'>{component}</div>
        </div>
      </>
    );
  }
}

export default App;
