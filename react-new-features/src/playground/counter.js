// Counter App

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')


    useEffect(() => {
        console.log('This should only run once')
    }, [])


    useEffect(() => {
        console.log('This should only every time the count changes')
        document.title = count
    }, [count])


    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />    
        </div>
    );
};

App.defaultProps = {
    count: 0
};