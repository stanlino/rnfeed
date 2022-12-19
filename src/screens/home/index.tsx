import React from 'react'
import { FlashList } from '@shopify/flash-list'

import { Logo } from '../../components/logo'
import { useFeed } from '../../hooks/useFeed'
import { Post } from '../../components/post'

import {
  Container, 
  Header, 
  HeaderRight, 
  HeaderRightButton, 
  HeaderRightIcon,
  ItemSeparator
} from './styles'

export function HomeScreen(){

  const { feed, incrementFeed } = useFeed()

  return (
    <Container>
      <Header>
        <Logo />
        <HeaderRight>
          <HeaderRightButton>
            <HeaderRightIcon name="search" />
          </HeaderRightButton>
          <HeaderRightButton>
            <HeaderRightIcon name="bell" />
          </HeaderRightButton>
        </HeaderRight>
      </Header>
      <FlashList
        data={feed}
        keyExtractor={item => item.id}
        renderItem={Post}
        estimatedItemSize={600}
        onEndReached={incrementFeed}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={ItemSeparator}
      />
    </Container>
  )
}