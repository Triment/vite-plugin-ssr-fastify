import '@testing-library/jest-dom'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { useModal } from '.'

/**
 * @jest-environment jsdom
 */
test('测试modal打开是否正常', async () => {
    // ARRANGE
    const { result } = renderHook(() => useModal())
    const [Modal, show, toggle] = result.current
    render(<Modal
        Title={() => <h1 role='title'>title</h1>}
        Body={() => <p role='body'>body</p>}
        Footer={() => <p role='footer' onClick={toggle}>close</p>}
    />)
    // ACT
    await waitFor(toggle)//触发函数
    expect(result.current[1]).toBe(true)
    await userEvent.click(screen.getByText('close'))
    //await screen.findByRole('hello')

    // ASSERT
    //expect(screen.findByRole('author')).toHaveTextContent('hello')
    expect(result.current[1]).toBe(false)
    //expect(screen.getByRole('author')).toHaveTextContent('hello')
})