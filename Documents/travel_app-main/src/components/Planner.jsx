import { useState } from "react";

const Planner = ({ addPlan }) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input != "") {
      addPlan(input, date);
      setInput("");
      console.log(date);
    }
  };
  return (
    <div className="planner">
      <h1>Itinerary Planner</h1>
      <form className="plannerForm" onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        ></input>
        <input
          type="text"
          placeholder="Plan for this day"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Planner;
