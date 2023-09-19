import { useState } from 'react'
import './Feedback.css'

export const Feedback = ({ url }) => {
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmitFeedback = async () => {
        const sendFeedback = {
            email,
            feedback
        }

        await fetch(`${url}/update`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(sendFeedback)
        })
    }

    return (
        <div className='feedback'>
            <div className='inputs'>
                <label>Email: <input className='email' required type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label>Feedback: <input className='comment' required type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} /></label>
            </div>
            <button onClick={() => handleSubmitFeedback()}>Enviar avaliação</button>
        </div>
    )
}
