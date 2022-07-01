import { Link } from "react-router-dom";

import ResearchCard from "@components/ResearchCard";
import SearchBar from "@components/SearchBar";

import ReactLogo from "@assets/react_original_logo_icon_146374.png";

function ResearchPage({}) {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-8 mb-12 text-4xl drop-shadow-lg uppercase text-center text-primary">
          Research Results:
        </h1>
      <SearchBar />

      <div className="w-[54rem]">
        <Link to="/component-details">
        <ResearchCard
          imgSrc={ReactLogo}
          agencyLocation={"Starsbourg"}
          componentName={"Random real person Avatar / React"}
          componentDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab culpa voluptatum minima numquam facere doloribus quasi quas quos recusandae est veritatis eveniet, officiis similique minus aut perspiciatis tenetur suscipit!"
          }
          creationDate={"1 Weeks ago"}
          creatorName={"Francis Gerard, Nolwen Moutarde"}
          />
          </Link>
        <ResearchCard
          imgSrc={ReactLogo}
          agencyLocation={"Nantes"}
          componentName={"Funny Avatar Generator for React"}
          componentDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab culpa voluptatum minima numquam facere doloribus quasi quas quos recusandae est veritatis eveniet, officiis similique minus aut perspiciatis tenetur suscipit!"
          }
          creationDate={"3 Weeks ago"}
          creatorName={"Joffrey Chevalier"}
        />
        <ResearchCard
          imgSrc={ReactLogo}
          agencyLocation={"München"}
          componentName={"Random animals avatar Generator for React"}
          componentDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab culpa voluptatum minima numquam facere doloribus quasi quas quos recusandae est veritatis eveniet, officiis similique minus aut perspiciatis tenetur suscipit!"
          }
          creationDate={"3 Month ago"}
          creatorName={"Hans Fraouler, Ilda Reischun, Viktor Zimmer"}
        />
        <ResearchCard
          imgSrc={ReactLogo}
          agencyLocation={"Brussels"}
          componentName={"React game characters generator"}
          componentDescription={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab culpa voluptatum minima numquam facere doloribus quasi quas quos recusandae est veritatis eveniet, officiis similique minus aut perspiciatis tenetur suscipit!"
          }
          creationDate={"7 Month ago"}
          creatorName={"Elena Brod"}
        />
      </div>
    </div>
  );
}

export default ResearchPage;
