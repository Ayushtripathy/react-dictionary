import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings, LightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "white", borderRadius: 10 }}
          controls
        >
          Your Browser does not support audio element
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightMode ? "#3b5360" : "white",
                  color: LightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example:</b>
                    {def.example}
                  </span>
                )}

                {def.synonyms && (
                  <span>
                    <b>Synonyms:</b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
