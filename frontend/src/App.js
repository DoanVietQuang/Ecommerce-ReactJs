import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import "./App.css";
import CustomerRouter from "./Routers/CustomerRouter";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter />}></Route>
        <Route path="/admin/*" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
