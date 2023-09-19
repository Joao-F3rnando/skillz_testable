import { useState } from 'react'
import './Feedback.css'

export const Feedback = ({ url }) => {
    const [feedback, setFeedback] = useState('')
    const [email, setEmail] = useState('')
    const [validate, setValidate] = useState(false)

    const handleSubmitFeedback = async () => {
        if(email != '' && feedback != '')
        {
            setValidate(false)
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
        else
        {
            setValidate(true)
        }
    }

    return (
        <div className='feedback'>
            <div className='inputs'>
                <label>Email: <input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                <label>Feedback: <input className='comment' type="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} /></label>
            </div>
            {validate && <p>Email e Feedback devem ser preenchidos</p>}
            <button onClick={() => handleSubmitFeedback()}>Enviar avaliação</button>
        </div>
    )
}
