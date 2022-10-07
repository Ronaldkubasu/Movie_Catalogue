import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
