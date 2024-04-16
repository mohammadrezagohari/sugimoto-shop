export interface IProduct {
    id: number;
    slug?: string;
    title: string;
    price: number;
    priceOff?: number;
    image: string | string[];
    brand?: string;
    desc?: string;
}