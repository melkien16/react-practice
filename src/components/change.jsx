const person = [
  { name: "abera", age: 87 },
  { name: "Tewabech", age: 65 },
  { name: "Aster", age: 90 },
];

export const Change = () => {
  return (
    <div className="names">
      {person.map((person) => (
        <div>
          <h1>{person.name}</h1>
          <h1>{person.age}</h1>
        </div>
      ))}
    </div>
  )
}
