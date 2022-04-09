import "./HumburgerIcon.css";

function HamburgerIcon() {
  return (
    <div
      class="humberger-menu"
      // type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      // style={{ widht: "30px", height: "30px", backgroundColor: "black" }}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default HamburgerIcon;
