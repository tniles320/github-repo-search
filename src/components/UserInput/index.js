import "./style.css";

function UserInput(props) {
  const { setQuery, handleSearch } = props;

  return (
    <div className="inputContainer">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="userInput"
          placeholder="Hello World..."
          onChange={(e) => setQuery({ query: e.target.value })}
        ></input>
        <button className="searchButton" onClick={(e) => handleSearch(e)}>
          Search
        </button>
      </form>
    </div>
  );
}

export default UserInput;
