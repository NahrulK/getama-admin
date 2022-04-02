import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">Pengguna Baru</div>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://drive.google.com/uc?id=1-QKAnXgL4WlM095s1U9zVhQ-X1PRCn8F"
            alt=""
            className="widgetSmImg"
          />
          <li className="widgetSmUser">
            <span className="widgetSmUsername">Raudatul Aini</span>
            <span className="widgetSmUserTitle">Mahasiswa</span>
          </li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://drive.google.com/uc?id=1G9kuSb-wv5sRFa8UbYG96kop5TVR1lT_"
            alt=""
            className="widgetSmImg"
          />
          <li className="widgetSmUser">
            <span className="widgetSmUsername">Dewi Putri</span>
            <span className="widgetSmUserTitle">Mahasiswa</span>
          </li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://drive.google.com/uc?id=1u1zwrG6PxI5O3JI3nIREYWvDgRoXcOlm"
            alt=""
            className="widgetSmImg"
          />
          <li className="widgetSmUser">
            <span className="widgetSmUsername">Emha Asqolani</span>
            <span className="widgetSmUserTitle">Desainer Grafis</span>
          </li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://drive.google.com/uc?id=1pf_x1YkvjEEjW1vnsvfXVTg0eKpplEiM"
            alt=""
            className="widgetSmImg"
          />
          <li className="widgetSmUser">
            <span className="widgetSmUsername">Ermawati Setia Ningsih</span>
            <span className="widgetSmUserTitle">Presenter/Host</span>
          </li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://drive.google.com/uc?id=1cpB8dykw6dA1dd7klkPt7yxlbGCO843-"
            alt=""
            className="widgetSmImg"
          />
          <li className="widgetSmUser">
            <span className="widgetSmUsername">M Rizal Umamy Fajri.S.Kom</span>
            <span className="widgetSmUserTitle">Fillstack Developer</span>
          </li>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
