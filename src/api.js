const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTYwNDMxLCJpYXQiOjE2OTA5NjAxMzEsImp0aSI6ImE4NDAwZjRkNWUzMTQ4NGJiMzE4YzUzMjE3Y2NhNWZmIiwidXNlcl9pZCI6NzkyfQ.SfvLYWbz72DQqWK7SyF4Yx9Zxx8hGsNxHEcwOU0RTk4"
const regLink = `https://skypro-music-api.skyeng.tech/user/signup/`
const authLink = `https://skypro-music-api.skyeng.tech/user/login/`
// myPassword =`Q9yCxe8xKRMdVvj`

export async function getTracks () {
    try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/", {
          method: "GET"
        });
    
        const data = await response.json();

        return data;
      } catch (error) {
        console.error("Error in getTracks:", error);
        throw error; 
      }
}

export async function getTrackById(id) {
  try {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/` + id, {
      method: "GET"
  })
  const data = await response.json()
  return data;
  } catch {
    console.error("Error in getTrack:", error);
    throw error; 
  }
}


export async function Registration({email, password}) {
    const response = await fetch(`${regLink}`, {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        username: `${email}`,
    }),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await response.json()
    console.log(data)
    if (response.status === 200) {
      return data
    } else {
      throw new Error(data.email);
    }
}


export async function Authorisation({email, password}) {
    const response = await fetch(`${authLink}`, {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
    }),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await response.json()
    if (response.status === 200) {
      return data
    } else {
      throw new Error(data.detail);
    }
}