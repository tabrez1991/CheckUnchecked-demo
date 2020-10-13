import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../data";
import { addName, deleteName } from "../action";

class Country extends Component {
  handleChange = (e, name, data) => {
    console.log(e.target.value);
    if (e.target.checked) {
      this.props.addName({ name: name, data: data });
    } else {
      this.props.deleteName({ name: name, data: data });
    }
  };
  render() {
    // console.log(this.props.datap);
    return (
      <div className="card">
        {data.map((item, i) => (
          <div>
            <h3>{item.name}</h3>
            <div>
              {item.data.map((element, j) => (
                <p>
                  <input
                    type="checkbox"
                    onChange={(e) => this.handleChange(e, item.name, element)}
                  />
                  <span style={{ marginLeft: "20px" }}>{element}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    datap: state.data
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addName: (article) => dispatch(addName(article)),
    deleteName: (article) => dispatch(deleteName(article))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Country);
