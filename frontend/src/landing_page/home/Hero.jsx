const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center flex justify-content-center">
        <img
          src="images/homeHero.png"
          alt="Hero Section Image"
          className="mb-5 w-75"
        />
        <h1 className="fs-3"> Invest in Everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary fs-5 px-4 py-2 signup">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
