import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Chart2 = (props) => {
  const data = props.data;
  return (
    <Container>
      <Line type="line" data={data} />
    </Container>
  );
};

export default Chart2;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;
