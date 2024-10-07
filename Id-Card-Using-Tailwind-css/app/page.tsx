import Card from "./components/card/Card";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-between py-10">
      <Card name="Muhammad Ibrahim" age={16} rollNo={263336} day="Monday" Class="14th" />
      <Card name="Muhammad Huzaifa" age={17} rollNo={233366} day="Sunday" Class="11th" />
      <Card name="Tayyiba Hasnain" age={15} rollNo={3263} day="Thursday" Class="10th" />
    </div>
  );
}

export default Home;