import React, { useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import { FacebookOutlined, MoreHoriz, Twitter } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { ActiveBookInfoType } from '#models/bookTypes';
import {
  DescriptionWrapper,
  Description,
  InteractionButtonWrapper,
  InfoTabsArea,
  TabButton,
  TabsWrapper,
} from './BookInfoStyled';

interface Props {
  book: ActiveBookInfoType;
}

const InfoTabs: React.FC<Props> = (props) => {
  const { book } = props;

  const { textColorBlack, inputBorderColor, inactiveTabButton } =
    useThemeColors();

  const [activeTabId, setActiveTabId] = useState<string>('1');

  const tabsItems = [
    { id: '1', name: 'description' },
    { id: '2', name: 'authors' },
    { id: '3', name: 'reviews' },
  ];

  return (
    <InfoTabsArea>
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
          {activeTabId === tabsItems[0].id && <>{book.desc}</>}
          {activeTabId === tabsItems[1].id && <>{book.authors}</>}
          {activeTabId === tabsItems[2].id && (
            <>
              This free book, or really a "coursebook" for a college
              freshman-level class, has been updated for Spring 2014 and
              provides an introduction to programming and problem solving using
              both Matlab and Mathcad. We provide a balanced selection of
              introductory exercises and real-world problems (i.e. no
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
    </InfoTabsArea>
  );
};

export default InfoTabs;
