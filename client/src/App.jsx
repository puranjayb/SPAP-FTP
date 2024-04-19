import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./page/Dashboard"
import TotalExpenses from "./page/TotalExpenses"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/total-expense" element={<TotalExpenses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
