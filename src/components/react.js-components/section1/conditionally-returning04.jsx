const Item = ({ item, isPacked }) => {
  return <li>{isPacked ? <del>{item} ✅</del> : item}</li>;
};
const PackingList = () => {
  return (
    <ul className="rounded-xl bg-cyan-100 p-4 text-stone-700">
      <Item item="socks" isPacked={false} />
      <Item item="tooth brush" isPacked={true} />
      <Item item="shoes" isPacked={false} />
      <Item item="books" isPacked={true} />
    </ul>
  );
};
export default PackingList;
