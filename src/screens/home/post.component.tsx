import {
  PostContainer,
  PostHeader,
  PostAvatar,
  PostUsername,
  PostImage,
  PostFooter,
  PostAction,
  PostActionIcon,
  PostDescription,
  PostContent,
  PostActionName
} from './styles'

interface Item {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  description: string;
  comentaries: number;
}

interface PostProps {
  item: Item;
}

export function Post({ item: post }: PostProps) {
  return (
    <PostContainer>
      <PostAvatar source={{ uri: post.avatar }} />
      <PostContent>
        <PostHeader>
          <PostUsername>{post.username}</PostUsername>
          <PostDescription>
            {post.description}
          </PostDescription>
        </PostHeader>
        <PostImage source={{ uri: post.image }} />
        <PostFooter>
          <PostAction>
            <PostActionIcon name="heart" />
            <PostActionName>
              {post.likes}
            </PostActionName>
          </PostAction>
          <PostAction>
            <PostActionIcon name="message-circle" />
            <PostActionName>
              {post.comentaries}
            </PostActionName>
          </PostAction>
          <PostAction>
            <PostActionIcon name="save" />
            <PostActionName>
              Save
            </PostActionName>
          </PostAction>
          <PostAction>
            <PostActionIcon name="send" />
            <PostActionName>
              Share
            </PostActionName>
          </PostAction>
        </PostFooter>
      </PostContent>
    </PostContainer>
  )
}