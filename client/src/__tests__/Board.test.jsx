import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Board from '../Board'

describe('Board loads', () => {
    test('64 squares load in board', async () => {
        render(<Board />)

        const squares = await screen.findAllByTestId('board-square')

        expect(squares.length).toEqual(64)
    })
})
