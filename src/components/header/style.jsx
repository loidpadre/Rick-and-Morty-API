import styled from "styled-components"
export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 78px;
    .logo{
        display: flex;
        align-items: center;
        text-decoration: overline;
    }
    .navBar{
        ul{
            display: flex;
            li{
                padding-right:20px;
                list-style: none;
                cursor: pointer;
            }
            a{
                color: #213547;

            }
            .homeLink{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                transition: 0.5s;
                &:hover{
                    font-size: 34px;
                }
            }
        }
    }
`