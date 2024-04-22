import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./page/Dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
