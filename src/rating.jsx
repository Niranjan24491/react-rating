import React, { Component } from "react";
import "./rating.scss";

class Rating extends Component {
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
    return ((rows, i, len) => {
      while (++i <= rating) {
        rows.push(
          <div
            id={i}
            style={this.filledRatingColor(this.props)}
            className={`filled-class-${ratingType}`}
          />
        );
      }
      return rows;
    })([], 0, 10);
  };

  drawNonFilledState = () => {
    return ((rows, i, len) => {
      while (++i <= maxRange - rating) {
        rows.push(
          <div
            id={i}
            style={this.nonFilledRatingColor(this.props)}
            className={`no-filled-class-${this.props.ratingType}`}
          />
        );
      }
      return rows;
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
      textPosition = "rating-structure-right",
      tooltip,
      rating,
      ratingType,
      maxRange,
      ratingName
    } = this.props;
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

export default Rating;
