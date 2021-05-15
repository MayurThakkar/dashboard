export interface IShoppingCart {
    shopping_cart_items: IShoppingCartItems;
}

export interface IShoppingCartItems {
    name: string,
    count: number,
    price: number
}