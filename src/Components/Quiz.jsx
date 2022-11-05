
import './style.css';

export const Quiz = () => {

    return (
        <div>
            <form className='form'>
                <h1>Set up Quiz</h1>

                <div>
                    <label>Name</label><br />
                    <input type='text' placeholder="Enter your Name" />
                </div>


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
                    <label>Number of Questions</label><br />
                    <input type='text' placeholder="Choose Number of Question" />
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}