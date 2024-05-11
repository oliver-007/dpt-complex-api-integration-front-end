const SearchForm = () => {
  return (
    <div className="space-x-2 ">
      <input
        className="border border-slate-400 w-[120px] py-1 px-2 outline-slate-400 "
        type="text"
        placeholder="LHR"
      />
      <input
        className="border border-slate-400 w-[120px] py-1 px-2 outline-slate-400"
        type="text"
        placeholder="CDG"
      />
      <input
        type="date"
        className="border border-slate-400  py-1 px-2 outline-slate-400 text-sm "
      />
      <select
        name="day-"
        id="day-"
        className="border border-slate-400  py-1 px-2 outline-slate-400 text-sm"
      >
        <option value="Day-"> Day - </option>
      </select>
      <select
        name="day+"
        id="day+"
        className="border border-slate-400  py-1 px-2 outline-slate-400 text-sm"
      >
        <option value="Day-"> Day + </option>
      </select>
      <select
        name="anytime"
        id="anytime"
        className="border border-slate-400  py-1 px-2 outline-slate-400 text-sm"
      >
        <option value="anytime"> Any Time</option>
      </select>
      <span className="font-bold"> + </span>

      <select
        name="ADT"
        id="ADT"
        className="border border-slate-400  py-1 px-2 outline-slate-400 text-sm"
      >
        <option value="ADT"> ADT</option>
      </select>

      <select
        name="1"
        id="1"
        className="border border-slate-400 py-1 px-2 outline-slate-400 text-sm"
      >
        <option value="anytime"> 1</option>
      </select>
      <span className="font-bold"> + </span>
    </div>
  );
};

export default SearchForm;
