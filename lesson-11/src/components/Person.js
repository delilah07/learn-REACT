function Person(props) {
  console.log(props);
  const { firstName, lastName, email, img } = props;
  return (
    <div className="card">
      <h1>
        {firstName} {lastName}
      </h1>
      <img src={img} alt={lastName} />
      <h2>{email}</h2>
    </div>
  );
}

export default Person;
