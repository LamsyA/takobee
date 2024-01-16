'use client'

import { Rating } from "@mui/material";
import { useState } from "react";

interface ProductDetailsProps{
    product: any
}


export type SeletedImg = {
    color: string
    colorCode: string
    image: string
}

export type CartProductType = {
    id: string
    name: string
    description: string
    category: string
    brand: string
    selectedImg: SeletedImg
    quantity: number
    price: number
}



const Horizontal = () => {
    return <hr className="w-[30% my-2]">
    </hr>
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    const  [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price
    } )
    const productRating = product.reviews.reduce
    ((acc:Number, item:any) => item.rating + acc, 0)/ product.reviews.length

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>Images</div>
            <div className="flex flex-col gap-1 text">
                <h2 className="text-3xl font-medium text-emerald-400
                ">{product.name}</h2>
                <div className="flex items-center gap-2"> 
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">
                    {product.description}</div>
            <Horizontal/>
            <div>
                <span className="font-semibold">CATEGORY:</span> {product.category}
            </div>
            <div>
                <span className="font-semibold">BRA ND:</span> {product.brand}
            </div>
            <div className={product.inStock ? "text-green-500" : "text-red-500"}>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</div>
            <Horizontal/>
            <div>Color</div>
            <Horizontal/>
            <div>Quantity</div>
            <Horizontal/>
            <div>Add to cart</div>
            </div>
        </div>
     );
}
 
export default ProductDetails;