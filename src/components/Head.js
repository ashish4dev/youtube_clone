import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState("");

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call'
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //if data is there in cache set it in suggestions without making api call
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer); //here we are clearing the previous timer if key is pressed in between the timer
    };
  }, [searchQuery]); //everytime search query changes make an Api call

  /**
   * key-i
   *  - render the component
   *  - call useEffect();
   * - start a timer -> make API call after 200ms
   *
   * key-ip
   * - destroy the component-> it will call useEffect return method also
   * - re-render the component
   * - call useEffect()
   * - start a timer -> make API call after 200ms
   *
   */

  const getSearchSuggestions = async () => {
    console.log("API call" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const fetchSearchResult = () => {
    console.log("type ahead clicked");
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        ></img>
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
            className="px-5 w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  onMouseDown={() => {
                    console.log("I worked!!");
                  }}
                  key={s}
                  className="py-2 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
