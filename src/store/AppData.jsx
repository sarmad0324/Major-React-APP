import { createContext, useReducer } from "react";

export const FeedList = createContext({
  postList: [],
  addPost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
    if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, loca, img, caption ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        location: loca,
        img: img,
        caption: caption,
      },
    });
  };


  return (
    <FeedList.Provider value={{ postList, addPost }}>
      {children}
    </FeedList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "101",
    userId: "Sarmxd_",
    location: "Lahore",
    img: "https://static.toiimg.com/img/87958950/Master.jpg",
    caption: "too many wishes too many mistakes",
  },
  {
    id: "102",
    userId: "Alexa201",
    location: "Paris",
    img: "https://i.pinimg.com/736x/3f/b3/ce/3fb3ce69253047afab39869a2691f766.jpg",
    caption: "Loving this adventure",
  }
];

export default PostListProvider;