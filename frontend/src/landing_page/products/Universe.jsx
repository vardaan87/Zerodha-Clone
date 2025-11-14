const Universe = () => {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h3 className="mt-5 fcol">The Zerodha Universe</h3>
        <p className="fs-6 mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-2">
          <img
            src="images/smallcaseLogo.png"
            className="img-fluid"
            style={{ width: "140px", height: "auto" }}
            alt="Smallcase"
          />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>

        <div className="col-4 p-2">
          <img
            src="images/sensibullLogo.svg"
            className="img-fluid"
            style={{ width: "140px", height: "auto" }}
            alt="Sensibull"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-4 p-2">
          <img
            src="images/streakLogo.png"
            className="img-fluid"
            style={{ width: "140px", height: "auto" }}
            alt="Streak"
          />
          <p className="text-small text-muted">Algo trading platform</p>
        </div>

        <div className="col-4 p-2 mt-5">
          <img
            src="images/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ width: "140px", height: "auto" }}
            alt="Zerodha Fundhouse"
          />
          <p className="text-small text-muted">Investment management</p>
        </div>

        <div className="col-4 p-2 mt-5">
          <img
            src="images/dittoLogo.png"
            className="img-fluid"
            style={{ width: "120px", height: "auto" }}
            alt="Ditto"
          />
          <p className="text-small text-muted">Insurance platform</p>
        </div>

        <div className="col-4 p-2 mt-5">
          <img
            src="images/tijori1.svg"
            className="img-fluid"
            style={{ width: "140px", height: "auto" }}
            alt="Tijori"
          />
          <p className="text-small text-muted">Research and analytics</p>
        </div>
        <div className="d-flex justify-content-center mt-3 ">
          <button className="btn btn-primary fs-5 px-4 py-2 signup">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
