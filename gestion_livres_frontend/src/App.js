import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Gestion des Livres</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Ajouter un Nouveau Livre</Card.Title>
              <Form onSubmit={handleAddBook}>
                <Form.Group className="mb-3" controlId="formBookTitle">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le titre"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBookAuthor">
                  <Form.Label>Auteur</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez l'auteur"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Ajouter
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Liste des Livres</Card.Title>
              <ListGroup variant="flush">
                {books.map((book, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{book.title}</strong> - {book.author}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
