import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaFolder, FaClock, FaCamera, FaHandshake, FaRegQuestionCircle } from "react-icons/fa";


function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaFolder className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaCamera className="fs-2" /> },
    { label: "Commons",  icon: <FaHandshake className="fs-2" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2" /> },
  ];

  const { pathname } = useLocation();

  return (
    <ul className="wd-kanbas-navigation">
        <li>
  <div className="logo-container">
    <img src="/images/Nlogo.jpeg" alt="Logo" className="logo" />
  </div>
</li>

      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}>
            <div>{link.icon}</div>
            <div>{link.label}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;
