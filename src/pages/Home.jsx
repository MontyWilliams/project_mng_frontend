import React from 'react'
import ClientModal from '../components/ClientModal'
import ProjectModal from '../components/ProjectModal'
import Projects from '../components/Projects'
import Clients from '../components/Clients'

export default function Home() {
  return (
    <div>
        <div className="d-flex gap-3 mb-4">
            <ClientModal />
            <ProjectModal />
        </div>
        <Projects />
        <hr />
        <Clients />
    </div>
  )
}
