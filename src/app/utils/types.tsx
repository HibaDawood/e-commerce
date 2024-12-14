
export type Product = {
    id: number;
    title: string;
    image?: any ;
    slug: string;
    price: number;
    discount?: any
    category: string;
    description: string;
    size: string[];
    color: string[];
    qty: number;
    
};
export type Cart = {
    id: number;
    title: string;
    image?: any;
    slug: string;
    price: number;
    discount?: bigint;
    category: string;
    size: string;
    qty: number;
    uuid: number;
    color: string;
};