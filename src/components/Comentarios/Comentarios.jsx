import React from 'react'
import styles from './Comentarios.module.css'

export const Comentarios = ({ comments }) => {
    return (
        <>
            {comments.map((comment) => (
                <div className={styles.div} key={comment.ID}>
                    <h2>{comment.email}</h2>
                    <p>{comment.feedback}</p>
                </div>
            ))}
        </>
    )
}
