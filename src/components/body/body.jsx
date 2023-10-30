import { Wrapper } from "./style"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

export default function Body(){

    const [datas, setData] = useState([])


    const getPost = async() => {
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character/?page=19");
            setData(response.data.results)
            console.log(response.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getPost()
    }, [])
    return(
        <Wrapper>
            <div className="divInfo">
                {
                    datas.map((data) => ( 
                        <a href = {`description/${data.id}`} key={data.id}>
                            <div key={data.id} className="card">
                        <img src={data.image} alt="image" />
                        <h1>{data.name}</h1>
                        <p><b>Estado:</b> {data.status}</p>
                        <p><b>Especie:</b> {data.species}</p>
                        <p><b>Tipo:</b> {data.type}</p>
                        <p><b>Genero:</b> {data.gender}</p>
                        <p><b>Localização:</b> {data.location.name}</p>
                    </div>
                        </a>
                        
                    ))
                }
            </div>
        </Wrapper>
        
    )
}