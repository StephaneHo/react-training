import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>La reference de ce livre est</h1>
      <p>{params.bookId}</p>
    </>
  );
};
