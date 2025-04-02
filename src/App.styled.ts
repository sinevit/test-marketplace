import styled, {createGlobalStyle} from 'styled-components'
// import {Z_INDEX_LEVEL_1, HEADER_HEIGHt} from 'const'
import {FOOTER_HEIGHT, HEADER_HEIGHT} from "const";
import colors from "const/colors";

export const AppStyles = createGlobalStyle`
    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        color: #5E5873;   
        min-width: 320px;
    }
    
    *,
    *:before,
    *:after{
        box-sizing: border-box;
    }
    
    a{
        color:inherit;
        text-decoration: inherit;
        color: ${colors.primary};
    }

    ul,li{
        list-style: none;
    }    
    
    img{
        display: block;
        max-width: 100%;
        height: auto;
    }
`

export const PageWrapper = styled.div`
    padding: 20px;
    min-height: calc(100vh - ${FOOTER_HEIGHT}px - ${HEADER_HEIGHT}px);
`

export const ProductGroup = styled.div`
    margin-top: 20px;
    
    > :first-child{
        margin-bottom: 10px;
    }
`
export const ProductGroupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    >  *{
        width: 16.6666%;
        margin-bottom: 20px;
    }
`
export const Footer = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.primary};
    height:  ${FOOTER_HEIGHT};
    color: #fff;
    
    > :last-child{
        cursor: pointer;
    }
`
