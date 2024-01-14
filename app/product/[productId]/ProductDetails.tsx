'use client'

import { Rating } from "@mui/material";

interface ProductDetailsProps{
    product: any
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    const productRating = product.reviews.reduce
    ((acc:Number, item:any) => item.rating + acc, 0)/ product.reviews.length

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>Images</div>
            <div>details
                <h2 className="text-3xl font-medium text-emerald-400
                ">{product.name}</h2>
                <div> 
                    <Rating value={productRating} readOnly />
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;