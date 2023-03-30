function Wrapper(props) {
  console.log(props);
  const wrapperStyle = {
    backgroundColor: props.color,
    width: '250px',
    padding: '20px',
    margin: '20px auto',
  };
  return <div style={wrapperStyle}>{props.children}</div>;
}

export default Wrapper;
