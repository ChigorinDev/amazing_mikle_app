import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title (id: {id})
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit eum aliquam,
             laborum autem architecto nisi at dolores.
            Doloribus nisi consequatur repudiandae est sed laudantium! Sed praesentium
            cumque natus quas?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Mikle</div>
          <div> 5 May, 5am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
