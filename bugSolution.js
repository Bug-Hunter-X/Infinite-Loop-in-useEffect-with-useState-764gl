```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic to set count only once on mount, using a variable to avoid infinite loop 
    let countValue = 1;
    setCount(countValue);
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```