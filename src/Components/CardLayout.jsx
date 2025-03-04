import PropTypes from "prop-types";
const CardLayout = ({ article }) =>{
    return(
        <>
        <div className="max-w-sm border border-gray-200 rounded-xl shadow-sm bg-blue-950 text-white transform transition-all duration-400 hover:scale-105 hover:ease-in-out backdrop:-blur-sm  hover:shadow-[0_0_25px_rgba(0,0,0,1)]">
            <img
              className="rounded-t-lg p-4 h-56 object-cover w-full"
              src={article.urlToImage || "/images/alt-img.webp"}
              alt={article.title || "News Image"}
              onError={(e) =>{
                e.target.onerror = null;
                e.target.src = "/images/alt-img.webp"
              }}
            />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {article.title ? article.title.slice(0,25) + "..." : "No Title available"}
            </h5>
            <p className="mb-3 font-normal dark:text-gray-200">
              {article.content ? article.content.slice(0,80) + "..." : "No description"}
            </p>
            <p className="mb-3 font-semibold">{article.publishedAt ? article.publishedAt : "Published Date: Unknown"}</p>
            {article.source && article.source.name && (
              <p className="mb-3 font-semibold">{article.source.name}</p>
            )}
            <a href={article.url || "https://google.com"} target="_blank"><button className="bg-red-500 p-2 font-bold text-white rounded-xl cursor-pointer hover:bg-white hover:text-red-500 backdrop:-blur-sm transform transition-all duration-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]">Read more...</button></a>
          </div>
        </div>
        </>
    )
};
CardLayout.propTypes = {
  article: PropTypes.object.isRequired, // ✅ Define prop type
};
export default CardLayout;