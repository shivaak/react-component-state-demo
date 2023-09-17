interface Props {
  items: string[];
}
const Cart = ({ items }: Props) => {
  return (
    <>
      <div>cart</div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
