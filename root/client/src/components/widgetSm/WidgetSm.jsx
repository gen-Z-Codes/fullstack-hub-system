import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQG_nEHSSPqyDw/profile-displayphoto-shrink_100_100/0/1634566658055?e=1641427200&v=beta&t=CfxWh-9vsZyk4Gz3arP2HdhXqqFLZxQSYjw2LgGjzzA"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Caleb Dunyo</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqZgGfizeBeSyaStORK-Q0ugxNh1tcY_-Zg&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ruth Jackson</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Elikplim Kasu</span>
            <span className="widgetSmUserTitle">Network Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ebenzer Abbey</span>
            <span className="widgetSmUserTitle">Full stack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Onesimus S. Wiafe</span>
            <span className="widgetSmUserTitle">Back-End Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
