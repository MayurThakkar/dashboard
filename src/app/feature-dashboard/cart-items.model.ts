export interface IShoppingCart {
    shopping_cart_items: IShoppingCartItems;
}

export interface IShoppingCartItems {
    id: string,
    name: string,
    count: number,
    price: number,
    total: number
}