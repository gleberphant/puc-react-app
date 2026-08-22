import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <Button variant="primary">Button as link</Button>
        </div>
      </section>
    </>
  );
}

export default App;
