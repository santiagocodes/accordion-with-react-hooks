import React, { useState } from 'react'
import './Form.css'

export default function Form({ newSection, hide }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChange = (e) => {
        e.target.name === 'title' 
            ? setTitle(e.target.value) 
            : setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newSection(title, body);
        hide()
    };

    return (
      <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input className="input-data"
              type="text"
              id="title"
              name="title"
              required
              onChange={onChange}
              value={title}
            />
            <label className="input-label" htmlFor="title">Title</label>
          </div>

          <div className="input-container">
            <textarea  className="input-data textarea"
              type="text"
              id="body"
              name="body"
              required
              onChange={onChange}
              value={body}
            />
            <label className="input-label" htmlFor="body">Content</label>
          </div>
          <br />
          <div className="form-data">
            <button className="button-default" type="submit" value="add section">
              Submit New Section
            </button>
          </div>
        </form>
    )
}
