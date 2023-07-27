import Allquotes from "./components/Allquotes";
import Navbar from "./components/Navbar";
import Newquote from "./components/Newquote";

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewFullQuote from "./components/ViewFullQuote";

function App() {
  return (
    <>

<Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Allquotes/>} />
        <Route exact path="/newquotes" element={<Newquote/>} />
        <Route exact path="/viewfullquote" element={<ViewFullQuote/>} />
      </Routes>
  </Router>
   </>
  );
}

export default App;
