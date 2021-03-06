import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   // imageUrl: "https://picsum.photos/200",

  //   // tags: ["Tag1", "Tag2", "Tag3"]
  // };
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  // handleIncrement = product => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && <p>Please create a Tag</p>}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
