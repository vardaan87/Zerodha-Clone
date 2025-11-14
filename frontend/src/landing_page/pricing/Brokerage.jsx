import React, { useState } from "react";
const Brokerage = () => {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container my-5">
      {/* Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* Tables */}
      <div className="table-responsive">
        {activeTab === "equity" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&amp;O - Futures</th>
                <th>F&amp;O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>
                  <ul className="list-unstyled mb-0">
                    <li>0.125% of intrinsic value on exercised options</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br /> BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00173% <br /> BSE: 0
                </td>
                <td>
                  NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "currency" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00035% <br /> BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311% <br /> BSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "commodity" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (non-agri)</td>
                <td>0.05% on sell side (on premium)</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>0.0026%</td>
                <td>0.05%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
                <td>18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="text-center mt-3 fs-5">
        <a href="#" className="text-primary text-decoration-none fw-semibold ">
          Calculate your costs upfront
        </a>
        &nbsp; using our brokerage calculator
      </div>
    </div>
  );
};

export default Brokerage;
