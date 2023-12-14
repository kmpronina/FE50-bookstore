import React, { useEffect, useState } from 'react';
import { Divider, IconButton, Rating } from '@mui/material';
import {
  FacebookOutlined,
  FavoriteBorder,
  HeartBrokenOutlined,
  MoreHoriz,
  Twitter,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  BookInfoWrapper,
  BookInfoStyled,
  ErrorInfo,
  ImgAndPriceWrapper,
  ImgWrapper,
  BookImg,
  PriceCard,
  Price,
  NumbersLine,
  DetailArea,
  DetailRow,
  DetailName,
  DetailValue,
  LinkToChapter,
  TabsWrapper,
  TabButton,
  DescriptionWrapper,
  Description,
  InteractionButtonWrapper,
  LikeButton,
} from './BookInfoStyled';
import useThemeColors from '#hooks/useThemeColors';
import PageTitle from '#components/pageTitle';
import Button from '#ui/button';
import { setFavoriteBookToStore } from '#store/reducers/bookReducer';
import { ActiveBookInfoType } from '#models/BookType';

const BookInfo: React.FC = () => {
  const { activeBookInfo, favoriteBooks } = useAppSelector(
    (state) => state.bookReducer
  );
  const {
    titleColor,
    ratingColor,
    textColorBlack,
    textColorGray,
    inputBorderColor,
    inactiveTabButton,
    buttonBgColor,
    buttonBgHoverColor,
    backgroundColor,
    redColor,
  } = useThemeColors();

  const dispatch = useAppDispatch();

  const [linkToBook, setLinkToBook] = useState<string | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>('1');
  const [isLikedStatusFromStore, setIsLikedStatusFromStore] =
    useState<boolean>(false);

  useEffect(() => {
    setLinkToBook(null);
    setIsLikedStatusFromStore(false);
    if (!activeBookInfo) return;
    if (favoriteBooks.find((book) => book.isbn13 === activeBookInfo.isbn13)) {
      console.log(activeBookInfo.isbn13);
      setIsLikedStatusFromStore(true);
    }

    if (activeBookInfo.pdf === undefined) return;
    setLinkToBook(Object.values(activeBookInfo.pdf)[0]);
  }, [activeBookInfo, favoriteBooks]);

  const detailsNames = activeBookInfo && [
    { name: 'author', value: activeBookInfo.authors },
    { name: 'publisher', value: activeBookInfo.publisher },
    { name: 'year', value: activeBookInfo.year },
    { name: 'pages', value: activeBookInfo.pages },
  ];

  const tabsItems = [
    { id: '1', name: 'description' },
    { id: '2', name: 'authors' },
    { id: '3', name: 'reviews' },
  ];

  const handleAddToCart = () => {};

  const toggleLikeStatus = () => {
    if (!activeBookInfo) return;

    const favoriteBooksClone: ActiveBookInfoType[] =
      structuredClone(favoriteBooks);

    if (isLikedStatusFromStore) {
      setIsLikedStatusFromStore(false);
      dispatch(
        setFavoriteBookToStore(
          favoriteBooksClone.filter(
            (book: ActiveBookInfoType) => book.isbn13 !== activeBookInfo.isbn13
          )
        )
      );
    } else {
      setIsLikedStatusFromStore(true);
      favoriteBooksClone.push(activeBookInfo);
      dispatch(setFavoriteBookToStore(favoriteBooksClone));
    }
  };

  return (
    <BookInfoWrapper>
      {activeBookInfo === null ? (
        <ErrorInfo>Server error. Please try again later</ErrorInfo>
      ) : activeBookInfo.error !== '0' ? (
        <ErrorInfo>{activeBookInfo.error} </ErrorInfo>
      ) : (
        <BookInfoStyled>
          <PageTitle>{activeBookInfo.title}</PageTitle>
          <ImgAndPriceWrapper>
            <ImgWrapper $bgColor={activeBookInfo.color}>
              <LikeButton
                $color={buttonBgColor}
                $hoverColor={buttonBgHoverColor}
                $iconColor={backgroundColor}
                $isLiked={isLikedStatusFromStore}
                $red={redColor}
                onClick={toggleLikeStatus}
              >
                {isLikedStatusFromStore ? (
                  <HeartBrokenOutlined />
                ) : (
                  <FavoriteBorder />
                )}
              </LikeButton>
              <BookImg src={activeBookInfo.image} />
            </ImgWrapper>

            <PriceCard>
              <Divider
                sx={{
                  width: '100%',
                  color: inputBorderColor,
                  marginBottom: '15px',
                }}
              />
              <NumbersLine>
                <Price $color={titleColor}>{activeBookInfo.price}</Price>
                <Rating
                  value={Number(activeBookInfo.rating)}
                  sx={{ color: ratingColor }}
                  readOnly
                />
              </NumbersLine>
              <DetailArea>
                {detailsNames &&
                  detailsNames.map((item) => (
                    <DetailRow>
                      <DetailName $color={textColorGray}>
                        {item.name}
                      </DetailName>
                      <DetailValue $color={textColorBlack}>
                        {item.value}
                      </DetailValue>
                    </DetailRow>
                  ))}
              </DetailArea>
              <Button
                type="button"
                width="calc(100% - 80px)"
                onClick={handleAddToCart}
              >
                add to cart
              </Button>
              {linkToBook !== null && (
                <LinkToChapter href={linkToBook} $color={textColorBlack}>
                  prewiew book
                </LinkToChapter>
              )}
            </PriceCard>
          </ImgAndPriceWrapper>{' '}
          <DescriptionWrapper>
            <TabsWrapper>
              {tabsItems.map((item) => (
                <TabButton
                  key={item.id}
                  id={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  $isActive={activeTabId === item.id}
                  $colorActive={textColorBlack}
                  $colorInactive={inactiveTabButton}
                >
                  {item.name}
                </TabButton>
              ))}
            </TabsWrapper>
            <Divider
              sx={{
                width: '100%',
                color: inputBorderColor,
                marginBottom: '30px',
              }}
            />
            <Description $color={textColorBlack}>
              {activeTabId === tabsItems[0].id && <>{activeBookInfo.desc}</>}
              {activeTabId === tabsItems[1].id && <>{activeBookInfo.authors}</>}
              {activeTabId === tabsItems[2].id && (
                <>
                  This free book, or really a "coursebook" for a college
                  freshman-level class, has been updated for Spring 2014 and
                  provides an introduction to programming and problem solving
                  using both Matlab and Mathcad. We provide a balanced selection
                  of introductory exercises and real-world problems (i.e. no
                  "contrived" problems).
                </>
              )}
            </Description>
          </DescriptionWrapper>
          <InteractionButtonWrapper>
            <IconButton sx={{ color: textColorBlack }}>
              <FacebookOutlined />
            </IconButton>
            <IconButton sx={{ color: textColorBlack }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: textColorBlack }}>
              <MoreHoriz />
            </IconButton>
          </InteractionButtonWrapper>
        </BookInfoStyled>
      )}
    </BookInfoWrapper>
  );
};

export default BookInfo;
