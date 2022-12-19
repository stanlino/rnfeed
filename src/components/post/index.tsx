import { IPost } from '../../dtos/post';

import {
  Container,
  Content,
  Avatar,
  Header,
  Description,
  User,
  Image,
  Actions,
  Action,
} from './styles'

interface PostProps {
  item: IPost;
}

export function Post({ item: post }: PostProps) {
  return (
    <Container>
      <Avatar source={{ uri: post.avatar }} />
      <Content>
        <Header>
          <User.Container>
            <User.Name>
              {post.name}
            </User.Name>
            <User.Username>
              @{post.username}
            </User.Username>
          </User.Container>
          <Description>
            {post.description}
          </Description>
        </Header>
        <Image source={{ uri: post.image }} />
        <Actions>
          <Action.Container>
            <Action.Icon name="heart" />
            <Action.Name>
              {post.likes}
            </Action.Name>
          </Action.Container>
          <Action.Container>
            <Action.Icon name="message-circle" />
            <Action.Name>
              {post.comentaries}
            </Action.Name>
          </Action.Container>
          <Action.Container>
            <Action.Icon name="save" />
            <Action.Name>
              Save
            </Action.Name>
          </Action.Container>
          <Action.Container>
            <Action.Icon name="share-2" />
          </Action.Container>
        </Actions>
      </Content>
    </Container>
  )
}