import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyleButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props : any) => {
  const [count, setCount] = useState(0);
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }
  return (
    <StyledButton {...props} variant='primary' onClick={onClick}>
      count : {count}
    </StyledButton>
  )
}

export const Success = (props : any) => {
  return (
    <StyledButton {...props} variant='success'>
      primary
    </StyledButton>
  )
}

export const Transparent = (porps : any) => {
  return (
    <StyledButton {...porps} variant='transparent'>
      Transparent
    </StyledButton>
  )
}