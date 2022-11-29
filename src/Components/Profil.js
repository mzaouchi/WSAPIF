import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Profil=()=>{
    const {moez} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${moez}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=> console.log(err))
    },[])
    return(
        <div>
            {
                loading ? 
                <h1>Mazel</h1> 
                :
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.username}</h2>
                    <h3>{user.email}</h3>
                </div>
            }
        </div>
    )
}

export default Profil