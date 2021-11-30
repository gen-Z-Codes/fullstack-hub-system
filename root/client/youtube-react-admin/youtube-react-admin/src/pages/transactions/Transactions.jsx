import "./transactions.css";
import {AttachMoney} from "@material-ui/icons";
import Chart from "../../components/chart/Chart"; // for rendering data structures
import { Link } from "react-router-dom"; // for linking pages
import { userData } from "../../dummyData"; //define schema and data in dummyData.js to mimic backend

export default function transactions() {
  return (
    <div className="transactions">
      <div className="transactionsTitleContainer">
        <h1 className="transactionsTitle">Transactions Page</h1>
      </div>
      <AttachMoney className="pageIcon"/>
    </div>
  );
}
