import React from 'react'
const FrFocusInput= React.forwardRef((props, ref)=> {
    return (
        <>
            <input type="text" ref={ref}/>
        </>
    )
})

export default FrFocusInput;
