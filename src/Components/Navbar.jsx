import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../StyledComponents/HomePageStyledComponents";

export default function Navbar({ setShowModal }) {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <StyledNavbar>
      <Link>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png"
          alt=""
        />
      </Link>
      <div>
        <Link>
          <p>Blog</p>
        </Link>
        <Link>
          <p className="addUnderline">Register As A Professional</p>{" "}
        </Link>
        {isAuth && (
          <Link>
            <p onClick={() => setShowModal(true)}>My Bookings</p>
          </Link>
        )}
        {!isAuth ? (
          <Link>
            <p onClick={() => setShowModal(true)}>Login/Sign Up</p>
          </Link>
        ) : (
          <Link>
            <p>Logout-Verified Customer</p>{" "}
          </Link>
        )}
      </div>
    </StyledNavbar>
  );
}
