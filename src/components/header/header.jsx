import {AiFillHome} from "react-icons/ai"
import {GiFlamedLeaf} from "react-icons/gi"
import { Wrapper } from "./style"
export default function Header(){
    return(
        <Wrapper>
            <div className="logo">
                <a href="/"><GiFlamedLeaf color="#213547" size={70}/></a>
                <h1>R&M</h1>
            </div>
            <div className="navBar">
                <ul>
                    <div className="homeLink"><li><a href="/"><AiFillHome/></a></li></div>
                    <li><a href="sobre">Sobre</a></li>
                </ul>
            </div>
        </Wrapper>
    )
}