const Home = () => {
  return (
    <>
      <div id="carousel" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="wallpaper-1.jpg"
              className="d-block w-100 rounded-5"
              alt="wallpaper 1"
            />
            <div className="carousel-caption">
              <h1>Unleash Your Codecraft</h1>
              <p className="d-none d-md-block">
                Join HacKnight: Where Innovation Meets the Knight Code
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="wallpaper-2.jpg"
              className="d-block w-100 rounded-5"
              alt="wallpaper 2"
            />
            <div className="carousel-caption">
              <h1>Forge into Reality</h1>
              <p className="d-none d-md-block">
                HacKnight: Your Gateway to Hack and Conquer
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="wallpaper-3.jpg"
              className="d-block w-100 rounded-5"
              alt="wallpaper 3"
            />
            <div className="carousel-caption">
              <h1>Hack with Honor</h1>
              <p className="d-none d-md-block">
                HacKnight: Defend Challenges, Embrace Solutions
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
