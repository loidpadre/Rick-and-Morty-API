import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 110px;
    box-sizing: border-box;
    .divInfo{    
        a{
        text-decoration: none;
        }
        display: flex;
        flex-wrap: wrap;
        justify-items: stretch;
        gap: 15px;
        justify-content: space-between;
        img{
            border-radius: 10px;
            width: 200px;
        }
        .card{
            
            width: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #fff;
            color: #213547;
            border-radius: 10px;
            padding: 15px 20px;
            transition: 0.3s ease-in-out;
            &:hover{
                opacity: 0.9;
                cursor: pointer;
                box-shadow: 3px 3px 3px 3px black;
            }
            
        }
        .cardLink{
                text-decoration: none;
                
            }
        
    }
`