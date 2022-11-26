import { useEffect, useState } from "react";
import Drum from "../drum_pad/drum_pad";

function DrumMachine() {
    const [display, setDisplay] = useState("");
    const [keypress, setKeypress] = useState("");

    const drums = [];
    const ids = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    // const idsLower = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

    const audio = ["Cev_H2",
        "Dsc_Oh",
        "Heater-1",
        "Heater-2",
        "Heater-3",
        "Heater-4_1",
        "Heater-6",
        "Kick_n_Hat",
        "RP4_KICK_1"
    ];

    const updateDisplay = (newState) => {
        setDisplay(newState);
    }

    useEffect(() => {
        console.log("Keypress on effect: " + keypress);
        // setKeypress("");
    })

    for (let i = 0; i < 9; i++) {
        drums.push(
            <Drum key={[i]}
                // index={i}
                keypress={keypress}
                pressable={ids[i]}
                id={audio[i]}
                updateDisState={updateDisplay}
                updateKeypress={setKeypress}
            />);
    }



    const handleKeyDown = (event) => {
        // if (ids.includes(event.key) ||
        //     idsLower.includes(event.key))
        // {
            // event.target.childNodes[0].play();
            // updateDisplay()
        // }
        setKeypress(event.key);
        console.log("keypress on keydown:" + keypress);
    }

    return (
        <div id="drum-machine"
            onKeyDown={(e) => { handleKeyDown(e) }}
            tabIndex={-1}
        >
            {drums}
            <div id="display">
                {display}
            </div>
        </div>
    )
}

export default DrumMachine;