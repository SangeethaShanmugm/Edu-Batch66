import { Link } from "react-router-dom";
import "./QuickSearch.css";

const QuickDisplay = (props) => {
  const listMeal = ({ mealData }) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
          <Link to={`/listing/${item.mealtype_id}`}>
            <div class="tileContainer">
              <div class="tileComponent1">
                <img src={item.meal_image} alt="breakfast" />
              </div>
              <div class="tileComponent2">
                <div class="componentHeading">{item.mealtype}</div>
              </div>
              <div class="componentSubHeading">{item.content}</div>
            </div>
          </Link>
        );
      });
    }
  };

  return <div class="mainTileContainer">{listMeal(props)}</div>;
};

export default QuickDisplay;
