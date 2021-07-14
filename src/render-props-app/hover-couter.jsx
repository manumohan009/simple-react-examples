import React from 'react'

export default function HoverCounter({count, incrementCount}) {
    return (
        <h2 onMouseOver={incrementCount}>
            No of times hovered {count}
        </h2>
    )
}
