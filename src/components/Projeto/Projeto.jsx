import React from 'react'
import './Projeto.css'

export const Projeto = ({ projects }) => {

    const handleDownload = (url) => {
        const projectURL = url;
        window.open(projectURL, '_blank');
    }

    return (
        <div className='projects'>
            {projects.map((project) => (
                <button key={project.id} className='project' onClick={() => handleDownload(project.url)}>Projeto {project.id} <span>{project.title}</span></button>
            ))}
        </div>
    )
}
