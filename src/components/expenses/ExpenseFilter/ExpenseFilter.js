import React from "react";

class ExpenseFilter extends React.Component {
  constructor() {
    super();
    console.log("CONSTRUCTOR");
    this.state = {
      selectedYear: "2019",
    };

    // const [state, setState] = useState('2019')
  }

  componentDidMount() {
    console.log("COMP DID MOUNT");
  }
  componentDidUpdate() {
    console.log("COMP DID UPDATE");
  }
  componentWillUnmount() {
    console.log("COMP WILL UNMOUNT");
  }

  selectedYearChangeHandler = (event) => {
    this.setState({
      selectedYear: event.target.value,
    });
  };
  render() {
    console.log("RENDER");
    return (
      <select
        className="form-control"
        value={this.state.selectedYear}
        onChange={this.selectedYearChangeHandler}
      >
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    );
  }
}

export default ExpenseFilter;
