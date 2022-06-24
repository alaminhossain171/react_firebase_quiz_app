import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Styles from "../styles/Videos.module.css";
import Video from "./Video";
const Videos = () => {
  const [page, setPage] =useState(1);

  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <>
    {videos.length > 0 && (
        <InfiniteScroll
        className={Styles.videos}
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
              to={{
                pathname: `/quiz/${video.youtubeID}`,
                state: {
                  videoTitle: video.title,
                },
              }}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
     
    </>
  );
};

export default Videos;
