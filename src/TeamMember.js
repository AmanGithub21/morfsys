import "./TeamMember.css";
import logo from "./";

function TeamMember(props) {
  return (
    <div className="TeamMember">
      <div className="row">
        <div className="image col-3">
          <img
            src="https://assets.turbologo.com/blog/en/2019/10/19084944/youtube-logo-illustration-958x575.jpg"
            alt="Image"
            width="50px"
            height="50px"
          />
        </div>
        <div className="text col-9">
          <p className="name" style={{ color: "white" }}>
            {props.name}
          </p>
          <p className="designation text-muted">{props.designation}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
