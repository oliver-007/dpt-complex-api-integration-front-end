import Class from "./Class";
import Fare from "./Fare";
import Departure from "./Departure";
import Route from "./Route";
import Arrival from "./Arrival";
import Aircraft from "./Aircraft";
import Flight from "./Flight";

const FlightOfferTile = ({ singleFinalData, index }) => {
  const { itineraries, fareBasis, price, class: seatClass } = singleFinalData;

  return (
    <tbody
      className={` ${
        index % 2 !== 0 ? "bg-slate-200" : "bg-slate-100"
      } border border-b-rose-300 text-slate-600 `}
    >
      <tr className="text-sm">
        {/* ----- FLIGHT  ----- */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return (
              <div key={index}>
                {singleItineraries?.segments?.map((singleSegment, index) => {
                  return <Flight key={index} singleSegment={singleSegment} />;
                })}
              </div>
            );
          })}
        </td>

        {/* ------ AIRCRAFT ------ */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return (
              <div key={index}>
                {singleItineraries?.segments?.map((singleSegment, index) => {
                  return <Aircraft key={index} singleSegment={singleSegment} />;
                })}
              </div>
            );
          })}
        </td>
        {/* ------ CLASS ----- */}
        <td>
          {seatClass?.map((singleClass, index) => {
            return <Class key={index} singleClass={singleClass} />;
          })}
        </td>

        {/* ------- FARE ------ */}
        <td>
          {fareBasis?.map((singleFare, index) => {
            return <Fare key={index} singleFare={singleFare} />;
          })}
        </td>

        {/* -------- ROUTE  ------- */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return <Route key={index} singleItineraries={singleItineraries} />;
          })}
        </td>

        {/* ------ Departure  ---- */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return (
              <Departure key={index} singleItineraries={singleItineraries} />
            );
          })}
        </td>

        {/* -------- Arrival ------- */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return (
              <Arrival key={index} singleItineraries={singleItineraries} />
            );
          })}
        </td>
        {/* ------- DURATION -------- */}
        <td>
          {itineraries?.map((singleItineraries, index) => {
            return (
              <div key={index}>
                <p> {singleItineraries?.duration} </p>
              </div>
            );
          })}
        </td>
        {/* ------ PRICE ------ */}
        <td>
          <div className="flex flex-col gap-y-1 items-center ">
            <p>{price}</p>
            <button type="button" className="btn">
              select
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default FlightOfferTile;
