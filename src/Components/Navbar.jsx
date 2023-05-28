import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
    <Link to="/split_bill/">
      {/* <FontAwesomeIcon icon={faHome} /> */}
      ホーム
    </Link>
      <Link to="/split_bill/login">
        {/* <FontAwesomeIcon icon={faHome} /> */}
        ログイン
      </Link>
         <Link to="/split_bill/createPost">
          {/* <FontAwesomeIcon icon={faHome} /> */}
          記事投稿
        </Link>
        <Link to="/split_bill/logout">
          {/* <FontAwesomeIcon icon={faHome} /> */}
          ログアウト
        </Link>
     </nav>
  );

};

export default Navbar;