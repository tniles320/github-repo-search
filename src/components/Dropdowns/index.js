function Dropdowns(props) {
  const { dropdowns, setDropdowns } = props;
  return (
    <div className="dropdownContainer">
      <select
        id="language"
        name="language"
        onChange={(e) => {
          setDropdowns({
            ...dropdowns,
            language: e.target.value,
          });
        }}
      >
        <option value="all">All</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      <select
        id="order"
        name="order"
        onChange={(e) => {
          setDropdowns({
            ...dropdowns,
            order: e.target.value,
          });
        }}
      >
        <option value="desc">Most First</option>
        <option value="asc">Least First</option>
      </select>
    </div>
  );
}

export default Dropdowns;
