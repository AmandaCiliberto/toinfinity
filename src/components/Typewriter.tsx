import { useEffect, useReducer } from "react";

const phrases = [
  "Exploring the cosmos...",
  "Charting new frontiers...",
  "To infinity and beyond...",
  "Stardust in our veins...",
  "Navigating the galaxy...",
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_AT_END = 2000;
const PAUSE_BETWEEN = 500;

type State = {
  text: string;
  isDeleting: boolean;
  phraseIndex: number;
};

type Action =
  | { type: "TYPE_CHAR" }
  | { type: "DELETE_CHAR" }
  | { type: "START_DELETING" }
  | { type: "START_TYPING_NEXT_PHRASE" };

function reducer(state: State, action: Action): State {
  const currentPhrase = phrases[state.phraseIndex % phrases.length];

  switch (action.type) {
    case "TYPE_CHAR":
      return {
        ...state,
        text: currentPhrase.slice(0, state.text.length + 1),
      };

    case "DELETE_CHAR":
      return {
        ...state,
        text: currentPhrase.slice(0, state.text.length - 1),
      };

    case "START_DELETING":
      return { ...state, isDeleting: true };

    case "START_TYPING_NEXT_PHRASE":
      return {
        text: "",
        isDeleting: false,
        phraseIndex: (state.phraseIndex + 1) % phrases.length,
      };

    default:
      return state;
  }
}

export default function Typewriter() {
  const [state, dispatch] = useReducer(reducer, {
    text: "",
    isDeleting: false,
    phraseIndex: 0,
  });

  useEffect(() => {
    const currentPhrase = phrases[state.phraseIndex % phrases.length];

    let timeout: number;

    if (!state.isDeleting && state.text === currentPhrase) {
      // done typing -> pause -> then delete
      timeout = window.setTimeout(
        () => dispatch({ type: "START_DELETING" }),
        PAUSE_AT_END
      );
    } else if (state.isDeleting && state.text === "") {
      // done deleting -> pause -> next phrase
      timeout = window.setTimeout(
        () => dispatch({ type: "START_TYPING_NEXT_PHRASE" }),
        PAUSE_BETWEEN
      );
    } else {
      // still typing or deleting
      const action = state.isDeleting ? "DELETE_CHAR" : "TYPE_CHAR";
      const delay = state.isDeleting ? DELETING_SPEED : TYPING_SPEED;

      timeout = window.setTimeout(
        () => dispatch({ type: action as "DELETE_CHAR" | "TYPE_CHAR" }),
        delay
      );
    }

    return () => clearTimeout(timeout);
  }, [state.text, state.isDeleting, state.phraseIndex]);

  return (
    <div className="mt-20 bg-slate-600/70 p-3 rounded-md text-white text-center flex justify-center items-center">
      <h1
        aria-label="typewriter"
        className="border-r-4 border-r-white h-[30px] whitespace-nowrap"
      >
        {state.text}
      </h1>
    </div>
  );
}
