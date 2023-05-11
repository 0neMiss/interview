// import axios from "axios";
import { fetchAndSortVideos } from "./utils";

describe("Utils Test Suite", () => {
  it("Returns proper amount of videos from API", async () => {
    const result = await fetchAndSortVideos();

    expect(result.length).toBe(2);
  });
  // it("Returns a sorted list of videos", async () => {});
});
