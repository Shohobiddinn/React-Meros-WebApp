import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages";
import DefaultLayout from "./layouts/default";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} >
        
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}
export default App;
