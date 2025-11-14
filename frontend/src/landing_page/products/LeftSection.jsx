const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  marginTop,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 ">
          <img src={imageUrl} alt="no image" style={{ height: "85%" }} />
        </div>
        <div className="col p-5" style={{ marginTop: "30px" }}>
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={tryDemo}
              className="text-decoration-none"
              style={{ marginRight: "70px" }}
            >
              Try Demo &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn more &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} style={{ marginRight: "20px" }}>
              <img src="images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSection;
