import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ clearUsers, showClear, setAlert, searchUser }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('danger', "Please fill all the fields")
        } else {
            searchUser(text)
            setText('')
        }
    }
    const onChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-8 from-group">
                        <input type="text" className='form-control form-control-lg'
                            placeholder='Enter Username...'
                            name='text'
                            value={text}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-4 form-group">
                        <input type="submit" value="Submit" className='btn btn-dark btn-block btn-lg' />
                    </div>
                </div>
            </form>
            {showClear &&
                <button
                    className="btn btn-block btn-lg btn-danger"
                    onClick={clearUsers}>
                    Clear
                    </button>}

        </div>
    )
}
Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
