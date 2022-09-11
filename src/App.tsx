import { FC, createContext } from "react";
import "./App.css";
import { Person, HairColor } from "./Components/Person";

interface IAppContext {
  name: string;
  age: number;
  country: string;
}
const AppContext = createContext<IAppContext | null>(null);

// declaring type of react component
const App: FC = () => {
  // declaring types of variables
  const name: string = "Furqan";
  const age: number = 22;
  const isMarried: boolean = false;

  // declaring type of function argument and return type
  const getName = (name: string): number => {
    if (name === "Furqan") {
      return 22;
    } else {
      return 0;
    }
  };

  const contextValue: IAppContext = {
    name: "Furqan",
    age: 22,
    country: "Pakistan",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Furqan"
          age={22}
          email="m.fur99qan@gmail.com"
          hairColor={HairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
