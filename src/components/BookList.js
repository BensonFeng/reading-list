import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
export default function BookList({ books }) {
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "books", id));
    console.log(id);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
