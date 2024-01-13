'use client'

import Image from "next/image";

interface ProductCardProps{
    data: any   
}
const ProductCard: React.FC<ProductCardProps>   = ({data}) => {
    return ( 
        <div className="col-span-1 cursor-pointer border-[1.2px]
        border-slate-200 bg-slate-50 dark:border-lime-400 dark:bg-white
         rounded-sm p-2 dark:shadow-white  dark:hover:shadow-lg
        transition hover:scale-105 text-center text-sm">
            <div className="flex flex-col item-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full"> 
                    <Image
                    fill
                    src={data.images[0].image}
                    alt="product image"
                    className="object-contain w-full h-full"
                    />
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     );
}
 
export default ProductCard;