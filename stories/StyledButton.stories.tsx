import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyleButton'

export default {
  title: 'StyledButton',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant='primary'>
      Primary
    </StyledButton>
  )
}

export const Success = (props) => {
  return (
    <StyledButton {...props} variant='success'>
      primary
    </StyledButton>
  )
}

export const Transparent = (porps) => {
  return (
    <StyledButton {...porps} variant='transparent'>
      Transparent
    </StyledButton>
  )
}