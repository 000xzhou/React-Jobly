function ItemList({ name, description, logoUrl, numEmployees }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Employees: {numEmployees}</p>
    </div>
  );
}

export default ItemList;
