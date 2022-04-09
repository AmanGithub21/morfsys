import AuthForm from "./AuthForm";

function PageOne() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="" href="/">
            <img
              src="https://goglobiliti.com/assets/images/globiliti-logo2x.png"
              alt="morfsys-logo"
              className="morfsys-logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Create school account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AuthForm />
    </div>
  );
}

export default PageOne;
