import React, { Component } from "react";
import { connect } from "react-redux";
import cancel from "../assets/cancel_answer.svg";
import { deleteName } from "../action";

class SelectedCountry extends Component {
  render() {
    return (
      <div className="card">
        {this.props.data.length > 0 ? (
          this.props.data.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <div>
                {item.data.map((element) => (
                  <p className="selected">
                    <span>{element}</span>
                    <img
                      src={cancel}
                      alt="cancel"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.deleteName({
                          name: item.name,
                          data: element
                        })
                      }
                    />
                  </p>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="novlaue">No Value Selected</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

function mapDispatchToProps(dispatch) {
  return {
    deleteName: (article) => dispatch(deleteName(article))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedCountry);
