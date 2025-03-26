import React from 'react'
import '../components/TeamMemberCard.css'

function TeamMemberCard({TeamMemberName,Job}) {
  return (
   
    <div className='main'>
        
    <div className='Member'>
       <h2>Team Member Card</h2>
        <h2>{TeamMemberName}</h2>
        <h3>{Job}</h3>
    </div>
    </div>
  )
}

export default TeamMemberCard