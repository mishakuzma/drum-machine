import React, { useEffect, useRef, useState } from "react";


const Drum = (props) => {
  const [sound] = useState("../../audio/" + props.id + ".mp3");
  const audioElem = useRef();
  // const [lowercaseKey] = useState(props.pressable.toLowerCase())
  // const lowercaseKey = props.pressable.toLowerCase();

  useEffect(() => {
    if (props.keypress === props.pressable ||
      props.keypress === props.pressable.toLowerCase()) {
      console.log(
        "match on " + props.id
      );
      audioElem.current.play();
      props.updateDisState(props.id);
      props.updateKeypress("");
    }
  })
  const playSound = (event) => {
    console.log(event);
    if (event.type === 'click' ||
      event.key === props.pressable ||
      event.key === props.pressable.toLowerCase()) {
      event.target.childNodes[0].play();
      props.updateDisState(props.id);
      props.updateKeypress("");
    }
  };

  return (
    <div className="drum-pad"
      // onKeyDown={(e) => playSound(e)}
      onClick={(e) => playSound(e)}
      // tabIndex={-1}
    >
      <audio
        // type="audio/mpeg"
        id={props.pressable}
        className="clip"
        ref={audioElem}
        // src={sound}
        // preload="auto"
      >
        <source
          src={sound}
          type="audio/mpeg" />
        <a href={sound}>Download sound</a>
      </audio>
        
      {props.pressable}
    </div>  
  );
}

export default Drum;