import React, { Component } from "react";
import "./rating.scss";

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }

  addRateType = () => {
    const { image, ratingName } = this.props;
    return image === true ? (
      <img className="rating-image" src={ratingName} />
    ) : (
      ratingName
    );
  };

  drawFilledState = () => {
    const { rating, ratingType } = this.props;
    return ((array, i, len) => {
      while (++i <= rating) {
        array.push(
          <div
            id={i}
            style={this.filledRatingColor()}
            className={`filled-class-${ratingType}`}
          />
        );
      }
      return array;
    })([], 0, 10);
  };

  drawNonFilledState = () => {
    const { rating, maxRange } = this.props;
    return ((array, i, len) => {
      while (++i <= maxRange - rating) {
        array.push(
          <div
            id={i}
            style={this.nonFilledRatingColor()}
            className={`no-filled-class-${this.props.ratingType}`}
          />
        );
      }
      return array;
    })([], 0, 10);
  };
  onRatingHover = () => {
    const { rating, maxRange } = this.props;
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

  filledRatingColor = () => {
    const { color } = this.props;
    return {
      border: `1px solid ${color}`,
      "background-color": color
    };
  };

  nonFilledRatingColor = () => {
    return {
      border: `1px solid ${this.props.color}`
    };
  };

  render() {
    const {
      textPosition,
      tooltip,
      rating,
      ratingType,
      maxRange,
      ratingName
    } = this.props;

    const structureClass =
      textPosition === "left"
        ? "rating-structure-left"
        : "rating-structure-right";
    return (
      <div className="rating-parent">
        {textPosition === "right" && (
          <div className="rating-name">{this.addRateType(this.props)}</div>
        )}
        <div class="rating-tooltip">
          {tooltip && (
            <span class="rating-tooltiptext">
              {this.onRatingHover(this.props)}
            </span>
          )}
          <div className={structureClass} totalRating={rating}>
            {textPosition === "left" && this.drawFilledState()}
            {this.drawNonFilledState()}
            {textPosition === "right" && this.drawFilledState()}
          </div>
        </div>
        {textPosition === "left" && (
          <div className="rating-name">{ratingName}</div>
        )}
      </div>
    );
  }
}
