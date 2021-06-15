import {StyleRatingCardCont} from "../../StyledComponents/AcServiceAndRepairStyle.js"
import {AiFillStar} from "react-icons/ai"

export const RatingCard = () => {
    return (
        <StyleRatingCardCont>

            <div className="leftDiv">
                
                <span>
                <AiFillStar style={{color:"#228d27",fontSize:"24px",fontWeight:"400"}}></AiFillStar>
                
                    <span style={{color:"#228d27",fontSize: "24px" ,fontWeight:"700",marginTop:"40px"}}>4.7</span>

                    <span style={{color:"#228d27",fontSize: "24px",fontWeight:"700"}}>/</span>

                    <span style={{color:"#228d27",fontSize: "18px",fontWeight:"700"}}>5</span>
                </span>
                <p  className="ratingCardP">based on 38.997 ratings</p>

            </div>

            <div className="rightDiv">

                <span className="bookingNum">2,93,485</span>

                <p   className="ratingCardP" >Bookings done in last 1 year</p>
            </div>

        </StyleRatingCardCont>
    )
}
