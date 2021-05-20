import './index.css';
function Image(props)
    {
        return(
            <div className="card">
                <img src={props.image} width="750px" height="500px"></img>
            </div>       
        );
    }
export default Image;