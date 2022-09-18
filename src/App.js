import logo from "./logo.svg";
import "./App.css";
import Chart2 from "./Chart";

function App() {
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "bar",
        label: "당신이 좋아하는 장르 테스트잼",
        backgroundColor: [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "navy",
          "purple",
        ],
        data: [10, 7, 5, 4, 2, 1, 0.5],
      },
    ],
  };

  const data2 = {
    labels: ["순정", "무협", "양산형", "우산형", "우비형", "우리형"],
    datasets: [
      {
        type: "radar",
        label: "당신이 좋아하는 그림체잼",
        fill: true,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [40.33, 32.17, 25.53, 17.53, 9.53, 23.0],
      },
    ],
  };

  return (
    <div className="App">
      <Chart2 data={data1}></Chart2>
      <Chart2 data={data2}></Chart2>
    </div>
  );
}

export default App;
