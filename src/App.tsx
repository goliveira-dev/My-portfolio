import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import PageNotFound from './Pages/NotFound'
import ProjectsPage from './Pages/Projects'
import AboutPage from './Pages/About'
import AbilityesPage from './Pages/Abilityes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='about-me' element={<AboutPage />} />
          <Route path='my-abilityes' element={<AbilityesPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
