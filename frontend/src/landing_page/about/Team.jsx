import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row border-top p-5">
        <h1 className="text-center mt-5 fs-2 mb-5">People</h1>
        <div className="col  text-center">
          <img
            src="images/myimage.jpg"
            alt="Mukul Kumar"
            className=" rounded-circle h-50 w-50"
          />
          <h3 className="mt-5 fcol">Mukul Kumar</h3>
          <h5 className="fs-6 fcol">Founder & CEO</h5>
        </div>
        <div className="col text-muted lh-base">
          <p>
            Mukul built the Zerodha clone in 2025 to overcome the hurdles he
            faced during his decade long stint as a trader. Today, Zerodha has
            changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on&nbsp;
            <Link to="/" className="text-decoration-none">
              Homepage&nbsp;
            </Link>
            /&nbsp;
            <Link to="#" className="text-decoration-none">
              TradingQnA&nbsp;
            </Link>
            /&nbsp;
            <Link to="#" className="text-decoration-none">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Team;
