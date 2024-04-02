import { useState } from 'react'

function Board() {
    const fileKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const rankKeys = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse()

    const [side, setSide] = useState(true)

    if (!side) {
        rankKeys.reverse()
        fileKeys.reverse()
    }

    function returnCheckerPattern(rIdx, fIdx) {
        if (rIdx % 2 === 0) {
            return fIdx % 2 === 0 ? 'white' : 'black'
        } else {
            return fIdx % 2 !== 0 ? 'white' : 'black'
        }
    }

    const squares = fileKeys.map((rank, rIdx) =>
        rankKeys.map((file, fIdx) => (
            <div
                className={`board__square board__square--${returnCheckerPattern(
                    rIdx,
                    fIdx
                )}`}
                key={`${file}${rank}`}
                data-rank={rank}
                data-file={file}
                data-testid={'board-square'}
            >
                {file + rank}
            </div>
        ))
    )

    return (
        <>
            <button className="btn" onClick={() => setSide(!side)}>
                Switch Side{' '}
                <span
                    className={`side-icon side-icon--${
                        side ? 'white' : 'black'
                    }`}
                ></span>
            </button>
            <div className="board">{squares}</div>
        </>
    )
}

export default Board
