export class CartProduct {
  constructor(
    public title: string,
    public productId: number,
    public price: number,
    public imgUrl: string,
    public amount: number
  ) {}
}
