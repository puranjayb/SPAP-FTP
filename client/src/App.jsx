import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./page/Dashboard"
import Login from "./page/Login"
import TotalExpenses from "./page/TotalExpenses"
import Register from "./page/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/total-expense" element={<TotalExpenses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
