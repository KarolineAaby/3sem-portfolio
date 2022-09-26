import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

export default function ProjectItem({ post }) {
    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(post.slug)} className="project-sneakpeek">
            {post.acf?.sneakpeekimage ? <img className="project-sneakpeek-web" src={post.acf?.sneakpeekimage} alt={post.acf?.sneakpeekimage}/> : ''}
            {post.acf?.sneakpeekimage_mobile ? <img className="project-sneakpeek-mobile" src={post.acf?.sneakpeekimage_mobile} alt={post.acf?.sneakpeekimage_mobile}/> : ''}
            <div className="project-sneakpeek-text">

                {post.acf?.title ? 
                    <div className="project-categories">
                        {post.acf?.category1 ? <h4>{post.acf?.category1}</h4> : ''}
                        {post.acf?.category2 ? <h4>⎟ </h4> : ''}
                        {post.acf?.category2 ? <h4>{post.acf?.category2}</h4> : ''}
                        {post.acf?.category3 ? <h4>⎟ </h4> : ''}
                        {post.acf?.category3 ? <h4>{post.acf?.category3}</h4> : ''}
                        {post.acf?.category4 ? <h4>⎟ </h4> : ''}
                        {post.acf?.category4 ? <h4>{post.acf?.category4}</h4> : ''}
                        {post.acf?.category5 ? <h4>⎟ </h4> : ''}
                        {post.acf?.category5 ? <h4>{post.acf?.category5}</h4> : ''}
                        {post.acf?.category6 ? <h4>⎟ </h4> : ''}
                        {post.acf?.category6 ? <h4>{post.acf?.category5}</h4> : ''}
                    </div>
                : ''}

                {post.acf?.title ? <h2>{post.acf?.title && parse(post.acf?.title)}</h2> : ''}
                {post.acf?.title ? <p className="project-sneakpeek-none">{post.acf?.description && parse(post.acf?.description)}</p> : ''}
                
                {post.acf?.title ?
                <div className="project-sneakpeek-more">
                <p> Se projekt </p>
                 <p className="project-sneakpeek-arrow">→</p>
                </div>
                : ''}

            </div>
        </article>
    );
}