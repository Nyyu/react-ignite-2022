import { Route, Routes } from 'react-router-dom'

// Route components
import { Home } from './pages/Home'

export const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
