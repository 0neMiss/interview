import { useState } from "react";
import "./page.css";

/**
 *
 * Scenario:
 *
 * A jr. developer on your team submitted the following code for review. Take
 * time to review their code and offer suggestions for improvement. Key areas
 * to focus on are: the react lifecycle, performance, readability, and
 * hardening an application that works with a dynamic CMS.
 *
 * The jr. developer was tasked with creating the following feature:
 *
 * Build a page that meets the following criteria:
 * - Renders the current time, updated every half second
 * - Renders a list of row data that is recieved from a CMS
 * - Poll the CMS endpoint to fetch the latest data every 10 seconds
 *
 */

interface DisplayData {
  type: string;
  title: string;
  description: string;
}

interface RowProps {
  data: DisplayData;
}

interface Props {
  // This data is recieved from a CMS API response
  initialData: DisplayData[];
}

const mockApiCall = async () => {
  // Pretend this data was returned from an API
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
