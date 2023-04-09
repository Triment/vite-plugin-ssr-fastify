import { user } from '#root/renderer/recoil/atoms/user'
import { RecoilObserver } from '#root/renderer/recoil/utilForTest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { Page } from './index.page'
/**
 * @jest-environment jsdom
 */
test('测试recoil状态变化', async () => {
  const onChange = jest.fn()
  // ARRANGE
  render(<RecoilRoot>
    <RecoilObserver
      node={user}
      onChange={onChange}
    />
    <Page />
  </RecoilRoot>)
  // ACT
  await userEvent.click(screen.getByRole('changeuser'))
  //await screen.findByRole('hello')

  // ASSERT
  expect(onChange).toHaveBeenCalledTimes(2)
  //expect(screen.findByRole('author')).toHaveTextContent('hello')
  expect(screen.getByRole('author')).toHaveTextContent('newuser')
})