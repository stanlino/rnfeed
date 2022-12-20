import React from 'react'
import { FlashList } from '@shopify/flash-list'

import { Logo } from '../../components/logo'
import { useFeed } from '../../hooks/useFeed'
import { Post } from '../../components/post'

import {
  Container, 
  Header, 
  HeaderAction, 
  HeaderActionIcon, 
  ItemSeparator
} from './styles'

export function HomeScreen(){

  const { feed, incrementFeed } = useFeed()

  return (
    <Container>
      <Header>
        <HeaderAction>
          <HeaderActionIcon name="user" />
        </HeaderAction>
        <Logo />
        <HeaderAction>
          <HeaderActionIcon name="bell" />
        </HeaderAction>
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