import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function PersonalProjectItem({ post }) {
    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(post.slug)} className="project-sneakpeek">
            {post.acf?.pp_sneakpeekimage ? <img src={post.acf?.pp_sneakpeekimage} alt={post.acf?.pp_sneakpeekimage}/> : ''}
            <div className="project-sneakpeek-text">

                {post.acf?.pp_title ? 
                    <div className="project-categories">
                        {post.acf?.pp_category1 ? <h4>{post.acf?.pp_category1}</h4> : ''}
                        {post.acf?.pp_category2 ? <h4>⎟ </h4> : ''}
                        {post.acf?.pp_category2 ? <h4>{post.acf?.pp_category2}</h4> : ''}
                        {post.acf?.pp_category3 ? <h4>⎟ </h4> : ''}
                        {post.acf?.pp_category3 ? <h4>{post.acf?.pp_category3}</h4> : ''}
                        {post.acf?.pp_category4 ? <h4>⎟ </h4> : ''}
                        {post.acf?.pp_category4 ? <h4>{post.acf?.pp_category4}</h4> : ''}
                        {post.acf?.pp_category5 ? <h4>⎟ </h4> : ''}
                        {post.acf?.pp_category5 ? <h4>{post.acf?.pp_category5}</h4> : ''}
                    </div>
                : ''}
                {post.acf?.pp_title ? <h2>{post.acf?.pp_title && parse(post.acf?.pp_title)}</h2> : ''}
                
                {post.acf?.pp_title ?
                <div className="project-sneakpeek-more">
                <p> Se mere </p>
                 <p className="project-sneakpeek-arrow">→</p>
                </div>
                : ''}
            </div>
        </article>
    );
}