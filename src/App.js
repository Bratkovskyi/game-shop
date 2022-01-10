import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/header/header";


import HomePage from "./Pages/home-page/home-page";

function App() {
  return (
    
      <div className="App">
        <Header/>
        
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    
  );
}

export default App;
