import "./feedback.css";
import {DynamicFeed} from "@material-ui/icons";
import Chart from "../../components/chart/Chart"; // for rendering data structures
import { Link } from "react-router-dom"; // for linking pages
import { userData } from "../../dummyData"; //define schema and data in dummyData.js to mimic backend

export default function Feedback() {
  return (
    <div className="feedback">
      <div className="feedbackTitleContainer">
        <h1 className="feedbackTitle">Feedback Page</h1>
      </div>
      <DynamicFeed className="pageIcon"/>
    </div>
  );
}
