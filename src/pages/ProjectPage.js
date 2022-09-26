import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjectPage() {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params); //udskriver det slug navn man er inde på i log
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `https://wordpress.karolineaaby.dk/wp-json/wp/v2/projekter?slug=${slug}&_embed&v=99999`; //for at se i browser find i console eller ændre ${slug} til det unikke slug man vil se
            const response = await fetch(url);
            const data = await response.json();
            console.log(data[0]);
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    return (
        <section className="page">
            <section className="project">

                {post.acf?.category1 ? 
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

                {post.acf?.pp_title ? <h4>Personlige projekter</h4> : ''}

                {post.acf?.title ?
                <article className="project-intro">
                    <div>
                       <h1>{post.title && parse(post.title.rendered)}</h1>
                    </div>
                    <p>{post.acf?.description && parse(post.acf?.description)}</p>
                </article>
                : ''}
                
                {post.acf?.pp_title ?
                <article className="personal-project-intro">
                    <div>
                       <h1>{post.title && parse(post.title.rendered)}</h1>
                    </div>
                    <p>{post.acf?.pp_description && parse(post.acf?.pp_description)}</p>
                </article>
                : ''}
                
                {post.acf?.headerimage ? <img src={post.acf?.headerimage} alt={post.acf?.headerimage.alt}/> : ''}
                {post.acf?.pp_headerimage ? <img src={post.acf?.pp_headerimage} alt={post.acf?.pp_headerimage.alt}/> : ''}

                {post.acf?.title ?  
                <article className="project-info">
                    <div>
                        {post.acf?.duration ? <p className="weight-medium">Projektperiode</p> : ''}
                        <p>{post.acf?.duration && parse(post.acf?.duration)}</p>
                    </div>
                    <div>
                        {post.acf?.role ? <p className="weight-medium">Min rolle</p> : ''}
                        <p>{post.acf?.role && parse(post.acf?.role)}</p>
                    </div>
                    <div>
                        {post.acf?.tools ? <p className="weight-medium">Værktøjer</p> : ''}
                        <p>{post.acf?.tools && parse(post.acf?.tools)}</p>
                    </div>
                    <div>
                        {post.acf?.team ? <p className="weight-medium">Team</p> : ''}
                        <p>{post.acf?.team && parse(post.acf?.team)}</p>
                        <br></br>
                        <div className="projectLink">
                            <p>{post.acf?.prototype ? <a href={post.acf?.prototype} target="_blank" rel="noreferrer" className="buttonMain">Prototype</a> : <p></p>}</p>
                            <p>{post.acf?.github ? <a href={post.acf?.github} target="_blank" rel="noreferrer" className="buttonMain">Github</a> : <p></p>}</p>
                        </div>
                    </div>
                </article>
                : ''}

                {post.acf?.problem ? 
                <article className="project-text">
                    <h1>Problem</h1>
                    <p>{post.acf?.problem && parse(post.acf?.problem)}</p>
                </article>
                : ''}

                {post.acf?.goal ?
                <article className="project-text">
                    <h1>Målsætning</h1>
                    <p>{post.acf?.goal && parse(post.acf?.goal)}</p>
                </article>
                : ''}
                
                {post.acf?.imagestart ? <img src={post.acf?.imagestart} alt={post.acf?.imagestart.alt}/> : ''}
                
                {post.acf?.title1 ? 
                <article className="project-text">
                    {post.acf?.title1 ? <h1>{post.acf?.title1 && parse(post.acf?.title1)}</h1> : ''}
                    <p>{post.acf?.text1 && parse(post.acf?.text1)}</p>
                </article>
                : ''}

                {post.acf?.title1_image1 ? <img src={post.acf?.title1_image1} alt={post.acf?.title1_image1}/> : ''}
                {post.acf?.title1_image2 ? <img src={post.acf?.title1_image2} alt={post.acf?.title1_image2}/> : ''}
                {post.acf?.title1_image3 ? <img src={post.acf?.title1_image3} alt={post.acf?.title1_image3}/> : ''}
                {post.acf?.title1_image4 ? <img src={post.acf?.title1_image4} alt={post.acf?.title1_image4}/> : ''}
                {post.acf?.title1_image5 ? <img src={post.acf?.title1_image5} alt={post.acf?.title1_image5}/> : ''}
                {post.acf?.title1_image6 ? <img src={post.acf?.title1_image6} alt={post.acf?.title1_image6}/> : ''}

                {post.acf?.title2 ? 
                <article className="project-text">
                    {post.acf?.title2 ? <h1>{post.acf?.title2 && parse(post.acf?.title2)}</h1> : ''}
                    <div>
                        <p>{post.acf?.text2 && parse(post.acf?.text2)}</p>
                        {post.acf?.title2_pdf ? <a href={post.acf?.title2_pdf} target="_blank" rel="noreferrer" className="buttonMain"><br></br>{post.acf?.title2_pdf_text}</a> : ' '}
                    </div>
                </article>
                : ''}

                {post.acf?.title2_image1 ? <img src={post.acf?.title2_image1} alt={post.acf?.title2_image1}/> : ''}
                {post.acf?.title2_image2 ? <img src={post.acf?.title2_image2} alt={post.acf?.title2_image2}/> : ''}
                {post.acf?.title2_image3 ? <img src={post.acf?.title2_image3} alt={post.acf?.title2_image3}/> : ''}
                {post.acf?.title2_image4 ? <img src={post.acf?.title2_image4} alt={post.acf?.title2_image4}/> : ''}
                {post.acf?.title2_image5 ? <img src={post.acf?.title2_image5} alt={post.acf?.title2_image5}/> : ''}
                {post.acf?.title2_image6 ? <img src={post.acf?.title2_image6} alt={post.acf?.title2_image6}/> : ''}
                {post.acf?.title2_image7 ? <img src={post.acf?.title2_image7} alt={post.acf?.title2_image7}/> : ''}
                {post.acf?.title2_image8 ? <img src={post.acf?.title2_image8} alt={post.acf?.title2_image8}/> : ''}                    

                {post.acf?.title3 ? 
                <article className="project-text">
                    {post.acf?.title3 ? <h1>{post.acf?.title3 && parse(post.acf?.title3)}</h1> : ''}
                    <p>{post.acf?.text3 && parse(post.acf?.text3)}</p>
                </article>
                : ''}

                {post.acf?.title3_image1 ? <img src={post.acf?.title3_image1} alt={post.acf?.title3_image1}/> : ''}
                {post.acf?.title3_image2 ? <img src={post.acf?.title3_image2} alt={post.acf?.title3_image2}/> : ''}
                {post.acf?.title3_image3 ? <img src={post.acf?.title3_image3} alt={post.acf?.title3_image3}/> : ''}
                {post.acf?.title3_image4 ? <img src={post.acf?.title3_image4} alt={post.acf?.title3_image4}/> : ''}

                {post.acf?.title4 ? 
                <article className="project-text">
                    {post.acf?.title4 ? <h1>{post.acf?.title4 && parse(post.acf?.title4)}</h1> : ''}
                    <p>{post.acf?.text4 && parse(post.acf?.text4)}</p>
                </article>
                : ''}

                {post.acf?.title4_image1 ? <img src={post.acf?.title4_image1} alt={post.acf?.title4_image1}/> : ''}
                {post.acf?.title4_image2 ? <img src={post.acf?.title4_image2} alt={post.acf?.title4_image2}/> : ''}
                {post.acf?.title4_image3 ? <img src={post.acf?.title4_image3} alt={post.acf?.title4_image3}/> : ''}
                {post.acf?.title4_image4 ? <img src={post.acf?.title4_image4} alt={post.acf?.title4_image4}/> : ''}
                {post.acf?.title4_image5 ? <img src={post.acf?.title4_image5} alt={post.acf?.title4_image5}/> : ''}
                {post.acf?.title4_image6 ? <img src={post.acf?.title4_image6} alt={post.acf?.title4_image6}/> : ''}
                {post.acf?.title4_image7 ? <img src={post.acf?.title4_image7} alt={post.acf?.title4_image7}/> : ''}

                {post.acf?.title5 ?
                <article className="project-text">
                    {post.acf?.title5 ? <h1>{post.acf?.title5 && parse(post.acf?.title5)}</h1> : ''}
                    <div>
                        <p>{post.acf?.text5 && parse(post.acf?.text5)}</p>
                        {post.acf?.title5_link ? <a href={post.acf?.title5_link} target="_blank" rel="noreferrer" className="buttonMain"><br></br>{post.acf?.title5_link_text}</a> : ' '}
                    </div>
                </article>
                : ''}


                {post.acf?.title5_image1 ? <img src={post.acf?.title5_image1} alt={post.acf?.title5_image1}/> : ''}
                {post.acf?.title5_image2 ? <img src={post.acf?.title5_image2} alt={post.acf?.title5_image2}/> : ''}
                {post.acf?.title5_image3 ? <img src={post.acf?.title5_image3} alt={post.acf?.title5_image3}/> : ''}
                {post.acf?.title5_image4 ? <img src={post.acf?.title5_image4} alt={post.acf?.title5_image4}/> : ''}
                

                {post.acf?.title6 ? 
                <article className="project-text">
                    <h1>{post.acf?.title6 && parse(post.acf?.title6)}</h1>
                    <p>{post.acf?.text6 && parse(post.acf?.text6)}</p>
                </article>
                : ''}
                
                {post.acf?.title6_image1 ? <img src={post.acf?.title6_image1} alt={post.acf?.title6_image1}/> : ''}
                

                {post.acf?.title7 ? 
                <article className="project-text">
                    <h1>{post.acf?.title7 && parse(post.acf?.title7)}</h1>
                    <p>{post.acf?.text7 && parse(post.acf?.text7)}</p>
                </article>
                : ''}
                
                {post.acf?.title7_image1 ? <img src={post.acf?.title7_image1} alt={post.acf?.title7_image1}/> : ''}
                

                {post.acf?.title8 ? 
                <article className="project-text">
                    <h1>{post.acf?.title8 && parse(post.acf?.title8)}</h1>
                    <p>{post.acf?.text8 && parse(post.acf?.text8)}</p>
                </article>
                : ''}
                
                {post.acf?.title8_image1 ? <img src={post.acf?.title8_image1} alt={post.acf?.title8_image1}/> : ''}
                {post.acf?.title8_image2 ? <img src={post.acf?.title8_image2} alt={post.acf?.title8_image2}/> : ''}
                {post.acf?.title8_image3 ? <img src={post.acf?.title8_image3} alt={post.acf?.title8_image3}/> : ''}
                {post.acf?.title8_image4 ? <img src={post.acf?.title8_image4} alt={post.acf?.title8_image4}/> : ''}
                {post.acf?.title8_image5 ? <img src={post.acf?.title8_image5} alt={post.acf?.title8_image5}/> : ''}
                {post.acf?.title8_image6 ? <img src={post.acf?.title8_image6} alt={post.acf?.title8_image6}/> : ''}
                
                
                {post.acf?.title9 ? 
                <article className="project-text">
                    <h1>{post.acf?.title9 && parse(post.acf?.title9)}</h1>
                    <p>{post.acf?.text9 && parse(post.acf?.text9)}</p>
                </article>
                : ''}
                
                {post.acf?.title9_image1 ? <img src={post.acf?.title9_image1} alt={post.acf?.title9_image1}/> : ''}
                {post.acf?.title9_image2 ? <img src={post.acf?.title9_image2} alt={post.acf?.title9_image2}/> : ''}
                {post.acf?.title9_image3 ? <img src={post.acf?.title9_image3} alt={post.acf?.title9_image3}/> : ''}
                {post.acf?.title9_image4 ? <img src={post.acf?.title9_image4} alt={post.acf?.title9_image4}/> : ''}
                {post.acf?.title9_image5 ? <img src={post.acf?.title9_image5} alt={post.acf?.title9_image5}/> : ''}
                {post.acf?.title9_image6 ? <img src={post.acf?.title9_image6} alt={post.acf?.title9_image6}/> : ''}


                {post.acf?.title10 ? 
                <article className="project-text">
                    <h1>{post.acf?.title10 && parse(post.acf?.title10)}</h1>
                    <p>{post.acf?.text10 && parse(post.acf?.text10)}</p>
                </article>
                : ''}
                
                {post.acf?.title11 ? 
                <article className="project-text">
                    <h1>{post.acf?.title11 && parse(post.acf?.title11)}</h1>
                    <p>{post.acf?.text11 && parse(post.acf?.text11)}</p>
                </article>
                : ''}
                

            </section>
        </section>
    );
}