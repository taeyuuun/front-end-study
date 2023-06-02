import logo from './logo.svg';
import './App.css';

function App() {
  let a = 1;
  const onClickButton = () => {
    a++;
    console.log(a)
  }
  return (
    <>
      <p>{a}</p>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}

export default App;
