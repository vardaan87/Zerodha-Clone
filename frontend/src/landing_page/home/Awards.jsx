const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col sm-12">
          <img src="images/largestBroker.svg" alt="img" />
        </div>
        <div className="col-lg-6 col sm-12">
          <h1 className="mt-lg-3 mt-sm-5">Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-lg-6 col sm-12">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="images/pressLogos.png"
            alt="Logo"
            style={{ width: "90%" }}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
};
export default Awards;
