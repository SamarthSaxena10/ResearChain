import { FC, ReactNode, useState } from 'react';
import { Button } from 'src/components/Button';
import { useBlog } from 'src/context/Blog';
// creating a post form component to create a post with title and content , image(optional) , file (optional) and a submit button
export const PostForm = (props) => {
  const { user } = useBlog();
  const {
    onSubmit,
    postTitle,
    postContent,
    setPostContent,
    setPostTitle,
    postImage,
    setPostImage,
    postFile,
    setPostFile,

    formHeader,
    buttonText = 'Post',
  } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="rounded-lg py-4 px-6 bg- flex flex-col ">
      {formHeader}
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        type="text"
        placeholder="Post title"
        className="bg-white rounded-3xl h-10 px-4 black"
      />
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        name="content"
        id="content-area"
        rows={3}
        placeholder="Describe your post..."
        className="bg-white rounded-xl px-4 py-2 mt-3 black"
      ></textarea>
      <div className="flex items-center mt-3">
        <input
          type="file"
          id="post-image"
          accept="image/*"
          onChange={(e) => setPostImage(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="post-image" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6m6 0z"
            />
          </svg>
        </label>
        <input
          type="file"
          id="post-file"
          accept="image/*"
          onChange={(e) => setPostFile(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="post-file" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6m6 0z"
            />
          </svg>
        </label>
      </div>

      <Button
        loading={loading}
        className="mt-3"
        onClick={async () => {
          setLoading(true);
          await onSubmit();
          setLoading(false);
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

//       <input type="file" name="file" id="file" className="hidden" />
//       <Button
//         className="mt-3"
//         disabled={!user}
//         loading={loading}
//         onClick={async () => {
//           setLoading(true);
//           await onSubmit();
//           setLoading(false);
//         }}
//       >
//         {buttonText}
//       </Button>
//     </div>
//   );
// };
