import React from 'react'

function MemoComp(props) {
    console.log('********** Memo Component render **********', props);

    return (
        <>
           Memo Component - {props.person.name}
           <div>Job: {props.job}</div>
        </>
    )
}

function arePropsEqual(prevProps, nextProps) {
    return prevProps.job === nextProps.job && prevProps.person.name === nextProps.person.name; 
    // return true
}

export default React.memo(MemoComp, arePropsEqual)
// export default React.memo(MemoComp);