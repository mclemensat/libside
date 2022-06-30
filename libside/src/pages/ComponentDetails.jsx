export default function ComponentDetails() {
  return (
    <div>
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <img
                    className="w-20 h-20"
                    src="./src/assets/react_original_logo_icon_146374.png"
                    alt="avatar1"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                    Project:{" "}
                    <span className="text-lg font-light">Bagarr.iO </span>
                  </h2>
                  <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                    Theme:{" "}
                    <span className="text-lg font-light">Tournament </span>
                  </h2>
                  <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                    Component:{" "}
                    <span className="text-lg font-light">Random button </span>
                  </h2>
                  <h2 className="text-xl font-extrabold tracking-tight text-gray-900">
                    Feature:{" "}
                    <span className="text-lg font-light">Random avatar </span>
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Component created by the Bordeaux team. It allows button
                    click to generate different avatars.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mb-2">
                  Preview:
                </h2>
                <blockquote>
                  <div className="flex flex-col-1">
                    <img
                      className="w-44 h-44"
                      src="./src/assets/avatar-1.png"
                      alt="avatar1"
                    />
                    <img
                      className="w-40 h-40"
                      src="./src/assets/avatar-2.png"
                      alt="avatar2"
                    />
                    <img
                      className="w-40 h-40"
                      src="./src/assets/avatar-3.png"
                      alt="avatar 3"
                    />
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3"></div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <h2 className="text-xl font-extrabold tracking-tight text-gray-900 mb-2">
                  Code:
                </h2>
                <img
                  className="w-20 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="./src/assets/code.png"
                  alt="Code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
