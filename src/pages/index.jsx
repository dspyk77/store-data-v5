import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Page = () => {
  return (
    <Container>
      <div className="px-4 py-3 my-1 text-center">
        <img className="mb-3" src="img/store-data-logo.png" alt="" />
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Welcome to Store Data v5! This iteration marks a significant evolution, delving deeper
          into backend programming with a focus on Object-Oriented Programming (OOP) and the
          introduction of static classes. This version builds upon the robust foundation of its
          predecessors, emphasizing the fundamental principles of
          CRUD (Create, Read, Update, Delete) operations.
          </p>

          <p>
          In v5, I have embraced the power of OOP to enhance code organization, encapsulation,
          and reusability. Classes play a pivotal role in representing entities within the product
          inventory system, providing a structured and modular approach to backend development.
          </p>

          <p>
          One of the standout features of this refactor is the incorporation of static classes,
          offering a convenient way to group utility methods and functionalities that don&apos;t
          require instantiation. This design choice contributes to a more cohesive and efficient
          codebase.
          </p>

          <p>
          Unlike v3, which relied on Next.js and React, v5 elevates the backend functionality by
          integrating a robust MySQL database. This database integration opens up new possibilities
          for data storage, retrieval, and management.
          </p>

          <p>
          To experience the capabilities of Store Data v5, simply click the &apos;Get Started&apos;
          button and explore the seamless interaction between static classes, OOP principles, and
          the enhanced backend functionality provided by the MySQL database. Dive into the world of
          efficient and organized backend development with Store Data v5!
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              variant='dark'
              className="btn-lg px-4 gap-3"
              href="/products"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
