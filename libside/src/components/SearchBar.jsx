import { useState } from "react";
import Select from "react-select";

function SearchBar() {
  const [savedSearch, setSavedSearch] = useState([]);
  const [firstSearchValue, setFirstSearchValue] = useState("");
  const [secondSearchValue, setSecondSearchValue] = useState("");
  const [thirdSearchValue, setThirdSearchValue] = useState("");
  const [FourthSearchValue, setFourthSearchValue] = useState("");

  console.log(savedSearch);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSavedSearch([
      firstSearchValue,
      secondSearchValue,
      thirdSearchValue,
      FourthSearchValue,
    ]);

    setFirstSearchValue("");
    setSecondSearchValue("");
    setThirdSearchValue("");
    setFourthSearchValue("");
  };

  const firstOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const secondOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const thirdOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  const fourthOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];
  return (
    <div className="flex flex-col border-2 border-black w-fit rounded-lg">
      <form className="text-center justify-center p-4" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="text-black mr-6">
            <label htmlFor="first" className="text-xl">
              First Options
            </label>
            <Select
              className="w-64"
              placeholder="Choose"
              options={firstOptions}
              name="first"
              onChange={(e) => setFirstSearchValue(e.value)}
            />
          </div>
          <div className="text-black mr-6">
            <label htmlFor="second" className="text-xl">
              Second Options
            </label>
            <Select
              className="w-64"
              placeholder="Choose"
              options={secondOptions}
              name="second"
              onChange={(e) => setSecondSearchValue(e.value)}
            />
          </div>
          <div className="text-black mr-6">
            <label htmlFor="third" className="text-xl">
              Third Options
            </label>
            <Select
              className="w-64"
              placeholder="Choose"
              options={thirdOptions}
              name="third"
              onChange={(e) => setThirdSearchValue(e.value)}
            />
          </div>
          <div className="text-black mr-6">
            <label htmlFor="fourth" className="text-xl">
              Fourth Options
            </label>
            <Select
              className="w-64"
              placeholder="Choose"
              options={fourthOptions}
              name="fourth"
              onChange={(e) => setFourthSearchValue(e.value)}
            />
          </div>
        </div>
        <input
          className="drop-shadow-lg border-2 border-[#E1F5F8] bg-[#E1F5F8] text-black rounded-xl p-1 px-3 mt-3 hover:bg-gray-200 hover:text-gray-900 cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
