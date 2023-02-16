const App = (props) => {
  const { initialBtnText, resultClassesList } = props;
  const [btnText, setBtnText] = React.useState(initialBtnText);
  const [classesList, setClassesList] = React.useState('');

  const onBtnClick = () => {
    setBtnText(`Hello from React, ${Math.random()}`);
    setClassesList(resultClassesList);
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
root.render(
  <App initialBtnText="Click me, please" resultClassesList="green-btn" />
);
