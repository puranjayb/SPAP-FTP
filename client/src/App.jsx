import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
