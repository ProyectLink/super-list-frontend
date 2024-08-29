import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-dvh min-w-dvw">
        <img
          className="object-cover w-screen h-screen overflow-hidden"
          src="/giphy_owqs3l.gif"
          alt=""
        />

        <div className="absolute left-0 flex flex-col w-full top-4">
          <img className="h-10" src="/logo-white.svg" />

          <p className="text-5xl font-black text-center text-white mt-60">
            Page not found
          </p>

          <button
            className="py-2 bg-[#F84F39] text-white rounded-full px-3 hover:bg-orange-600 w-fit mx-auto mt-3 font-bold text-xl"
            onClick={() => navigate("/")}
          >
            Go to the homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
