import Country from "./Country";
import Table from "./Table";

const Card = (props) => {
  return (
    <>
      <Country country={props.name} />
      <Table data={props.scores} />
    </>
  );
};

export default Card;
