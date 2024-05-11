const Route = ({ singleItineraries }) => {
  return (
    <>
      {singleItineraries?.segments?.map((sigSeg, index) => {
        return (
          <div key={index} className="min-w-[70px] ">
            <div>
              {sigSeg?.departure?.iataCode}- {sigSeg?.arrival?.iataCode}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Route;
