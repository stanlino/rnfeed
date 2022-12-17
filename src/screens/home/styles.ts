import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderRight = styled.View`
  flex-direction: row;
  width: 80px;
`

export const HeaderRightButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const HeaderRightIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
`

// Post

export const PostContainer = styled.View`
  margin: 16px;
  flex-direction: row;
`

export const PostAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`

export const PostContent = styled.View`
  flex: 1;
  padding: 0 8px;
`

export const PostHeader = styled.View`
  min-height: 40px;
  justify-content: flex-start;
  margin-bottom: 8px;
`

export const PostUsername = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`

export const PostImage = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`

export const PostFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const PostAction = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: center;
`

export const PostActionName = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 4px;
`

export const PostActionIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`

export const PostDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`
