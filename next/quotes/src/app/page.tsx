import BookCreateForm from "@/components/books/book-create-form";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Mes livres preferes</h1>
      </div>
      <div>
        <BookCreateForm />
      </div>
    </div>
  );
}

export default Home;
