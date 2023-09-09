import { useParams } from "react-router-dom"
import { PLAYLISTS } from "../../components/sidebar/categories"

export const Category = () => {
    const {id} = useParams()

    const playlist = PLAYLISTS.find((playlist) => playlist.id === Number(id));
    return (
        <div>
            <h2>Category {playlist.Playlist}</h2>
        </div>
    )
}