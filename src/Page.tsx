import { useState } from "react";
import "./page.css";

interface DisplayData {
  type: string;
  title: string;
  description: string;
}

interface Props {
  // This data is recieved from a CMS API response
  initialData: DisplayData[];
}

interface RowProps {
  data: DisplayData;
}

const mockApiCall = async () => {
  // Pretend this was returned from some API
  const data: DisplayData[] = await fetch("/data.json").then((res) =>
    res.json()
  );

  return data;
};

const Row = (props: RowProps) => {
  const { data } = props;

  return (
    <div className={"row"}>
      <div>{data.title}</div>
      <div>{data.description}</div>
    </div>
  );
};

const Page = (props: Props) => {
  const [time, setTime] = useState(Date.now());
  const [displayData, setDisplayData] = useState(props.initialData);

  setInterval(async () => {
    // Polling CMS API every 10s
    const newData = await mockApiCall();
    setDisplayData(newData);
  }, 10000);

  setInterval(() => {
    setTime(Date.now());
  }, 500);

  const rowArray: JSX.Element[] = [];

  for (let i = 0; i < displayData.length; i++) {
    const element = displayData[i];

    rowArray.push(<Row data={element} />);
  }

  return (
    <div className="page">
      <div>Current Time: {time}</div>
      <div className="wrapper">{rowArray}</div>
    </div>
  );
};

export default Page;
