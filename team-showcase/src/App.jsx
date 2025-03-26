import React from 'react'
import '../src/App.css'
import TeamMemberCard from './components/TeamMemberCard'

const MemberData=[
            {TeamMemberName:"Shankar", Job:"Software Engineer"},
            {TeamMemberName:"Thamizh", Job:"Software Engineer"},
            {TeamMemberName:"Abishek", Job:"Software Engineer"}
]

function App() {
  return (
    MemberData.map((item,index)=>(
      <TeamMemberCard key={index} TeamMemberName={item.TeamMemberName} Job={item.Job} />
    ))
    
  )
}

export default App