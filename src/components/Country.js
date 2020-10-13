import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../data";
import { addName, deleteName } from "../action";

class Country extends Component {
  handleChange = (e, name, data, check) => {
    if (e.target.checked) {
      this.props.addName({ name: name, data: data, check: check });
    } else {
      this.props.deleteName({ name: name, data: data });
    }
  };
  render() {
    return (
      <div className="card">
        {data.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
            <div>
              {item.data.map((element, j) => (
                <p key={i + j}>
                  {console.log(this.props.checkedList)}
                  <input
                    type="checkbox"
                    checked={
                      this.props.checkedList["" + i + j] === element
                        ? true
                        : false
                    }
                    onChange={(e) =>
                      this.handleChange(e, item.name, element, "" + i + j)
                    }
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
    datap: state.data,
    checkedList: state.checkedList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addName: (article) => dispatch(addName(article)),
    deleteName: (article) => dispatch(deleteName(article))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Country);
