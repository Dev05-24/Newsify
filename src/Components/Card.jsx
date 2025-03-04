import PropTypes from "prop-types";
import CardLayout from "./CardLayout";
import { useEffect, useState } from "react";

const Card = ({category}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apikey = import.meta.env.VITE_API_KEY;
  console.log(apikey);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=${apikey}`
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch news : ${response.status} - ${errorText}`);
        }
        const result = await response.json();
        setData(result.articles);


        console.log("API response : ", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setLoading(false);
      }
    };
    getData();
  }, [category]);

  return (
    <>
    <div className="p-4 mt-20 flex flex-col items-center w-full ">
      <h2 className="font-bold text-black capitalize text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Top Headline - {category}</h2>
    <div className="p-4 mt-10 flex flex-wrap justify-center items-center gap-10 w-full">
      { loading ? (
        <div className="flex justify-center items-center gap-8 w-full">
          <h1 className="text-black text-xl font-bold">News Loading</h1>
          <div className="animate-spin rounded-full h-16 w-16 border-8 border-blue-600 border-t-transparent"></div>
        </div>
      ) : 
      data?.length > 0 ? (
        data.map((article) => (
          <CardLayout key={article.url} article={article} />
        ))
      ) : (
        <p className="text-black font-bold text-xl">Loading news...</p>
      )}
    </div>
    </div>
    </>
  );
};

Card.propTypes = {
  category : PropTypes.string.isRequired,
}

export default Card;
