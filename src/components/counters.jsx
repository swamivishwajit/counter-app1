// imrc
import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 100 },
      { id: 8, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 23 },
      { id: 7, value: 0 }
    ]
  };
  handleDelete = counterId => {
    console.log("Event Handler Called" + counterId);
    let counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
