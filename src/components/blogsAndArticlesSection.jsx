import BlogItem from "./blogItem";
import LeftAndRightButton from "./leftAndRightButton";
import Hero1 from "/images/blogsHero1.png";
import Hero2 from "/images/blogsHero2.png";
import Hero3 from "/images/blogsHero3.png";
export default function BlogsAndArticlesSection() {
    return (
        <>
            <section className="min-h-[10rem] pt-[9%] p-[6%] font-inter">
                <h1 className="text-2xl lg:text-4xl text-blue-950">
                    Blogs & Articles
                </h1>
                <p className="lg:text-xl text-slate-700 lg:w-[45%] ">
                    Discover the roadmap to financial success! Stay updated with
                    the latest tips and trends on our blog.
                </p>
                <div className="flex lg:grid grid-cols-3 gap-x-[2rem] mt-[6%] overflow-x-scroll [scrollbar-width:none]">
                    <BlogItem
                        time="March 17, 2025"
                        heading="How to Accept Payments:The ultimate
                guide for Businesses in 2025"
                    >
                        <img
                            alt="woman smiling with pos terminal"
                            src={Hero1}
                        ></img>
                    </BlogItem>
                    <BlogItem
                        time="March 14, 2025"
                        heading="6 Most Common Money Mistakes You Should Avoid in 2025"
                    >
                        <img alt="woman with a finger up" src={Hero2}></img>
                    </BlogItem>
                    <BlogItem
                        time="March 3, 2025"
                        heading="How to start a POS Business in Nigeria:A Complete Guide"
                    >
                        <img
                            alt="man smiling with a pos terminal"
                            src={Hero3}
                        ></img>
                    </BlogItem>
                </div>
                <div className="mt-[5rem] flex">
                    <div className=""></div>
                    <div>
                        <LeftAndRightButton
                            modifier={"hidden lg:block"}
                            bgColor={"bg-white"}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
