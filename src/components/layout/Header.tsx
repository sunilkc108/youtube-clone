import { FaBell, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, type ChangeEvent, type MouseEvent } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaX } from "react-icons/fa6";
// import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const [input, setInput] = useState("");
  // const [suggestions, setSuggestions] = useState<VideoCardProps[]>([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [showNoti, setshowNoti] = useState(false)
  const notiRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate();

  // useClickOutside(notiRef, () => setshowNoti(false))


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim().length === 0) {
      setSuggestions([]);
      setshowSuggestions(false);
      return;
    }

    const matches = mockVideos.filter((vid) =>
      vid.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5));
    setshowSuggestions(true);
  };

  const handleFocus = () => {
    if (input.trim().length > 0) {
      setshowSuggestions(true);
    }
  };

  const handleInputClean = () => {
    setshowSuggestions(false);
    setInput("");
  };

  const handleSelect = (title: string) => {
    navigate(`/search?query=${title}`);
    setInput(title);
    setSuggestions([]);
    setshowSuggestions(false);
  };

  const handleOnclick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input.trim().length < 1) return;
    navigate(`/search?query=${input.trim()}`);
    setshowSuggestions(false);
  };

  return (
    <header className= "flex items-center justify-between px-8 py-2 bg-white shadow-md sticky top-0 z-10" >
    <div className="flex items-center space-x-2" >
      <img
          src="https://img.freepik.com/premium-vector/youtube-icon_1144164-269.jpg"
  alt = "Logo"
  className = "w-8 h-8"
    />
    <Link to="/" >
      <span className="text-xl font-bold" > YouTube </span>
        </Link>
        </div>
  {/* Center Search */ }
  <div className="relative flex mx-auto w-[60vw]" >
    <input
          value={ input }
  onChange = { handleChange }
  onFocus = { handleFocus }
  onBlur = {() => setshowSuggestions(false)}
type = "text"
placeholder = "Search"
className = "relative w-full px-4 py-1 border-[#F8F8F8] border-2 rounded-l-full outline-none focus:border-blue-500"
  />
  <span
          onClick={ handleInputClean }
className = {`absolute right-14 top-2.5 ${input.trim().length > 0 ? "" : "hidden"
  } cursor-pointer`}
        >
  <FaX size={ 18 } className = "text-gray-400" />
    </span>
    < button
onClickCapture = { handleOnclick }
className = {`px-4 bg-[#F8F8F8] rounded-r-full cursor-pointer`}
        >
  <FaSearch />
  </button>
{
  showSuggestions && suggestions.length > 0 && (
    <ul className="absolute mt-10 w-full bg-white flex flex-col p-4 rounded-2xl justify-start font-medium" >
      { suggestions &&
      suggestions.map((sug, i) => (
        <li
                  key= { i }
                  onMouseDown = {() => handleSelect(sug.title)}
className = "flex gap-2 items-center hover:bg-gray-100 py-2 px-2 rounded-lg cursor-pointer"
  >
  <HiOutlineSearch size={ 18 } />
    < span > { sug.title } </span>
    </li>
              ))}
</ul>
        )}
</div>
  < div className = "flex items-center justify-end space-x-4 " >
    <div className="relative" ref = { notiRef } >
      <button onClick={ () => setshowNoti(prev => !prev) } className = "relative cursor-pointer" >
        <FaBell size={ 20 } />
          </button>
{
  showNoti && (
    <div className="absolute right-18 mt-3 w-[500px] bg-white shadow-2xl rounded-xl p-4 z-50" >
      <h4 className="text-md font-medium mb-2" > Notifications </h4>
        < ul className = "h-[40vh] space-y-2 text-sm overflow-y-auto whitespace-nowrap" >
        {
          Array.from({ length: 10 }, (_, i) => (
            <li key= { i } className = "hover:bg-gray-100 p-2 rounded-lg cursor-pointer" >
            { `New text for notifications ${i}`}
          </li>
              ))
}
</ul>
  </div>
          )}
</div>
  < div className = "w-8 h-8 bg-purple-600 rounded-full text-white flex items-center justify-center cursor-pointer" >
    <span>A </span>
    </div>
    </div>
    </header>
  );
};

export default Header;


