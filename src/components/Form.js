import { useState } from "react";
export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //This will prevent the basic functionality of the HTMl which will try to reload the page upon form submission

    if (!description) return; //Circuits the function by not returning anything

    const newlyAddedItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    console.log(newlyAddedItem);

    // console.log(items);

    onAddItems(newlyAddedItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>

      <input
        name="description"
        type="text"
        placeholder="(Controlled Elements)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
