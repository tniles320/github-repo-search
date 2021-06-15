import "./style.css";

function Dropdowns(props) {
  const { dropdowns, setDropdowns } = props;
  return (
    <div className="dropdownContainer">
      <div className="languageContainer dropdown">
        <label htmlFor="language" className="label gainsboro">
          Language
        </label>
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
          <option value="java">Java</option>
          <option value="typescript">TypeScript</option>
          <option value="c#">C#</option>
          <option value="php">PHP</option>
          <option value="c++">C++</option>
          <option value="c">C</option>
          <option value="shell">Shell</option>
          <option value="ruby">Ruby</option>
        </select>
      </div>
      <div className="orderContainer dropdown">
        <label htmlFor="order" className="label gainsboro">
          Stars
        </label>
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
    </div>
  );
}

export default Dropdowns;
