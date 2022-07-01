import { useNavigate } from "react-router-dom";
export default function Modal({ visible, onClose }) {
  const navigate = useNavigate();

  const handleOnclose = () => {
    onClose();
  };
  const handleOnClick = () => {
    navigate("/");
  };
  if (!visible) return null;
  return (
    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white w-30 h-50 md:w-[40%] px-16 py-14 rounded-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mt-2 h-16 w-16 text-green-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-xl mb-4 font-bold text-primary">Post sent!</p>

        <button
          onClick={handleOnClick}
          className="bg-green-500 px-8 py-2 ml-2 p-2 mx-4 rounded-md text-md w-30 text-white font-semibold"
        >
          Ok
        </button>
        <button
          onClick={handleOnclose}
          className="bg-red-500 px-5 py-2 ml-2 p-2 mx-4 rounded-md text-md w-30 text-white font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
}
