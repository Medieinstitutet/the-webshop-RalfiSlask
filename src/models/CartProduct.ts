export class CartProduct {
  constructor(
    public title: string,
    public cartId: number,
    public price: number,
    public imgUrl: string,
    public quantity: number
  ) {}
}
