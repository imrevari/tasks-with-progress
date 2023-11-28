import MainApp from "./components/MainApp";
import StateContextProvider from "./stateContext/StateContextProvider";


function App() {
  return (
    <div>
      <StateContextProvider>
        <MainApp />
      </StateContextProvider>
    </div>
  );
}

export default App;
