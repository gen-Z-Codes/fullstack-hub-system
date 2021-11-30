import "./messages.css";
import {ChatBubbleOutline} from "@material-ui/icons";
import Chart from "../../components/chart/Chart"; // for rendering data structures
import { Link } from "react-router-dom"; // for linking pages
import { userData } from "../../dummyData"; //define schema and data in dummyData.js to mimic backend

export default function Messages() {
  return (
    <div className="message">
      <div className="messageTitleContainer">
        <h1 className="messageTitle">Message Page</h1>
      </div>
      <ChatBubbleOutline className="pageIcon"/>
    </div>
  );
}
