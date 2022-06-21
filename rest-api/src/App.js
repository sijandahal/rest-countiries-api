import { DataFetching } from "./Components/DataFetching";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App dark dark:bg-Dark-bg">
      <Navbar />
      <DataFetching />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
