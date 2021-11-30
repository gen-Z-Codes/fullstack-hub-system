import "./mail.css";
import {MailOutline} from "@material-ui/icons";
import Chart from "../../components/chart/Chart"; // for rendering data structures
import { Link } from "react-router-dom"; // for linking pages
import { userData } from "../../dummyData"; //define schema and data in dummyData.js to mimic backend

export default function Mail() {
  return (
    <div className="mail">
      <div className="mailTitleContainer">
        <h1 className="mailTitle">Mail Page</h1>
      </div>
      <MailOutline className="pageIcon"/>
    </div>
  );
}
