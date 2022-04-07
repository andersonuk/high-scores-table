const Table = (props) => {
  return (
    <table>
      {props.data.map((value, index) => {
        return (
          <tr key={index}>
            <td key={index}>{value.n}</td>
            <td>{value.s}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default Table;
