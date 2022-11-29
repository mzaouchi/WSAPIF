import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            {
                loading ? <h1>Mazel</h1> :  users.map(user=> <Link to={`/user/${user.id}`}><h2>{user.name}</h2></Link>)
            }
         
        </div>
    )
}

export default ListUsers