const Arrival = ({ singleItineraries }) => {
  return (
    <div className="min-w-[200px]">
      {singleItineraries?.segments?.map((singleSegment, index) => {
        return (
          <div key={index}>
            <p> {singleSegment?.arrival?.at} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Arrival;
