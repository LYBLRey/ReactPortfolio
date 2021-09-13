import React from "react"
import Card from "./Card"
import "./style.css"

const cards = [
  {
    title: "Progressive Budget",
    text: "The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
    image:
      "https://res.cloudinary.com/lyblrey/image/upload/v1631518561/progressiveBudget_ggksrz.jpg",
    link: {
      github: "https://github.com/LYBLRey/ProgressiveBudget",
      deployed: "https://young-sea-04944.herokuapp.com/",
    },
    id: 2,
  },
  {
    title: "Code Quiz",
    text: "A typical coding assessment includes both multiple-choice questions and interactive coding challenges.",
    image:
      "https://res.cloudinary.com/lyblrey/image/upload/v1631518561/codeQuiz_xqlp4z.jpg",
    link: {
      github: "https://github.com/LYBLRey/CodeQuiz",
      deployed: "https://lyblrey.github.io/CodeQuiz/",
    },
    id: 1,
  },
  {
    title: "Work Day Schedular",
    text: "A simple calendar application that allows a user to save events for each hour of the day.",
    image:
      "https://res.cloudinary.com/lyblrey/image/upload/v1631518625/WorkDaySchedular_gs4b9e.jpg",
    link: {
      github: "https://github.com/LYBLRey/WorkDayScheduler",
      deployed: "https://lyblrey.github.io/WorkDayScheduler/",
    },
    id: 4,
  },
]

export default function Portfolio() {
  return (
    <div className="container">
      <h1 className="h1">Portfolio</h1>
      <div className="card-container">
        {cards.map((element) => (
          <Card
            title={element.title}
            github={element.link.github}
            deployed={element.link.deployed}
            text={element.text}
            image={element.image}
            key={element.id}
          />
        ))}
      </div>
    </div>
  )
}
