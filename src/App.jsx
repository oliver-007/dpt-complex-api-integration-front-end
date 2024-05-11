import React, { useEffect, useState } from "react";
import data from "../data/data";
import FlightOfferTile from "./components/FlightOfferTile";
import SearchForm from "./components/SearchForm";

const tableHeads = [
  "flight",
  "aircraft",
  "class",
  "fare",
  "route",
  "departure",
  "arrival",
  "duration",
  "price",
];

const App = () => {
  const [finalData, setFinalData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  console.log(showResult);

  useEffect(() => {
    if (data) {
      // ----- DATA PARSING  ----
      const parsedData = JSON.parse(data);

      parsedData &&
        parsedData.flightOffer &&
        setFinalData(parsedData.flightOffer);
    } else null;
  }, []);

  // ----- HANDLE SEARCH FUNC  -----
  const handleSearch = () => {
    setShowResult((prevState) => !prevState); // good practice : don't mutate the state directly
  };
  return (
    <div className=" py-5 px-4 max-w-[1150px] ">
      {/* ----- INPUT FIELDS ----- */}
      <div className="">
        <hr className=" bg-blue-600 mb-4 h-[2px] " />
        <SearchForm />
        <hr className=" bg-blue-600 mt-4 h-[2px] " />

        <div className="flex items-center h-[50px] justify-between ">
          {/* ----- EXTRA OPTIONS ----- */}
          <div className="flex  gap-x-2">
            <input type="checkbox" name="extra__option" id="extra__option" />
            <label htmlFor="extra__option">Extra Options</label>
          </div>

          {/* ------- ENVIRONMENT INPUT ------ */}
          <div className="flex gap-x-4 items-center ">
            <p> Environment </p>
            <div>
              <input type="radio" name="environment" id="dummy" />
              <label htmlFor="dummy"> Dummy</label>
            </div>
            <div>
              <input type="radio" name="environment" id="pdt" />
              <label htmlFor="pdt"> PDT</label>
            </div>
          </div>

          {/* ------- SEARCH BTN ------- */}
          <div className="">
            <button onClick={handleSearch} type="submit" className="btn py-1 ">
              search
            </button>
          </div>
        </div>

        <hr className=" bg-blue-600 h-[2px] " />
      </div>

      {/* ------ DISPLAY SEARCH RESULT / DUMMY DATA ------- */}
      <div className=" py-5 ">
        <table className={` text-center w-full `}>
          {/* ------ TABLE HEADES ----- */}
          <thead className=" bg-slate-300 uppercase text-sm text-slate-600 tracking-wider ">
            <tr className=" ">
              {tableHeads?.map((singleHead, index) => {
                return (
                  <th key={index} className=" h-[50px]  ">
                    {" "}
                    {singleHead}{" "}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* -------- TABLE BODY  ------- */}
          {showResult &&
            finalData.length > 0 &&
            finalData.map((singleFinalData, index) => {
              return (
                <FlightOfferTile
                  key={index}
                  index={index}
                  singleFinalData={singleFinalData}
                />
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default App;
