import { useParams } from "react-router-dom"


export const Category = () => {
    const {id} = useParams()

    return (
        <div>
            <h2>Category {id}</h2>
        </div>
    )
}