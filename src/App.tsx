
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container, Navbar } from 'react-bootstrap';


export const App: React.FC = () => {

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
          </Container>
        </Navbar><br />
          
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}