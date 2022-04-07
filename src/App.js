import "./App.css";
import Card from "./Card";
import data from "./scores.json";

function App() {
  const cardData = data[0];
  console.log(cardData);
  return (
    <>
      {data.map((country) => {
        return <Card name={country.name} scores={country.scores} />;
      })}
    </>
  );
}

export default App;
