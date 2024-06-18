import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  );
}
