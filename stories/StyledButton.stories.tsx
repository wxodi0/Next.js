import { Component, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyleButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: { 
    variant : {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' },
    }
   },
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args}/>

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'primary'
}

export const Primary = (props : any) => {
  return (
    <StyledButton {...props} variant='primary'>
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