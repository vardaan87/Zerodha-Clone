const Hero = () => {
  return (
    <div className="container">
      <div className="row border-bottom text-center mt-5 ">
        <h1 className="fs-2 text-center fcol ">Charges</h1>
        <p className="fs-4 text-muted mt-3 mb-5 text-center">
          List of all charges and taxes
        </p>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="/images/pricingEquity.svg" alt="" />
          <h1 className="fs-4 text-center mt-5 fcol">Free equity delivery</h1>
          <p className="mt-3 text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/intradayTrades.svg" alt="" />
          <h1 className="fs-4 text-center mt-5 fcol">
            Intraday and F&O trades
          </h1>
          <p className="mt-3 text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/pricingEquity.svg" alt="" />
          <h1 className="fs-4 mt-5 text-center fcol">Free direct MF</h1>
          <p className="mt-3 text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
