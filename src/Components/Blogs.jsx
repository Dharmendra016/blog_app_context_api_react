import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Loadder from "./Loadder";

const Blogs = () => {

    const {loading , posts} = useContext(AppContext);
    console.log("load" , loading , "posts" , posts);

    return (  
        <div className="px-80 mx-auto text-black mt-4 ">
            {   loading? 
                    <Loadder/> :
                   (
                    posts.length === 0 ? 
                        "No data founded" : 
                        posts.map((post) => {
                           return  <div key={post.id}  className="flex flex-col ">
                                <p className="font-bold text-2xl cursor-pointer">{post.title}</p>
                                <p className="text-sm py-1">
                                    By <span className="italic">{post.author}</span> on <span className="underline underline-offset-2 font-semibold cursor-pointer" >{post.category}</span>
                                </p>
                                <p className="text-sm mb-3">Posted on {post.date}</p>
                                <p className="text-sm mb-2">{post.content}</p>

                                <div className="text-sm text-blue-600 mb-6 flex gap-2">
                                    {post.tags.map((tag, index) => {
                                        return <span className=" cursor-pointer" key={index}>{`#${tag}`}</span>
                                    })}
                                </div>

                            </div>
                        })
                   )
            }
        </div>
    );
}
 
export default Blogs;