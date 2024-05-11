const Class = ({ singleClass }) => {
  return (
    <>
      <div className="flex flex-col">
        {singleClass?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default Class;
