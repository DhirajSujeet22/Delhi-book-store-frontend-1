import React from "react";
import LeftSidebar from "../components/LeftSidebar";

const CategoryPage = () => {
  const highlyRatedBooks = [
    {
      id: 1,
      title: "The Pragmatic",
      author: "Andrew Hunt",
      image:
        "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC._SR360,460.jpg",
      rating: "4.5",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC._SR360,460.jpg",
      rating: "4.7",
    },
    {
      id: 3,
      title: "The Clean Coder",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/710e2r4iKML._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
      rating: "4.8",
    },
    {
      id: 4,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      image:
        "https://m.media-amazon.com/images/I/81iss3ldpLL._AC._SR360,460.jpg",
      rating: "4.6",
    },
  ];

  const mostWishedForBooks = [
    {
      id: 5,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image:
        "https://m.media-amazon.com/images/I/71FnvvhcaTL._AC._SR360,460.jpg",
      rating: "4.9",
    },
    {
      id: 6,
      title: "JavaScript: The Good ",
      author: "Douglas Crockford",
      image:
        "https://m.media-amazon.com/images/I/81Wbfijio4L._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
      rating: "4.4",
    },
    {
      id: 7,
      title: "Refactoring",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/71Ge374aXuL._AC._SR360,460.jpg",
      rating: "4.6",
    },
    {
      id: 8,
      title: "Design Patterns",
      author: "Erich Gamma",
      image:
        "https://m.media-amazon.com/images/I/81x2no7lwcL._AC._SR360,460.jpg",
      rating: "4.7",
    },
  ];

  const mostgiftedForBooks = [
    {
      id: 5,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image:
        "https://m.media-amazon.com/images/I/71FnvvhcaTL._AC._SR360,460.jpg",
      rating: "4.9",
    },
    {
      id: 6,
      title: "JavaScript: The Good ",
      author: "Douglas Crockford",
      image:
        "https://m.media-amazon.com/images/I/81Wbfijio4L._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
      rating: "4.4",
    },
    {
      id: 7,
      title: "Refactoring",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/71Ge374aXuL._AC._SR360,460.jpg",
      rating: "4.6",
    },
    {
      id: 8,
      title: "Design Patterns",
      author: "Erich Gamma",
      image:
        "https://m.media-amazon.com/images/I/81x2no7lwcL._AC._SR360,460.jpg",
      rating: "4.7",
    },
  ];

  const HotnewBooks = [
    {
      id: 5,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      image:
        "https://m.media-amazon.com/images/I/71FnvvhcaTL._AC._SR360,460.jpg",
      rating: "4.9",
    },
    {
      id: 6,
      title: "JavaScript: The Good ",
      author: "Douglas Crockford",
      image:
        "https://m.media-amazon.com/images/I/81Wbfijio4L._UX300_PJku-sticker-v8,TopRight,0,-50._AC._SR360,460_.jpg",
      rating: "4.4",
    },
    {
      id: 7,
      title: "Refactoring",
      author: "Martin Fowler",
      image:
        "https://m.media-amazon.com/images/I/71Ge374aXuL._AC._SR360,460.jpg",
      rating: "4.6",
    },
    {
      id: 8,
      title: "Design Patterns",
      author: "Erich Gamma",
      image:
        "https://m.media-amazon.com/images/I/81x2no7lwcL._AC._SR360,460.jpg",
      rating: "4.7",
    },
  ];

  const books = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/71Zb3XmVHML._AC_UL480_QL65_.jpg",
      title: "Book One",
      author: "Author One",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/71Zb3XmVHML._AC_UL480_QL65_.jpg",
      title: "Book Two",
      author: "Author Two",
      rating: 4.7,
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/71Zb3XmVHML._AC_UL480_QL65_.jpg",
      title: "Book Three",
      author: "Author Three",
      rating: 4.9,
    },
  ];

  return (
    <>
      <div className="p-4 md:flex md:space-x-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/6">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4">
          {/* Highly Rated Section */}
          <div>
            <div className="flex justify-between items-center mb-4 ml-5">
              <h2 className="text-2xl font-semibold">Highly Rated </h2>
              <a href="#!" className="text-blue-500 font-bold hover:underline">
                See More
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlyRatedBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between h-72"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-32 object-cover mb-3"
                  />
                  <h3 className="text-lg">{book.title}</h3>
                  <p className="text-gray-500 text-center">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-auto">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Wished For Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Most Wished For</h2>
              <a href="#!" className="text-blue-500 font-bold hover:underline">
                See More
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mostWishedForBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between h-72"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-38 object-cover mb-3"
                  />
                  <h3 className="text-lg">{book.title}</h3>
                  <p className="text-gray-500 ">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-auto">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Gifted For Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Most Gifted For</h2>
              <a href="#!" className="text-blue-500 font-bold hover:underline">
                See More
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mostgiftedForBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between h-72"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-38 object-cover mb-3"
                  />
                  <h3 className="text-lg">{book.title}</h3>
                  <p className="text-gray-500 ">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-auto">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hot New Releases Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Hot New Releases</h2>
              <a href="#!" className="text-blue-500 font-bold hover:underline">
                See More
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HotnewBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between h-72"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-40 w-38 object-cover mb-3"
                  />
                  <h3 className="text-lg">{book.title}</h3>
                  <p className="text-gray-500 ">by {book.author}</p>
                  <p className="text-yellow-500 font-bold mt-auto">
                    ⭐ {book.rating}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* featured  */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <div className="flex items-center justify-center">
                <p className="text-yellow-500 font-bold">⭐ {book.rating}</p>
              </div>
              <h1 className="flex items-center justify-center">PaperBags</h1>
              <h1 className="flex items-center justify-center">Price:</h1>
            </div>
          ))}
        </div>
      </div>

      {/* featured 2 */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <div className="flex items-center justify-center">
                <p className="text-yellow-500 font-bold">⭐ {book.rating}</p>
              </div>
              <h1 className="flex items-center justify-center">PaperBags</h1>
              <h1 className="flex items-center justify-center">Price:</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="p-2 md:p-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white  shadow-lg rounded-lg p-2 flex flex-col items-center text-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-48 w-38 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">by {book.author}</p>
              <div className="flex items-center justify-center">
                <p className="text-yellow-500 font-bold">⭐ {book.rating}</p>
              </div>
              <h1 className="flex items-center justify-center">PaperBags</h1>
              <h1 className="flex items-center justify-center">Price:</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center bg-gray-300 items-center p-4">
        <span className="text-blue-600 text-lg md:text-xl lg:text-1xl cursor-pointer hover:underline">
          See All Results
        </span>
      </div>

      {/* text */}
      <div className="p-2 md:p-2  bg-gray-50 text-gray-800">
        <h2 className="text-1xl  text-red-500 font-semibold mb-1">
          DBS Offers an Extraordinary Collection of Action and Adventure Books
        </h2>
        <p className="text-1xl font-semibold mt-2 mb-1">
          Get hooked to action-packed fiction, visit{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Action & Adventure
          </span>
          .
        </p>
        <p className="text-sm">
          Are you hooked more into books that give you excitement to make your
          boring weekend into action-packed? A lot of books can actually play
          the part of a boredom buster with much excitement and adventure. A
          good collection of Sidney Sheldon or some editions of classics or the
          Dan Brown creative, you name it, it’s featured in the Amazon list.
          Grab your favourite book right away.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          Action and Adventures Books are Always Fun
        </h3>
        <p className="text-sm">
          Action and adventure books have always been a favourite to most of us,
          especially during our childhood days when the fantasies knew no
          limits. *The Adventures of Huckleberry Finn* were not just
          Huckleberry’s adventures alone; our childhood days were all an
          integral part of it. In that way, these books shaped our imagination
          and so should we do with the little ones of today’s time. Introduce
          your child to your childhood adventure books and let their imagination
          run wild. Continue your passion for action and adventure books and
          expand your collection by buying online at Amazon.in.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          A Budget-Friendly Collection
        </h3>
        <p className="text-sm">
          The collection of action and adventure books available at Amazon.in is
          wide and includes an exclusive list of books at discounted rates.
          Moreover, you get an amazing collection in various other languages,
          including Spanish, French, German, Italian, etc. There’s no way you’ll
          run out of choices from the extensive range of action and adventure
          books.
        </p>

        <h3 className="text-1xl font-semibold mt-2 mb-1">
          Shop Online Action and Adventure Books at DBS
        </h3>
        <p className="text-sm">
          Amazon.in offers you the extensive collection of books in different
          formats. Kindle versions of most of the books can be grabbed either at
          really low prices or absolutely free of cost. Narrow down your search
          based on the formats available, including board book, Kindle eBooks,
          paperback, audiobook, pocket book, bundle, loose leaf, etc. Find your
          favourite author and narrow down your search further to find what you
          want. Avail cash on delivery on most of the books available. If you
          are looking for books on heavy discounts, you won’t be disappointed
          either. At Amazon.in, you can avail books at discount rates of 10%,
          25%, 35% and even 50% or more. Whatever your budget, Amazon.in offers
          you a great deal on your favourite action and adventure books.
        </p>
      </div>
    </>
  );
};

export default CategoryPage;
