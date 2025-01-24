```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to set count based on previous count value
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```