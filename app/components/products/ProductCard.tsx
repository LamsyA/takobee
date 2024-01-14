'use client'

import Image from "next/image";
import { formatPrice, truncateText } from "@/utils/helperFunc";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
interface ProductCardProps{
    data: any   
}
const ProductCard: React.FC<ProductCardProps>   = ({data}) => {

    const route = useRouter()
    const productRating = data.reviews.reduce
    ((acc:Number, item:any) => item.rating + acc, 0)/data.reviews.length
    return ( 
        <div className="col-span-1 cursor-pointer border-[1.2px] overflow-hidden 
        border-slate-200 bg-slate-50 dark:border-lime-400 dark:bg-white
         rounded-md p-2 dark:shadow-gray-200 w-full dark:shadow-md dark:text-emerald-900
        transition hover:scale-105 text-center text-sm hover:bg-emerald-200 "
        onClick={() => route.push(`/product/${data.id}`)}
        >
            <div className="flex flex-col item-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full"> 
                    <Image
                    fill
                    src={data.images[0].image}
                    alt="product image"
                    className="object-contain w-full h-full"
                    />
                </div>
                <div className="mt-4">{truncateText(data.name)}</div>
                <div>
                    <Rating
                    value={productRating} readOnly
                    />
                </div>
                <div>{data.reviews.length} reviews</div>
                <div className="font-semibold">{formatPrice(data.price)}</div>
            </div>
        </div>
     );
}
 
export default ProductCard;