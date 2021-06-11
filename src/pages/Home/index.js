import { useState } from "react";
import UserInput from "../../components/UserInput";
import Dropdowns from "../../components/Dropdowns";
import API from "../../utils/API";

//need to write function to replace spaces with + in query

function Home() {
  const [query, setQuery] = useState();
  const [dropdowns, setDropdowns] = useState({
    language: "all",
    order: "desc",
  });

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(dropdowns);

    API.getRepo(query.query, dropdowns).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="homeContainer">
      <UserInput handleSearch={handleSearch} setQuery={setQuery} />
      <Dropdowns dropdowns={dropdowns} setDropdowns={setDropdowns} />
    </div>
  );
}

export default Home;
