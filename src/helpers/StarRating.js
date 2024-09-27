import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating, color, size }) {
    let stars = [];
    if(!rating)
        rating = 0;
    for(let x = 0; x < 5; x++){
        if(rating < x + .2)
            stars.push(<FaRegStar key={x} style={{ color: color }} size={size} />);
        else if(rating < x + .8)
            stars.push(<FaStarHalf key={x} style={{ color: color }} size={size} />);
        else
            stars.push(<FaStar key={x} style={{ color: color }} size={size} />);
    }

    return(
        <div className="flex items-center">
            {stars}
            {/* <p className="ml-2">({rating})</p> */}
        </div>
    )

    // if (rating < .25) {
    //     return (
    //         <div className="flex w-24">
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // else if (rating < .75) {
    //     return (
    //         <div className="flex w-24">
    //             <FaStarHalf style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // else if (rating < 1.25) {
    //     return (
    //         <div className="flex w-24">
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // if (rating == '3.5') {
    //     return (
    //         <div className="flex w-24">
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStarHalf style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // if (rating == '4') {
    //     return (
    //         <div className="flex w-24">
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaRegStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // if (rating == '4.5') {
    //     return (
    //         <div className="flex w-24">
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStarHalf style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }
    // if (rating == '5') {
    //     return (
    //         <div className="flex w-24">
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //             <FaStar style={{ color: color }} size={size} />
    //         </div>
    //     )
    // }

}