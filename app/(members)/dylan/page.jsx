import styles from "./page.module.scss";
import EventCard from "./eventCard";
import About from "./about";

export default function DylanPage() {
  const cards = [
    {
      title: "Education",
      description: "UC Davis - Computer Science and Cognitive Science",
    },
    {
      title: "Work",
      description: "Research Assistant at UC Davis, Center for Mind and Brain",
    },
    {
      title: "Hobbies",
      description: "Motorcycles!",
    },
  ];

  return (
    <div className={styles.container}>
      <About/>
      <div className={styles.cards}>
        {cards.map((card) => (
          <EventCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

