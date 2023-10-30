
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { Wrapper } from "./styleDescrition";
export default function Description() {
  const [data, setData] = useState()
  const { id } = useParams()
  const getInf = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      setData(response.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getInf()
  }, [id])


  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <Wrapper className="card">
        <img src={data.image} alt="" />
        <div className="text">
          <p><b>Nome:</b> {data.name}</p>
          <p><b>Estado:</b> {data.status}</p>
          <p><b>Espécie:</b> {data.species}</p>
          <p><b>Tipo:</b> {data.type}</p>
          <p><b>Gênero:</b> {data.gender}</p>
          <p><b>Localização:</b> {data.location.name}</p>
        </div>
      </Wrapper>

    </>
  )
}

