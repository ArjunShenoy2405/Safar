export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Let's get started🐱‍🏍</em>
      </p>
    );
  }

  const numItems = Number(items.length);
  const numPacked = Number(items.filter((item) => item.packed === true).length);
  let packedPercentage = 0;
  if (numItems !== 0) {
    packedPercentage = Math.round((numPacked * 100) / numItems);
  }

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? `You got everything in place! Let's go🚀`
          : `You have ${numItems} items on your list, and you have already packed${" "}
          ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}

//
//
//
/* My Logic
  function Item({ item }) {
    const [isPacked, setIsPacked] = useState(false);
  
    function handleCancel() {
      setIsPacked((x) => true);
    }
  
    return (
      <li>
        <span style={isPacked ? { textDecoration: "line-through" } : {}}>
          {item.quantity} - {item.description}
        </span>
        <button onClick={handleCancel}>❌</button>
      </li>
    );
  }
  
  function Stats() {
    return (
      <footer className="stats">
        <em>
          You have 4 items on your list, and you have already packed 3 (75%)
        </em>
      </footer>
    );
  }
  */
