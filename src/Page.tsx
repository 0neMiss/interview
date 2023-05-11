/* eslint-disable */
import "./page.css";
import { useEffect, useState } from "react";
import { fetchAndSortVideos } from "./utils";
import { Video } from "./interfaces";

/**
 *
 * Scenario:
 *
 *
 */

interface VideoProps {}

const VideoCard: React.FC<VideoProps> = (props) => {
  return (
    <div className="video-card">{/* render a video thumbnail and title */}</div>
  );
};

const Page = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  return (
    <div className="page">
      {/* Render a swimlane header and a list of videos */}
    </div>
  );
};

export default Page;
