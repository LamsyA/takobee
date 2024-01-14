export const truncateText = (text: string) => {
    if(text.length > 25) {
        return text.slice(0, 25) + '...';
    }
    return text;
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(price);
}