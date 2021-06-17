import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../Redux/auth/action";
import { StyledNavbar } from "../StyledComponents/HomePageStyledComponents";
export default function Navbar({
  setShowModal,
  style,
  linkColor = "white",
  img = "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png",
}) {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };
  return (
    <StyledNavbar style={style}>
      <Link>
        <img src={img} alt="" />
      </Link>
      <div>
        <Link style={{ color: linkColor }}>
          <p>Blog</p>
        </Link>
        <Link style={{ color: linkColor }}>
          <p className="addUnderline">Register As A Professional</p>{" "}
        </Link>
        {isAuth && (
          <Link style={{ color: linkColor }}>
            <p>My Bookings</p>
          </Link>
        )}
        {!isAuth ? (
          <Link style={{ color: linkColor }}>
            <p onClick={() => setShowModal(true)}>Login/Sign Up</p>
          </Link>
        ) : (
          <Link style={{ color: linkColor }}>
            <p onClick={handleLogout}>Logout-Verified Customer</p>{" "}
          </Link>
        )}
      </div>
    </StyledNavbar>
  );
}
