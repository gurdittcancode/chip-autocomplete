import "./App.css";
import ChipAutoComplete from "./ChipAutoComplete";

function App() {
  const tags = {
    data: [
      "React",
      "Hands On",
      "Live Coding",
      "Angular",
      "Vue JS",
      "JS Fundamentals",
      "Typescript",
      "Browser/DOM",
      "API",
      "Router",
      "Forms",
      "Jest",
      "Vue",
      "Templates",
      "Directives",
      "Routing",
      "State management",
      "Asynchronous programming",
      "React Js",
      "Hooks",
      "JSX",
      "CSS",
      "flex",
      "DOM",
    ],
  };

  return <ChipAutoComplete tags={tags.data}/>;
}

export default App;
