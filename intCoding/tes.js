const Child = React.memo(({ user }) => {
  console.log("Child render");
  return <div>{user.name}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "Jhana" }), []);

  return (
    <>
      <button onClick={() => setCount(c+1)}>+</button>
      <Child user={user} />
    </>
  );
}
