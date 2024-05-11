const Flight = ({ singleSegment }) => {
  return (
    <>
      <div className="flex gap-x-2 items-center justify-center ">
        <p> {singleSegment?.carrierCode} </p>
        <p> {singleSegment?.aircraft} </p>
      </div>
    </>
  );
};

export default Flight;
