const fetchData = async (url: string, method: string) => {
    const response = await fetch(url, {
        method: method
    })

    const data = await response.json()

    return data
}

const getPosts = async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts', 'GET')

    console.log(data);
}

const getComments = async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/comments', 'GET')

    console.log(data);
}

getComments()
