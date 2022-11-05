import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <Link to='/admin'>
                <h4>Admin</h4>
            </Link>
            <Link to='/quiz'>
                <h4>Quiz</h4>
            </Link>
        </div>
    )
}