import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`

export const Icon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`