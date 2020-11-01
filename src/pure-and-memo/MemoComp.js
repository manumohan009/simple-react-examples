import React from 'react'

function MemoComp({name}) {
    console.log('********** Memo Component render **********');

    return (
        <>
           Memo Component - {name}
        </>
    )
}

export default React.memo(MemoComp);