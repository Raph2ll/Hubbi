import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import People from './pages/People';
import Starships from './pages/Starships';
import StarshipsDetails from './pages/StarshipsDetails';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={<People />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/starships/:id" element={<StarshipsDetails />} />
    </Routes>
  )
}

export default Router