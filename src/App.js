import React from "react"
import Header from "./components/Header";
import FormAddNew from "./components/FormAddNew";
import TableUser from "./components/TableUser";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Header />
      <hr />
      <FormAddNew />
      <hr />
      <TableUser />
    </Container>
  )
}


export default App;