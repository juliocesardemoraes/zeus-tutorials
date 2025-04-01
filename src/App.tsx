import "./App.css";
import CardAnimation from "./components/passwordGenerator/cardAnimation";
import PasswordCharComponent from "./components/passwordGenerator/PasswordCharComponent";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <PasswordCharComponent></PasswordCharComponent>
      </div>
    </>
  );
}

export default App;
