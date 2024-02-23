import axios from "axios";

export const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: "Client-ID ydiz4AVVi2K7H1RiFfw3eEuo8X2dVWl9hGOhRuOeHxc",
    },
    params: {
      query: // nos parametre de la query
    },
  });

  console.log("response", response.data.results);
  return response.data.results;
};
