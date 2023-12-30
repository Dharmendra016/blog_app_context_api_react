import { Children, createContext, useState } from "react";

const url = "https://codehelp-apis.vercel.app/api/get-blogs";

export const AppContext = createContext();

export function AppContextProvider ({children}){
    const [loading , setLoading] = useState(false) ; 
    const [page , setPage] = useState(1) ; 
    const [totalPage , setTotalPage] = useState(null);
    const [posts , setPosts] = useState([]);

    //filling pending data 

    async function fetchBlogPosts (page) {
        const urlWithPageNo = `${url}?page=${page}`
        setLoading(true);
        try{
            const res = await fetch(urlWithPageNo);
            const data = await res.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);

        }catch(err){
            console.log(err);
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading , 
        setLoading , 
        page , 
        setPage , 
        posts, 
        setPosts , 
        totalPage,  
        setTotalPage,
        fetchBlogPosts,
        handlePageChange,
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}