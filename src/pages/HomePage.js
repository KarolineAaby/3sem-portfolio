import { useState, useEffect } from "react";
import HeaderHome from "../components/HeaderHome";
import SkillsItem from "../components/SkillsItem";
import ProjectItem from "../components/ProjectItem";
import PersonalProjectItem from "../components/PersonalprojectItem";

// 📁 pages/HomePage.js
export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.karolineaaby.dk/wp-json/wp/v2/projekter?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <div className="page">
            <HeaderHome />
            <SkillsItem />
            
            <section id="projekter">
                <article className="project-sneakpeek-title">
                    <h4>Udvalgte projekter</h4>
                    <h2>Projekter</h2>
                </article>
                <div>
                {posts.map(post => (
                    <ProjectItem key={post.id} post={post} />
                ))}
                </div>
            </section>

            <section>
                <article className="project-sneakpeek-title personalproject-sneakpeek">
                    <h4>Fotografering & Illustrationer</h4>
                    <h2>Personlige projekter</h2>
                </article>
                <div className="project-sneakpeek-grid">
                {posts.map(post => (
                    <PersonalProjectItem key={post.id} post={post} />
                ))}
                </div>
            </section>
        </div>
    );
}