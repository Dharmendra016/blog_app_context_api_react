import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Button } from "flowbite-react";

const Pagination = () => {

    const {page , totalPage , handlePageChange } = useContext(AppContext)

    function incrementHandeler() {
        handlePageChange(page+1)
    }

    function decrementHandeler() {
        handlePageChange(page-1)
    }
    return ( 
        <div className="text-center w-full sticky h-11 shadow-3xl px-80 bg-white bottom-0 mx-auto flex justify-between items-center">
            <div className="flex gap-1">
                {
                    page > 1 && (<button onClick={decrementHandeler} className="border-2 px-5 py-1 rounded-md">previous</button>)
                }
                {
                    page < totalPage && ( <button onClick={incrementHandeler} className="border-2 px-5 py-1 rounded-md" >next</button> )
                }
            </div>
            <div>
                {`page ${page} of ${totalPage}`}
            </div>
        </div>
     );
}
 
export default Pagination;