import NewsCard from "./NewsCard";

function NewsBoard() {
  return (
    <div className="flex flex-col items-center w-96">
      <NewsCard
        city={"Rennes"}
        techno1={"JavaScript"}
        techno2={"React"}
        title={"Facial recognization app"}
        text={
          "Develops software that verifies the identity of people by combining an identity document with a photo, a selfie and artificial intelligence algorithms."
        }
      />
      <NewsCard
        city={"Montpellier"}
        techno1={"Java"}
        techno2={"Red Hat"}
        title={"BigData for science"}
        text={
          "Develops of data acquisition and post-processing software for transmission electron microscopes."
        }
      />
      <NewsCard
        city={"Brest"}
        techno1={"PHP"}
        techno2={"Symphony"}
        title={"Game recruitment"}
        text={
          "Develops a game prototype to recruit atypical profiles in the digital professions."
        }
      />
      <NewsCard
        city={"Dijon"}
        techno1={"Python"}
        techno2={"Django"}
        title={"Digitalized human emotions"}
        text={
          "Develops software for emotion identification services, using deep learning techniques in combination with physiological data such as pulse sensor and facial recognition."
        }
      />
    </div>
  );
}

export default NewsBoard;
