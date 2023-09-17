interface Props {
  count: number;
}

const Navbar = ({ count }: Props) => {
  return <div>Items count {count}</div>;
};

export default Navbar;
