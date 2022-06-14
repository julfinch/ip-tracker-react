import { useRef } from "react";
import imgArrow from "../images/icon-arrow.svg";

const Search = ({ setIp }) => {
  const inputText = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIp(inputText.current.value);
          e.target.reset();
        }}
      >
        <div className="flex flex-row justify-center">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            ref={inputText}
            className="ip-input text-sm h-12 w-screen md:w-96 rounded-l-xl rounded-r-none p-4"
          />
          <button
            className="bg-black btn h-12 w-12 rounded-r-xl rounded-l-none cursor-pointer"
            style={{
              backgroundImage: `url("${imgArrow}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "auto"
            }}
          ></button>
        </div>
      </form>
    </>
  );
};

export default Search;
