import { StyleReviewsCont } from '../../StyledComponents/AcServiceAndRepairStyle'
import { AiFillStar,AiOutlineArrowDown } from "react-icons/ai"
import React from "react"

export const Reviews = () => {

    const [status,setStatus] = React.useState(false)

    const handleClick = ()=> {
        setStatus(true)
    }

    return (
        <StyleReviewsCont>
            <ul style={{ margin: "0px", padding: "0px" }}>
                <li>
                    <div className="header">

                        <div className="imageBox">
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile_thumb,q_auto:low,f_auto/images/5c0df5942e506e26001c19ea/1544427470485-9de668412835c3affe92a75fff0c7f0a.jpeg" alt="error" />
                        </div>

                        <div className="details">
                            <h4>Sajid Saifi</h4>
                            <p>Saket, New Delhi, Delhi, India</p>

                            <div className="rating">
                                <AiFillStar className="star"></AiFillStar>
                                <div style={{marginTop:"7px"}}>
                                <span style={{ color: "#228d27",fontWeight:"700"}}>4.7</span>
                                <span>(195 ratings)</span>
                                </div>
                            
                            </div>
                        </div>

                    </div>


                    <div className="reviews">
                        <ul>
                            <li>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className="rating-imageBox">
                                        {/* <img src="" alt="error" /> */}
                                        S
                                    </div>

                                    <div className="review-details">
                                        <h4>Sanjay</h4>

                                        <div className="review-rating">
                                            <AiFillStar className="star"></AiFillStar>
                                            
                                            <span style={{ color: "#228d27",fontWeight:"700"}}>5.0</span>
                                            <p>Thank you for a timely visit and service of my ac.I have paid in cash the balance amount. Thank you!</p>
                                        </div>
                                    </div>
                                </div>

                            </li>

                            <button onClick={handleClick}>
                               <div>
                               <AiOutlineArrowDown></AiOutlineArrowDown>
                                   </div> 
                                <span>click to read more reviews</span>
                            </button>

                            {status ? 
                            <li>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className="rating-imageBox">
                                    {/* <img src="" alt="error" /> */}
                                    S
                                </div>

                                <div className="review-details">
                                    <h4>Sanjay</h4>

                                    <div className="review-rating">
                                        <AiFillStar className="star"></AiFillStar>
                                        
                                        <span style={{ color: "#228d27",fontWeight:"700"}}>5.0</span>
                                        <p>Thank you for a timely visit and service of my ac.I have paid in cash the balance amount. Thank you!</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                              : ""}
                            <li></li>
                        </ul>
                    </div>
                </li>
            </ul >
        </StyleReviewsCont >
    )
}
