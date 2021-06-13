import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBrain,
  faBriefcase,
  faGraduationCap,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

export const DataSidebar = [
  {
    title: "Home",
    path: "#home",
    icon: <FontAwesomeIcon icon={faHome} className="text-text" />,
    cName: "nav-link",
  },
  {
    title: "About",
    path: "#about",
    icon: <FontAwesomeIcon icon={faUser} className="text-text" />,
    cName: "nav-link",
  },
  {
    title: "Technical",
    path: "#about",
    icon: <FontAwesomeIcon icon={faBrain} className="text-text" />,
    cName: "nav-link",
  },
  {
    title: "Project",
    path: "#project",
    icon: <FontAwesomeIcon icon={faGraduationCap} className="text-text" />,
    cName: "nav-link",
  },
  {
    title: "Experience",
    path: "#experience",
    icon: <FontAwesomeIcon icon={faBriefcase} className="text-text" />,
    cName: "nav-link",
  },
  {
    title: "Soft Skill",
    path: "#softSkill",
    icon: <FontAwesomeIcon icon={faCogs} className="text-text" />,
    cName: "nav-link",
  },
];
