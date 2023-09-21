
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { BookPage } from './pages/BookPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Container, Navbar, Nav } from 'react-bootstrap';


export const App: React.FC = () => {

  return (
    <>
      <Container>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="books">Books</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}