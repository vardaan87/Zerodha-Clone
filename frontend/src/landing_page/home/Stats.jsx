import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <div className="container py-4 mt-5">
      <div className="row align-items-center p-5">
        {/* Text Section */}
        <div className="col-12 col-md-6 px-5">
          <h1 className="fs-4 mb-4 fcol text-center text-md-start">
            Trust with confidence
          </h1>

          <div>
            <h2 className="fs-5 fcol mt-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>

            <h2 className="fs-5 fcol mt-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>

            <h2 className="fs-5 fcol mt-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h2 className="fs-5 fcol mt-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <Link
              to="/product"
              className="text-decoration-none text-primary fw-medium"
            >
              Explore our products &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>

            <Link
              to="/kite-demo"
              className="text-decoration-none text-primary fw-medium"
            >
              Try Kite demo &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
