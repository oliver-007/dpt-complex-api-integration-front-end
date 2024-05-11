const Departure = ({ singleItineraries }) => {
  return (
    <div className=" min-w-[200px] ">
      {singleItineraries?.segments?.map((sigSeg, index) => {
        return (
          <div key={index} className="">
            <p>{sigSeg?.departure?.at}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Departure;
