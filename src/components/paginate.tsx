import ReactPaginate from "react-paginate";

interface IProps{
    currentPage:number,
    pageCount:number,
    handlePageChange(p:number):void
}
const Paginate: React.FC<IProps> = ({ pageCount, handlePageChange, currentPage}) => {
   
    const onPageChange=(data:any)=>{
        handlePageChange(data.selected);
    }

    return ( 
        <ReactPaginate 
                breakLabel="..."
                previousLabel="previous"
                nextLabel="next"
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                onPageChange={onPageChange}
                containerClassName="pagination justify-center"
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName=' active'
                renderOnZeroPageCount={() => null}
                forcePage = {currentPage}
            />
     );
}
 
export default Paginate;
