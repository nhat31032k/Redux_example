import React, { useEffect, useState } from "react";
import axios from "axios";
// function get photo
const getPhotos = async (page) => {
  const enpoint = `https://picsum.photos/v2/list?page=${page}&limit=10`;
  try {
    const res = await axios.get(enpoint);
    return res.data;
  } catch (error) {
    console.log(error);
  }
  // return axios
  //   .get(enpoint)
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   });
  // const res = await fetch(enpoint);
  // const data = res.json();
};

const Photo = () => {
  const handleLoadNext = async () => {
    const items = await getPhotos(page);
    console.log("nextpage : ", page);
    const newItems = [...photos, ...items];
    setPhotos(newItems);
    setPage(page + 1);
  };
  const handleLoadPrev = async () => {
    const items = await getPhotos(page - 1);
    console.log("prevpage : ", page - 1);
    const newItems = [...items];
    // kiểm tra nếu page < 1 thì không load nữa
    if (page <= 1) {
      return;
    } else {
      setPhotos(newItems);
      setPage(page - 1);
    }
  };
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  // const [prevPage, setPrevPage] = useState(1);
  useEffect(() => {
    handleLoadNext();
    handleLoadPrev();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.length > 0 &&
          photos.map((item, index) => (
            <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadNext}
          // className="inline-block px-8 py-4 bg-cyan-500 text-white"
        >
          Load More
        </button>
        <button onClick={handleLoadPrev}>Prev</button>
      </div>
    </div>
  );
};

export default Photo;
