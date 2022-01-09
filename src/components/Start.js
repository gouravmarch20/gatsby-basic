import { useRef } from "react";
import Footer from './Footer';


const Start = ({ setUsername }) => {
  const inputRef = useRef();
  // use click btn : if have give some input ==> then set it in userName state
  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <>
      <div className="start">
        <input
          className="startInput"
          placeholder="Enter your name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
      <div className="footer">

        <Footer />
      </div>
    </>
  )
}

export default Start



