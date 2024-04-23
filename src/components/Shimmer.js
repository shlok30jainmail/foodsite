
const Shimmer = () =>{
    return(
        <div className="restraunt-list">
                {Array(10).fill("").map((e, index)=>(
                <div className="shimmer-card" key={index} ></div>
                 ))};
     </div>

    );
};

export default Shimmer;