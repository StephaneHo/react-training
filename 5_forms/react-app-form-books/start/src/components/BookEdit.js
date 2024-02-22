export const BookEdit = ({ book, onSubmit }) => {
  let title = "temp title";
  const handleChange = (event) => {};

  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>Nouveau titre:</label>
      <input
        className="mx-3 bg-slate-300 rounded-sm"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Enregistrer</button>
    </form>
  );
};
