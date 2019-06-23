import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value
    // imageUrl: "https://picsum.photos/200",

    // tags: ["Tag1", "Tag2", "Tag3"]
  };
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

  handleIncrement = product => {
    console.log(JSON.stringify(product));
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("Props" + this.props);
    return (
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() =>
            this.handleIncrement({ id: 1012335, name: "Vishwajit" })
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && <p>Please create a Tag</p>}
        {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
