export interface CartItem {
  product_id: string;
  category: string;
  delete: any;
  product: string;
  quantity: number;
  price: number;
  regular_price:number;
  total_price: number;
  discountsApplied?: string;
  appliedTo?: string;
  applyTo: string;
  images:any[];
}

export class Orders {
  line_items:Line_items[];
  billing:Billing;
  fee_lines:Fee_lines[];
  customer_id:number
  status:string
}
export class Fee_lines{
name: string;
total: string;
  }
export class Line_items {
  product_id:number;
  quantity:number;
  images:any[];
}

export class Billing {
        first_name: string;
        last_name: string;
        company: string;
        address_1: string;
        address_2:string;
        city:string;
        state:string;
        postcode: string;
        country: string;
        email:string;
        phone: string;
}
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  regular_price:number;

  available: string;
  applyTo?: string;
  images:any[];

}

export interface Promotion {
  id: string;
  name: string;
  category: string;
  price: string;
  regular_price:string;

  available: string;
  applyTo?: string;
  images:any[];
}

export interface ConfigJson {
  products: Product[];
  promotions: Promotion[];
}
