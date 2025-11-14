import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container text-center  fcol mt-5 border-bottom">
      <h1 className="fs-2 ">Zerodha Products</h1>
      <h3 className="text-muted fs-4 mt-3">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="fs-6 mt-3 mb-5">
        Check out our &nbsp;
        <Link
          to="/investment"
          className="text-decoration-none text-primary fw-medium"
        >
          investment offerings
        </Link>
        &nbsp;
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </p>
    </div>
  );
};
export default Hero;
