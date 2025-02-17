import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const title = 'Blog Post'
    const body = 'This is a blog post'
    const comments = [
        {id: 100, text: 'All about violins'},
        {id: 101, text: 'All about pottery'},
        {id: 102, text: 'All about acrylic art media'}
    ]
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <div className='My Blogs'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div className='comments'>
                <h2>Comments ({comments.length})</h2>
                <ul>
                    {comments.map( (comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
        <p>This is an example of
            <span style={ {backgroundColor:'green', textColor: 'purple'}}>inline styling.</span>
        </p>
      <h1>Vite + React</h1>
      <div className="card">
        <MyStuff username="Tom"></MyStuff>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
