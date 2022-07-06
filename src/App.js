import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [comments, setComments] = useState();

  useEffect(() => {
    loadcomments();
  }, []);

  const loadcomments = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComments(response.data);
  };

  return (
    <div className="App">
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.email}</p>
            </div>
          );
        })}
    </div>
  );
}
