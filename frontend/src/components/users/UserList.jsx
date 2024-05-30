import useAPI from "../../hooks/useAPI";

function UserList() {
  const [users, loading, error] = useAPI("request", "users");

  console.log(users);
  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.join(", ")}</div>;
  return (
    <>
      <div>UserList</div>
    </>
  );
}

export default UserList;
