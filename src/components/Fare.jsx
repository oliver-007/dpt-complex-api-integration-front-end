const Fare = ({ singleFare }) => {
  return (
    <>
      <div>
        {singleFare?.map((item, index) => {
          return <p key={index}> {item} </p>;
        })}
      </div>
    </>
  );
};

export default Fare;
