import React from 'react'

function RandomUser({list, isLoading, error}) {
    return (
        <div>
            <h2>Random User</h2>
            {error ? <p>{error.message}</p> : null}
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <ul>{list.map(user=><li key={user.id}>{user.name}</li>)}</ul>
            )}
        </div>
    )
}
export default RandomUser;
