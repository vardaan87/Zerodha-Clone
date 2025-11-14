import { useState } from "react";

const CreateTicket = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-8 ">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-plus-circle me-3" aria-hidden="true"></i>
                Account Opening
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen1((prev) => !prev)}
                aria-expanded={open1}
                aria-controls="menu"
              >
                {open1 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open1 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Resident individual
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Minor
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Non Resident Indian (NRI)
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Company, Partnership, HUF and LLP
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Glossary
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3"></div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-user-circle me-3" aria-hidden="true"></i>
                Your Zerodha Account
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen2((prev) => !prev)}
                aria-expanded={open2}
                aria-controls="menu"
              >
                {open2 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open2 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Your Profile
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Acount Modification
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Client Master Report (CMR) and Depository Participant (DP)
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Nomination
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Transfer and conversion of securities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i
                  className="fa fa-arrow-circle-o-left me-3"
                  aria-hidden="true"
                ></i>
                Kite
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen3((prev) => !prev)}
                aria-expanded={open3}
                aria-controls="menu"
              >
                {open3 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open3 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      IPO
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Trading FAQs
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Margin Trading Facility (MTF) and Margins
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Charts and orders
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Alerts and Nudges
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      General
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-inr me-3" aria-hidden="true"></i>
                Funds
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen4((prev) => !prev)}
                aria-expanded={open4}
                aria-controls="menu"
              >
                {open4 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open4 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Add money
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Withdraw money
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Add bank accounts
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      eMandates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-bolt me-3" aria-hidden="true"></i>
                Console
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen5((prev) => !prev)}
                aria-expanded={open5}
                aria-controls="menu"
              >
                {open5 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open5 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Portfolio
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Corporate actions
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Funds statement
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Reports
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Profile
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Segments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <i className="fa fa-circle-o-notch me-3" aria-hidden="true"></i>
                Coin
              </h5>
              <button
                className="btn btn-link"
                onClick={() => setOpen6((prev) => !prev)}
                aria-expanded={open6}
                aria-controls="menu"
              >
                {open6 ? "▲" : "▼"}
              </button>
            </div>

            <div id="menu" className={`smooth-collapse ${open6 ? "show" : ""}`}>
              <div className="card-body">
                <ul
                  className="mb-0 custom-ul"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Mututal Funds
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      National Pension Scheme (NPS)
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Feature on Coin
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      Payments and Orders
                    </a>
                  </li>
                  <li className="mb-1 ms-3">
                    <a href="#" className="text-decoration-none">
                      General
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          {/* --- Announcement Box --- */}
          <div
            className="p-3"
            style={{
              background: "#fff6eb",
              borderLeft: "6px solid #ff8c1a",
              borderRadius: "4px",
            }}
          >
            <ul className="m-0 ps-3">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "underline", lineHeight: "1.4" }}
                >
                  Adjustment of Futures and Options contracts of ADANIENT due to
                  Rights issue
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "underline", lineHeight: "1.4" }}
                >
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* --- Quick Links Box --- */}
          <div
            className="border rounded mt-5"
            style={{ background: "#f8f9fa" }}
          >
            <div className=" p-2 border-bottom ">
              <h5 className="ms-3  fs-6 fcol">Quick links</h5>
            </div>
            <ol className="blue-numbers">
              <li className="p-2 border-bottom">
                <a href="#" className="text-decoration-none py-3 ">
                  Track account opening
                </a>
              </li>
              <li className="p-2 border-bottom">
                <a href="#" className="text-decoration-none py-3">
                  Track segment activation
                </a>
              </li>

              <li className="p-2 border-bottom">
                <a href="#" className="text-decoration-none py-3">
                  Intraday margins
                </a>
              </li>

              <li className="p-2 border-bottom">
                <a href="#" className="text-decoration-none py-3">
                  Kite user manual
                </a>
              </li>

              <li className="p-2 border-bottom">
                <a href="#" className="text-decoration-none py-3">
                  Learn how to create a ticket
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateTicket;
