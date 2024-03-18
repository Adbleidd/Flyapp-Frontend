"use client";

import { FC, useEffect } from "react";
import { useState } from "react";
import FlyBlock from "./FlyBlock";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BASE_URL } from "@/utils/strapi.utils";

interface FlyBlocksProps {
    items: any,
}
 
const FlyBlocks: FC<FlyBlocksProps> = (props) => {
    const [itemsNumber, setItemsNumber] = useState(6);
    const {items} = props;
    const {ref, inView} = useInView();

    useEffect(() => {
      if (inView) {
        if (itemsNumber + 6 > items.length) {
          return setItemsNumber(items.length)
        } else {
          setItemsNumber(itemsNumber + 6);
        }
      }
    }, [inView]);

    return (
        <>
            <div className="home__content">
              {items.slice(0, itemsNumber).map((item: any) => (
                <FlyBlock key={item.id} data={item} />
              ))}
            </div>
            <Link className="btn" ref={ref} href={BASE_URL + '/admin/auth/login'}>Add flight</Link>
        </>
    );
}
 
export default FlyBlocks;