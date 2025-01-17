import UseFetch from "./UseFetch";

function App() {
  const { data, isLoading, error } = UseFetch("https://jsonplaceholder.typicode.com/todos");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
