import axios from "axios";

export function textTruncate(text, limit = 30) {
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
}

export const getBookImage = async (isbn, title) => {
  // First attempt to fetch the book by ISBN
  const isbnUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  try {
    const isbnResponse = await axios.get(isbnUrl);
    const isbnData = isbnResponse.data;

    if (isbnData.totalItems > 0) {
      const volumeInfo = isbnData.items[0].volumeInfo;
      const imageUrl = volumeInfo.imageLinks?.thumbnail;

      if (imageUrl) {
        console.log("Image URL from ISBN:", imageUrl);
        return imageUrl;
      } else {
        console.log("No image available for this book.");
      }
    } else {
      console.log("No book found with this ISBN. Searching by title...");
    }
  } catch (error) {
    console.error("Error fetching ISBN data:", error);
  }

  // If no book found by ISBN, attempt to fetch by title
  const formattedTitle = title.replace(/\s+/g, "+").toLowerCase(); // Replace spaces with '+' and lowercase
  // const titleUrl = `https://openlibrary.org/search.json?q=${formattedTitle}`;
  const titleUrl = `https://www.googleapis.com/books/v1/volumes?q=${formattedTitle}`;

  try {
    const titleResponse = await axios.get(titleUrl);
    const titleData = titleResponse.data;


    if (titleData.totalItems > 0) {
      const volumeInfo = titleData.items[0].volumeInfo;
      const imageUrl = volumeInfo.imageLinks?.thumbnail;

      if (imageUrl) {
        console.log("Image URL from Title:", imageUrl);
        return imageUrl;
      } else {
        console.log("No image available for this book.");
      }
    } else {
      console.log("No book found with this title.");
    }
  } catch (error) {
    console.error("Error fetching title data:", error);
  }

  return null; // Return null if no image found
};
