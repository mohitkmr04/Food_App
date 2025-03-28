import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log("Err = ",err)
    return (
        <div>
            <h1>OOPs!!</h1>
            <h2>Something Went Wrong!!</h2>
            <h2>{err.status}:{err.statusText}</h2>
        </div>
    );
};

export default Error;