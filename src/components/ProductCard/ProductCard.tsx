import React from 'react';
import {
    BtnsWrapper,
    Desc,
    Image,
    LikeWrapper,
    PriceDiscounted,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceWrapper,
    Title, Wrapper
} from './styled'
import {ReactComponent as HeartEmpty} from 'img/heart-empty.svg'
import {Link} from "react-router-dom";
import Button from "../Button";

interface I_ProductCardProps {
    id: number
    slug?: string
    imgSrc: string
    price: number
    priceDiscounted?: number
    title: string
    desc: string
    isLiked: boolean
    hideLikes?: boolean
}


const ProductCard: React.FC<I_ProductCardProps> = ({
                                                       id,
                                                       slug,
                                                       imgSrc,
                                                       price,
                                                       priceDiscounted,
                                                       title,
                                                       desc,
                                                       isLiked,
                                                       hideLikes = false,
                                                   }) => {
    console.log('title',title)
    console.log('desc',desc)
    // const dispatch = useAppDispatch()
    // const location = useLocation()
    //
    // const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
    //     const { productId } = e.currentTarget.dataset
    //
    //     dispatch(
    //         !isLiked
    //             ? addToFavorites(+productId!)
    //             : removeFromFavorites(+productId!)
    //     )
    // }, [ dispatch, isLiked ])
    //
    // const isFavoritesPage = useMemo(
    //     () => location.pathname === paths.favorites,
    //     [ location.pathname ]
    // )
    //
    // const removeFavorite = useCallback(
    //     (e: React.MouseEvent<HTMLElement>) => {
    //         dispatch(
    //             removeFromFavorites(+e.currentTarget.dataset.productId!)
    //         )
    //     }, [ dispatch ]
    // )


    return (
        <Wrapper>
            {!hideLikes && (
                <LikeWrapper
                    data-product-id={id}
                    // onClick={handleFavorites}
                >
                    {/*{isLiked ? <HeartFilled /> : <HeartEmpty />}*/}
                    <HeartEmpty />
                </LikeWrapper>
            )}

            <Link to={`/product/${slug || id}`}>
                <Image src={imgSrc} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(priceDiscounted) ? <>
                    <PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
                    <PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
                </> : (
                    <PriceRegular>{price} ₽</PriceRegular>
                )}
            </PriceWrapper>

            <Title className='h4'>
                <Link to={`/product/${slug || id}`}>
                    {title}
                </Link>
            </Title>

            <Desc>{desc}</Desc>

            <BtnsWrapper>
                <Button block>
                    В корзину
                </Button>

                {/*{isFavoritesPage && (*/}
                {/*    <Button*/}
                {/*        type='danger'*/}
                {/*        block*/}
                {/*        onClick={removeFavorite}*/}
                {/*        data-product-id={id}*/}
                {/*    >*/}
                {/*        Удалить*/}
                {/*    </Button>*/}
                {/*)}*/}
            </BtnsWrapper>
        </Wrapper>
    )
}

export default ProductCard
