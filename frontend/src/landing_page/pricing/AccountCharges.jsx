const AccountCharges = () => {
  return (
    <div className="container my-5 p-5">
      {/* ---- Charges for account opening ---- */}
      <h4 className="mb-3 fcol">Charges for account opening</h4>

      <div className="table-responsive mb-5">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th className="text-end">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td className="text-end text-success fw-semibold">FREE</td>
            </tr>
            <tr className="table-light">
              <td>Offline account</td>
              <td className="text-end text-success fw-semibold">FREE</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td className="text-end">₹ 500</td>
            </tr>
            <tr className="table-light">
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td className="text-end">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ---- Demat AMC ---- */}
      <h4 className="mb-3 fcol">Demat AMC (Annual Maintenance Charge)</h4>

      <div className="table-responsive mb-2">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Value of holdings</th>
              <th className="text-end">AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td className="text-start text-success fw-semibold">FREE*</td>
            </tr>
            <tr className="table-light">
              <td>₹4 lakh - ₹10 lakh</td>
              <td className="text-start">₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td className="text-start">₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-muted small">
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,{" "}
        <a href="#" className="text-decoration-none">
          click here.
        </a>
      </p>

      {/* ---- Charges for optional value added services ---- */}
      <h4 className="mt-5 mb-3 fcol">
        Charges for optional value added services
      </h4>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th className="text-start">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td className="text-start">Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr className="table-light">
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td className="text-start">
                Buy &amp; Invest More: 100 | SIP: 10
              </td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td className="text-start">Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountCharges;
