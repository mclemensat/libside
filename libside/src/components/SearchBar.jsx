import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";

function SearchBar() {
  const [savedSearch, setSavedSearch] = useState([]);
  const [firstSearchValue, setFirstSearchValue] = useState("");
  const [secondSearchValue, setSecondSearchValue] = useState("");
  const [thirdSearchValue, setThirdSearchValue] = useState("");
  const [FourthSearchValue, setFourthSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/research");
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
    { label: "JavaScript", value: "JavaScript" },
    { label: "PHP", value: "PHP" },
    { label: "Java", value: "Java" },
    { label: "C++", value: "C++" },
    { label: "Ruby", value: "Ruby" },
  ];
  const secondOptions = [
    { label: "React", value: "React" },
    { label: "Vue", value: "Vue" },
    { label: "Angular", value: "Angular" },
    { label: "Node", value: "Node" },
    { label: "Next", value: "Next" },
  ];
  return (
    <div className="flex flex-col w-9/10 m-4 rounded-xl backdrop-blur-xl ring-1 ring-gray-300">
      <form className="text-center p-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-center">
          <div className="text-black mr-6  w-1/4">
            <label htmlFor="first" className="text-xl text-center inline-block p-0 h-16">
              Select language
            </label>
            <Select
              className="w-auto"
              placeholder="Choose"
              options={firstOptions}
              name="first"
              onChange={(e) => setFirstSearchValue(e.value)}
            />
          </div>
          <div className="text-black mr-6 w-1/4">
            <label htmlFor="second" className="text-xl text-center block h-16">
              Select Library
            </label>
            <Select
              className="w-auto"
              placeholder="Choose"
              options={secondOptions}
              name="second"
              onChange={(e) => setSecondSearchValue(e.value)}
            />
          </div>
          <div className="flex flex-col text-black mr-6 w-1/3">
            <label htmlFor="third" className="text-xl block text-center align-text-bottom  h-16">
              Researched Component
            </label>
            <input
              className="
              block
              w-auto
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:border-2 focus:bg-white focus:border-blue-500  focus:outline-none
            "
              id="component name researched"
              name="component name researched"
              onChange={(e) => setThirdSearchValue(e.target.value)}
              type="text"
              placeholder="Component name"
              value={thirdSearchValue}
            />{" "}
          </div>
        </div>
        <input
          className="drop-shadow-lg border-2 border-[#E1F5F8] bg-[#E1F5F8] text-black rounded-xl p-1 px-3 mt-6 hover:bg-gray-200 hover:text-gray-900 cursor-pointer"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
