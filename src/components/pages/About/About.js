import React from "react"
import "./index.css"
export default function About() {
  return (
    <div className="container">
      <div className="about">
        <h1>About Me</h1>
        <p>
          I never visioned myself as someone who could be academically
          "successful" but I learned that it's not about being the best/greatest
          at something, it's about trying our best and knowing we put in our all
          that we could into our hard work!
        </p>
        <p>Technologies I have learned within the UWS Coding Bootcamp:</p>
        <p>Front-End</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive WebDesign</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <p>Back-End</p>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL Sequelize</li>
          <li>MongoDB Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  )
}
