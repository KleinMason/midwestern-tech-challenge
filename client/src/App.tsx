import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ContentService } from "./services/content.service";

function App() {
  return (
    <div className="container-xl">
      <Routes>
        <Route
          path="/"
          element={<Home contentService={new ContentService()} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
