/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function BackButton(props) {
  const { setSelectedResult } = props;
  const history = useHistory();

  // resets selectedResult and links to home page
  const handleBackButton = useCallback(() => {
    setSelectedResult();
    history.push("/");
  }, [history]);

  return (
    <div className="backButtonContainer">
      <button className="backButton" onClick={handleBackButton}>
        &lArr; Back
      </button>
    </div>
  );
}

export default BackButton;
