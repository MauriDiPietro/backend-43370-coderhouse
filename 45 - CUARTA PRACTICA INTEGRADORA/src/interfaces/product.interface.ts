export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}
/* ------------------------------------ - ----------------------------------- */



interface Product2 extends Product {
    color: string;
}

export type ProductType = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

type ProductType2 = ProductType & {
    color: string;
}

type ProductType3 = Pick<ProductType, 'name' | 'description'>

type ProductType4 = Omit<ProductType, 'name' | 'description'>



