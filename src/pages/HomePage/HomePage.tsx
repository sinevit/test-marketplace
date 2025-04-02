import React from 'react';
import { Helmet } from 'react-helmet'
import { TestDiv } from './styled'
import {PageWrapper, ProductGroup, ProductGroupContainer} from "../../App.styled";
import {dummyProducts} from "../dummyProducts";

const HomePage: React.FC = () => {
    return <>
        <Helmet>
            <h1>главная - Marketplace</h1>
        </Helmet>
        <PageWrapper>
            <ProductGroup>
                <h2>рекомендуемые товары</h2>
                <ProductGroupContainer>
                    {/*{dummyProducts.map(el => (*/}

                    {/*))}*/}
                </ProductGroupContainer>
            </ProductGroup>
        </PageWrapper>
    </>
};

export default HomePage;
