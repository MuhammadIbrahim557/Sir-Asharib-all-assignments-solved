interface Tcard {
  name: string;
  age: number;
  rollNo: number;
  day: string;
  Class:string
}

function Card({ name, age, rollNo, day, Class}:Tcard) {
  return (
    <div className=" flex flex-col  bg-white border border-gray-100 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Roll No: {rollNo}</p>
      <p className="text-gray-600">Day: {day}</p>
      <p className="text-gray-600">Class: {Class}</p>

    </div>
  );
}

export default Card;
