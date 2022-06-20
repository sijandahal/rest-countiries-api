import { DataFetching } from "./Components/DataFetching";
import Navbar from "./Components/Navbar/Navbar";
import { Search } from "./Components/Search";

function App() {
  return (
    <div className="App dark dark:bg-Dark-bg">
      <Navbar />
      <Search />
      <DataFetching />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
