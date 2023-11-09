import { useDispatch, useSelector } from "react-redux"
import { setRefreshToken, setAccessToken } from "./store/user.slice"
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

// export async function getTrackById(id) {
//   try {
//     const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/` + id, {
//       method: "GET"
//   })
//   const data = await response.json()
//   return data;
//   } catch {
//     console.error("Error in getTrack:", error);
//     throw error; 
//   }
// }


export async function Registration({login, password}) {
    const response = await fetch(`${regLink}`, {
      method: "POST",
      body: JSON.stringify({
        email: `${login}`,
        password: `${password}`,
        username: `${login}`,
    }),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await response.json()
    if (response.ok) {
      return data
    } else if (data.email){
      throw new Error(data.email);
    } else {
      throw new Error(data.password);
    }
}


export async function Authorisation({login, password}) {
    const response = await fetch(`${authLink}`, {
      method: "POST",
      body: JSON.stringify({
        email: `${login}`,
        password: `${password}`,
    }),
      headers: {
        "content-type": "application/json",
      },
    })
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      throw new Error(data.detail);
    }
}


