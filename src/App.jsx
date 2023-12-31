import { useEffect, useState } from 'react'
import './App.css'
import { Projeto } from './components/Projeto/Projeto'
import { Comentarios } from './components/Comentarios/Comentarios'
import { Feedback } from './components/Feedback/Feedback'

const url = "https://skillz-server-e79601f5f342.herokuapp.com/"
const projects = [
  { id: 1, title: 'Python - Em Desenvolvimento', url: 'Projeto1.rar' },
  { id: 2, title: 'JavaScript', url: 'Projeto2.rar' },
  { id: 3, title: 'HTML', url: 'Projeto3.rar' }]

function App() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function getInfos() {
      const res = await fetch(url)
      const data = await res.json()
      setComments(Object.values(data.comments))
    }
    getInfos()
  }, [])

  return (
    <div className='app'>
      <div className='forms'>
        <h1>Skillz Testable</h1>
        <div>
          <Projeto projects={projects}></Projeto>
        </div>
        <div className='Feedback'>
          <Feedback url={url}></Feedback>
        </div>
      </div>
      <div className='comments'>
        <h2>Comentários e Feedbacks</h2>
        <Comentarios comments={comments}></Comentarios>
      </div>
    </div>
  )
}

export default App
