
import IMG from "../../assets/k.jpg"
import { Wrapper } from "./style"
export default function Banner(){
    return(
        <Wrapper>
            <div className="title">
                <h1>Rick and Morty</h1>
                <p>Encontra as tuas personagens favoritas, e saiba de onde eles vieram!</p>
                <button>SABER MAIS</button>
            </div>
            <img src={IMG} alt="Rick" />
        </Wrapper>
    )
}