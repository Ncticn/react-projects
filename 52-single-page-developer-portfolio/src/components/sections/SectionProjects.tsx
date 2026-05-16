
// React
import { ViewTransition } from "react";

// Components
import ButtonLink from "../ui/ButtonLink";
import CardProject from "../ui/CardProject";

// Images
import ThumbnailDesignPortfolio from "@/src/assets/images/thumbnail-project-1-large.webp";
import ThumbnailELearning from "@/src/assets/images/thumbnail-project-2-large.webp";
import ThumbnailTODOWebApp from "@/src/assets/images/thumbnail-project-3-large.webp";
import ThumbnailEntertainmentWebApp from "@/src/assets/images/thumbnail-project-4-large.webp";
import ThumbnailMemoryGame from "@/src/assets/images/thumbnail-project-5-large.webp";
import ThumbnailArtGalleryShowcase from "@/src/assets/images/thumbnail-project-6-large.webp";


export default function SectionProjects() {

    const projects = [
        {
            title: "DESIGN PORTFOLIO",
            skills: ["HTML", "CSS"],
            codeURL: "#",
            demoURL: "#",
            thumbnail: {
                name: "Project Design Portfolio Thumbnail",
                src: ThumbnailDesignPortfolio
            }
        },
        {
            title: "E-LEARNING LANDING PAGE",
            skills: ["HTML", "CSS"],
            codeURL: "#",
            demoURL: "#",
            thumbnail: {
                name: "Project E-Learning Landing Page Thumbnail",
                src: ThumbnailELearning
            }
        },
        {
            title: "TODO WEB APP",
            skills: ["HTML", "CSS", "JavaScript"],
            codeURL: "#",
            demoURL: "#",
            thumbnail: {
                name: "Project TODO Web App Thumbnail",
                src: ThumbnailTODOWebApp
            }
        },
        {
            title: "ENTERTAINMENT WEB APP",
            skills: ["HTML", "CSS", "JavaScript"],
            codeURL: "#",
            demoURL: "#",
            thumbnail: {
                name: "Project Entertainment Web App Thumbnail",
                src: ThumbnailEntertainmentWebApp
            }
        },
        {
            title: "MEMORY GAME",
            skills: ["HTML", "CSS", "JavaScript"],
            codeURL: "#",
            demoURL: "#",
            thumbnail: {
                name: "Project Memory Game Thumbnail",
                src: ThumbnailMemoryGame
            }
        },
        {
            title: "ART GALLERY SHOWCASE",
            skills: ["HTML", "CSS", "JavaScript"],
            codeURL: "#sectionmyprojects",
            demoURL: "#sectionmyprojects",
            thumbnail: {
                name: "Project Art Gallery Showcase Thumbnail",
                src: ThumbnailArtGalleryShowcase
            }
        }
    ];

    return (
        <ViewTransition>
            <section aria-label="section-projects" id="sectionmyprojects">
                <div className="mx-auto max-w-85.75 md:max-w-177 lg:max-w-277.5">
                    <div className="flex flex-col items-center justify-center gap-10 md:gap-15 lg:gap-20">
                        <div className="flex flex-row items-center justify-between gap-0 w-full">
                            <h2 className="text-heading-xl text-base-white">Projects</h2>
                            <ButtonLink text="Contact Me" url="#formcontact" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,342px)] lg:grid-cols-[repeat(2,540px)] gap-x-0 gap-y-10 md:gap-x-5.5 md:gap-y-15 lg:gap-x-7.5 lg:gap-y-17.25">
                            {
                                projects.map((p, index) => <CardProject key={index} {...p} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </ViewTransition>
    );
}