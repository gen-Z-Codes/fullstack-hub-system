import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">

          <h3 className="sidebarTitle">Quick Menu</h3>

          <ul className="sidebarList">

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customers
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Invoice
              </li>
            </Link>

            <Link to = "/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>

            <Link to = "/reports" className="link">
              <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">

        <Link to="/mail" className="link">
          <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
          </li>
        </Link>

        <Link to="/feedback" className="link">
          <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
          </li>
        </Link>

          <Link to="/messages" className="link">
            <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
          </Link>

          </ul>
        </div>
        
      </div>
    </div>
  );
}
