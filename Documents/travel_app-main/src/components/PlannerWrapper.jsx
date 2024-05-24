import Header from "./Header";
import Footer from "./Footer";
import Planner from "./Planner";
import { useState } from "react";
import Plan from "./Plan";

const PlannerWrapper = () => {
  const [plans, setPlans] = useState([]);
  const addPlan = (date, plan) => {
    setPlans([
      ...plans,
      { date: date, task: plan, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setPlans(plans.map);
  };
  return (
    <>
      <Header />
      <div className="wrapper">
        <Planner addPlan={addPlan} />
        {plans.map((plan, index, date) => (
          <Plan
            task={plan}
            key={index}
            toggleComplete={toggleComplete}
            date={date}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default PlannerWrapper;
