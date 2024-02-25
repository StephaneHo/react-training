const rewind = (movie: unknown): string => {
  if (typeof movie === "string") return movie;
  throw new Error("ce n'est pas un film");
};
