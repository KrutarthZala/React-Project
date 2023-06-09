const Home = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide mb-3"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img
              src="https://img.freepik.com/premium-vector/cricket-tournament-match-with-gold-trophy-stadium-background_30996-3961.jpg?w=2000"
              class="d-block w-100"
              alt="..."
              style={{ height: "85vh" }}
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="https://wallpaperaccess.com/full/4650858.jpg"
              class="d-block w-100"
              style={{ height: "85vh" }}
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img
              src="https://wallpapercave.com/wp/wp9536226.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "85vh" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Home;
