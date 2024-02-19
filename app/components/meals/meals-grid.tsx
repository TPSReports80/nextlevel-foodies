import MealItem from "./meal-item";
import { Meal } from "@/app/libs/types";
import classes from "./meals-grid.module.css";

interface MealsGridProps {
  meals: Meal[];
}
const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealsGrid;
