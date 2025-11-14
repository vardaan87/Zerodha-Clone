const Hero = () => {
  return (
    <div className="container  mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="fs-2 fcol">Support Portal</h1>
        <button className="btn btn-primary fs-6 signup">My Tickets</button>
      </div>
      <div class="input-group input-group-lg mt-3 tex-muted mb-5">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="Ex: How do I open my account, How do i activate F&O"
        />
      </div>
    </div>
  );
};
export default Hero;
