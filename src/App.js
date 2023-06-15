import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Help from "./components/Help"
import Service from "./components/Service"
import NotFound from "./components/NotFound"
import Detail from "./pages/Detail"
import RootLayOut from "./components/RootLayOut"

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="Help" element={<Help />} />
        <Route path="Service" element={<Service />} />
        <Route path="Detail/:id" element={<Detail />} />



        <Route path="*" element={<NotFound />} />
      </Route>


    </Routes>
  )
}
export default App