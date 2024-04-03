import { Link } from "react-router-dom";
import Menu from "../navigation/Menu";
import SocialMedia from "../social media page/SocialMedia";
import "./header.css";

export default function Header({ top }) {
  return (
    <header id="header" className={top ? "header-top" : ""}>
      <div className="container">
        <h1>
          <Link to="/">Viktoriia Safonova</Link>
        </h1>
        <h2>
          Wide-rangering <span>frontend developer</span> with a psychological
          background
        </h2>
        <Menu />
        <SocialMedia />
      </div>
    </header>
  );
}