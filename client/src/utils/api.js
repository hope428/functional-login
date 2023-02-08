export const addUser = (userData) => {
    return fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(userData)
    })
}