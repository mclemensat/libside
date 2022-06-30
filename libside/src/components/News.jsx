
export default function News() {
    return (
     
        <div className="text-justify mx-auto">
          <h3 className="mt-8 font-semibold text-center">News</h3>
          <div className="flex w-full py-4 border-b border-gray-300 ">
            <div className="flex flex-grow ml-2">
              <div className="flex text-sm">
                <span className="font-semibold">Rennes</span>
              </div>
              <p className="mt-1 text-sm flex-srink p-5">
              develops software that verifies the identity of people by combining an identity document with a photo, a selfie and artificial intelligence algorithms.
              </p>
            </div>
          </div>
          <div className="flex w-full py-4 border-b border-gray-300">
            <div className="flex flex-grow ml-2">
              <div className="flex text-sm">
                <span className="font-semibold">Montpellier</span>
              </div>
              <p className="mt-1 text-sm flex-srink p-5">
              develops of data acquisition and post-processing software for transmission electron microscopes.
              </p>
            </div>
          </div>
          <div className="flex w-full py-4 border-b border-gray-300">
            <div className="flex flex-grow ml-2">
              <div className="flex text-sm">
                <span className="font-semibold">Brest</span>
              </div>
              <p className="mt-1 text-sm flex-srink p-5">
              develops a game prototype to recruit atypical profiles in the digital professions
              </p>
            </div>
          </div>
          <div className="flex w-full py-4 border-b border-gray-300">
            <div className="flex  flex-grow ml-2">
              <div className="flex text-sm">
                <span className="font-semibold">Dijon</span>
              </div>
              <p className=" mt-1 text-sm flex-srink p-5">
              develops software for emotion identification services, using deep learning techniques in combination with physiological data such as pulse sensor and facial recognition
              </p>
            </div>
          
          </div>
        </div>
      
    );
  }