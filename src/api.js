const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTYwNDMxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4NDAwZjRkNWUzMTQ4NGJiMzE4YzUzMjE3Y2NhNWZmIiwidXNlcl9pZCI6NzkyfQ.SfvLYWbz72DQqWK7SyF4Yx9Zxx8hGsNxHEcwOU0RTk4"

export async function getTracks () {
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
        method: "GET"
    })
    const data = await response.json()
    return data
}

// export async function getTrackById(id) {
//     const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/:id")
// }