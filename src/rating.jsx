import React, { Component } from "react";
import "./rating.scss";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingStructureClass: "rating-structure-right"
    };
  }

  addRateType = props => {
    if (props.image === true) {
      return <img className="rating-image" src={props.ratingName} />;
    } else {
      return props.ratingName;
    }
  };

  onRatingHover = props => {
    const rating = props.rating;
    const maxRange = props.maxRange;
    if (maxRange === 10) {
      if (rating > 0 && rating <= 4) {
        return "Beginner";
      } else if (rating > 4 && rating <= 6) {
        return "Intermediate";
      } else if (rating > 6 && rating <= 9) {
        return "Advanced";
      } else if (rating > 9) {
        return "Expert";
      }
    } else {
      if (rating > 0 && rating <= 2) {
        return "Beginner";
      } else if (rating > 2 && rating <= 3) {
        return "Intermediate";
      } else if (rating > 3 && rating <= 4) {
        return "Advanced";
      } else if (rating > 4) {
        return "Expert";
      }
    }
  };

  filledRatingColor = props => {
    return {
      border: `1px solid ${props.color}`,
      "background-color": props.color
    };
  };

  nonFilledRatingColor = props => {
    return {
      border: `1px solid ${props.color}`
    };
  };

  render() {
    let structureClass = this.state.ratingStructureClass;
    if (this.props.textPosition === "left") {
      structureClass = "rating-structure-left";
    }
    return (
      <div className="rating-parent">
        {this.props.textPosition === "right" && (
          <div className="rating-name">{this.addRateType(this.props)}</div>
        )}
        <div class="rating-tooltip">
          {this.props.tooltip && (
            <span class="rating-tooltiptext">
              {this.onRatingHover(this.props)}
            </span>
          )}
          <div className={structureClass} totalRating={this.props.rating}>
            {this.props.textPosition === "left" &&
              ((rows, i, len) => {
                while (++i <= this.props.rating) {
                  rows.push(
                    <div
                      id={i}
                      style={this.filledRatingColor(this.props)}
                      className={`filled-class-${this.props.ratingType}`}
                    />
                  );
                }
                return rows;
              })([], 0, 10)}
            {((rows, i, len) => {
              while (++i <= this.props.maxRange - this.props.rating) {
                rows.push(
                  <div
                    id={i}
                    style={this.nonFilledRatingColor(this.props)}
                    className={`no-filled-class-${this.props.ratingType}`}
                  />
                );
              }
              return rows;
            })([], 0, 10)}
            {this.props.textPosition === "right" &&
              ((rows, i, len) => {
                while (++i <= this.props.rating) {
                  rows.push(
                    <div
                      id={i}
                      style={this.filledRatingColor(this.props)}
                      className={`filled-class-${this.props.ratingType}`}
                    />
                  );
                }
                return rows;
              })([], 0, 10)}
          </div>
        </div>
        {this.props.textPosition === "left" && (
          <div className="rating-name">{this.props.ratingName}</div>
        )}
      </div>
    );
  }
}

export default Rating;
