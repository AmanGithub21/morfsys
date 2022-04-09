import TeamMemberList from "./TeamMemberList";
import "./OffCanvas.css";

function OffCanvas() {
  return (
    <div
      class="offcanvas offcanvas-start offcanvas-main"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          <img
            src="https://goglobiliti.com/assets/images/globiliti-logo2x.png"
            alt="morfsys-logo"
            className="morfsys-logo"
          />
        </h5>
        <button
          type="button"
          class="btn-close text-reset close-button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-show">
        <div className="menu row-1">
          <ul>
            <li>Home</li>
            <li>My Pilots</li>
            <li>Inbox</li>
            <li>My Team</li>
          </ul>
        </div>
        <hr />

        <TeamMemberList />

        <div className="menu row-2">
          <hr />
          <ul>
            <li>Settings</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
