export default function Four() {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              {index}: {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
