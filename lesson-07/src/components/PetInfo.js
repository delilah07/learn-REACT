// function PetInfo(props) {
//   console.log(props);
//   const { animal, year, hasPet } = props;
//   const text = hasPet
//     ? `My ${animal} is ${year} years old`
//     : "I don't have pets";
//   return <h1>{text}</h1>;
// }

function PetInfo(props) {
  const { animal, year, hasPet } = props;

  return hasPet ? (
    <h1>
      My {animal} is {year} years old
    </h1>
  ) : (
    <h1>I don't have pets</h1>
  );
}

export default PetInfo;
