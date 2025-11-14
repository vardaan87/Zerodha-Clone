const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  linkName,
  linkHref,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={linkHref} className="text-decoration-none">
            {linkName}&nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6 ">
          <img src={imageUrl} alt="" style={{ height: "80%" }} />
        </div>
      </div>
    </div>
  );
};
export default RightSection;
