import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    
    <Container className="welcome">
      <h1 className="mb-4">Bienvenidos</h1>
      
      <h2>Para seleccionar tus imagenes favoritas ve al <Link className="home-welcome" to="/"> Home </Link> </h2>
      <img src="https://www.shutterstock.com/image-vector/set-four-square-posters-spring-260nw-2246366297.jpg" alt="" width={1200} />
    </Container>
  )
}

export default Welcome