import {useParams} from "react-router-dom";
const RestrauntMenu = ()=>{
    const {id}= useParams();
    return(
        <div>
            <h1>Restruant id: {id}</h1>
            <h2>Namaste</h2>
        </div>
    );
};

export default RestrauntMenu;