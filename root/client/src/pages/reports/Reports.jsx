import "./reports.css";
import {BarChart} from "@material-ui/icons";
import Chart from "../../components/chart/Chart"; // for rendering data structures
import { Link } from "react-router-dom"; // for linking pages
import { userData } from "../../dummyData"; //define schema and data in dummyData.js to mimic backend

export default function Reports() {
  return (
    <div className="reports">
      <div className="reportsTitleContainer">
        <h1 className="reportsTitle">Report Page</h1>
      </div>
      <BarChart className="pageIcon"/>
    </div>
  );
}
