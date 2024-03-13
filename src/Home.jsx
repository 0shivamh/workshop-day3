import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () =>{

    const navigate=useNavigate()
    const [name,setName]=useState()

    function handleClick(){

            localStorage.setItem('name',name)
            navigate("/page")
    }
    return(
            <>
                <div className="m-10 p-10 bg-green-500">
                    <p>
                        {name}
                    </p>
                    <input className="border" value={name} onChange={(e)=>(setName(e.target.value))} />

                    <button onClick={handleClick} className="m-2 bg-bg-blue-200 border">Next Page</button>
                </div>
            </>

    )
}
export default Home;