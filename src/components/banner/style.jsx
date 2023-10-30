import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .title{
        h1{
            font-size: 100px;
            line-height: 100px;
            margin-bottom: 20px;
            width: 600px;
        }
        p{
            font-size: 20px;
            width: 400px;
            margin-bottom: 20px;
        }
        button{
            padding: 10px 19px;
            background-color: #bb0274;
            color: white;
            border: none;
            margin-top: 5px;
            border-radius: 5px;
        }
    }
    img{
        width: 350px;
        border-radius: 20px 170px 20px 80px;
        box-shadow: 10px 10px 10px 5px;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            box-shadow: -100px 10px 10px 5px;
        }
    }

`