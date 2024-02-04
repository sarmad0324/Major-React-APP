import Post from './Post'
import { useContext } from "react";
import { FeedList as FeedListData } from "../store/AppData";
const Feed = () => {
  const { postList } = useContext(FeedListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
 

export default Feed
