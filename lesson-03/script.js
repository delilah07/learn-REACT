const App = () => {
  const [btnText, setBtnText] = React.useState('Click me');
  const [classesList, setClassesList] = React.useState('');

  const onBtnClick = () => {
    setBtnText(`Hello from React, ${Math.random()}`);
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.querySelector('#react-app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
