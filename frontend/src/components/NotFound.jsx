import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fs-2 mb-3 text-dark">Oops! Page Not Found</h2>
      <p className="text-secondary mb-4 px-3">
        The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary px-4 py-2 rounded-pill fw-semibold shadow-sm"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
