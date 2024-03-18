"use client";

import { formatDate } from "@/utils/strapi.utils";
import Image from "next/image";
import { FC, useState } from "react";

interface FlyBlockProps {
    data: any,
}

 
const FlyBlock: FC<FlyBlockProps> = (props) => {
    const [isLiked, setLike] = useState(false);
    const {data} = props;

    const changeLike = () => {
        setLike(!isLiked);
    }
    
    return (
        <div className="flyblock">
            <div className="flyblock__date">{formatDate(data.Date)}</div>

            {data.airlineName ? <div className="flyblock__airline"><Image src={data.airlineLogo} alt={data.airlineName} className="flyblock__airline--logo" /></div> : 'empty'}

            <div className="flyblock__content">
                <p className="flyblock__copy flyblock__origin">{data.Origin}</p>
                <div className="flyblock__divider">
                    <span></span>
                    <Image src="/img/airplane.svg" alt="" className="flyblock__airplane" />
                    <span></span>
                </div>
                <div className="flyblock__destination">
                    <p className="flyblock__copy">{data.Destination}</p>
                    {data.countryName ? <Image src={data.countryFlag} alt={data.countryName} className="flyblock__destination--flag" draggable="false" /> : 'empty'}
                </div>
            </div>

            <div className="flyblock__like">
                <Image src="/img/like.svg" alt="Like it" className={`flyblock__like--img ${isLiked ? 'liked' : ''}`} draggable="false" onClick={() => changeLike()} />
            </div>
        </div>
    );
}
 
export default FlyBlock;