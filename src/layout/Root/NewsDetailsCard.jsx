import { Link } from "react-router";


const NewsDetailsCard = ({news}) => {

   
    return (
        <div>
            <img className="w-full h-[350px] object-cover" src={news.image_url} alt="" />
            <h2 className="text-2xl mt-2">{news.title}</h2>
            <p className="my-5">{news.details}</p>
            <Link to={`/category/${news.category_id}`}>
            <button className="px-3 p-2 bg-secondary text-white sticky">All news in this category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;