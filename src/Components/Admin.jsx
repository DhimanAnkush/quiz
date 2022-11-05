import { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Admin = () => {

    const init = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    const [token, setToken] = useState("");
    const [loggedin, setLoggedIn] = useState(false);

    const postUser = (e) => {

        e.preventDefault();

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(init)
        })
            .then((res) => res.json())
            .then((user) => {
                setToken(user.token);
                setLoggedIn(true);
                console.log(token)
            }).catch((err) => console.log(err))
    }


    return (
        <div>
            <h5>Token: {token}</h5>

            {!loggedin ?
                <form className='form'>
                    <h1>Login</h1>

                    <div>
                        <label>Email</label><br />
                        <input type='email' placeholder="eve.holt@reqres.in" />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input type='password' placeholder="cityslicka" />
                    </div>

                    <button onClick={postUser}> Submit</button>
                </form>
                :
                <form className='form'>
                    <h1>Admin</h1>
                    <div>
                        <label>Category</label><br />
                        <select>
                            <option value="">Select Category</option>
                            <option value="geography">Geography</option>
                            <option value="sports">Sports</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="music">Music</option>
                            <option value="art">Art</option>
                            <option value="animals">Animals</option>
                            <option value="history">History</option>
                            <option value="mythology">Mythology</option>
                        </select>
                    </div>

                    <div>
                        <label>Difficulty</label><br />
                        <select>
                            <option value="">Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>

                    <div>
                        <label>Question</label><br />
                        <input type='text' placeholder="Enter question" />
                    </div>

                    <div>
                        <label>Correct Answer</label><br />
                        <input type='text' placeholder="Enter correct answer" />
                    </div>
                    <div>
                        <label>Option 1</label><br />
                        <input type='text' placeholder="Option 1" />
                    </div>
                    <div>
                        <label>Option 2</label><br />
                        <input type='text' placeholder="Option 2" />
                    </div>
                    <div>
                        <label>Option 3</label><br />
                        <input type='text' placeholder="Option 3" />
                    </div>

                    <button>Submit</button>
                </form>
            }

        </div >
    )
}