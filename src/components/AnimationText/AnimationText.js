import { useState, useEffect } from "react";

const AnimationText = ({
  stringsArray,
  backgroundString,
  interval = 150,
  stopTime = 1500,
}) => {
  const [state, setState] = useState({
    text: stringsArray[0],
    array: [stringsArray[0], []],
    break: backgroundString,
    strings: stringsArray,
    indice: 0,
  });
  //
  const breakString = (string, index, loop) => {
    if (loop) {
      let newIndice = state.indice;
      newIndice += 1;
      if (newIndice > state.strings.length - 1) {
        newIndice = 0;
      }
      let newText = (" " + state.strings[newIndice]).slice(1);
      //
      let newArray = [newText.slice(0, index), newText.slice(index).split("")];
      //
      setState({
        ...state,
        text: newText,
        array: newArray,
        indice: newIndice,
      });
    } else {
      let newArray = [string.slice(0, index), string.slice(index).split("")];
      setState({ ...state, array: newArray });
    }
  };
  //
  useEffect(() => {
    breakString(state.text, state.break);
  }, []);
  //
  const [init, setInit] = useState(0);
  const [load, setLoad] = useState(false);
  //
  useEffect(() => {
    const getNextLetter = () => {
      if (state.array[1].length > 0) {
        let string1 = (" " + state.array[0]).slice(1);
        let string2 = [...state.array[1]];
        //
        let slicing = 1;
        if (string2.slice(0, 1)[0] === " ") {
          slicing = 2;
        }
        //
        setState({
          ...state,
          array: [
            string1 + string2.slice(0, slicing).join(""),
            string2.slice(slicing),
          ],
        });
      } else {
        if (init === 0) {
          let inicio = new Date();
          setInit(inicio);
        }
        let now = new Date();
        //
        let diff = now - init;
        if (diff > 100000) {
          setLoad(true);
        }
        if (load) {
          if (diff >= stopTime) {
            breakString(state.text, state.break, true);
            setInit(0);
            setLoad(false);
          }
        }
      }
    };
    const timer = setInterval(() => {
      getNextLetter();
    }, interval);
    return () => clearInterval(timer);
  });
  return state.array[0];
};

export default AnimationText;
