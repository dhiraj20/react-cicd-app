import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AutocompleteDemo } from "./components/Autocomplete";
import { PermanentDrawer } from "./components/PermanentDrawer";
import { Routes, Route } from "react-router";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC"; 

function App() {
  // return <PermanentDrawer />
  return (
    <div>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/b" element={<ComponentB />} />
        <Route path="/c" element={<ComponentC />} />
          <Route path="*" element={<ComponentA />} />
      </Routes>
    </div>
  );
}

export default App;
