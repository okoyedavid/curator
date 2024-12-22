import { useState } from "react";
import styles from "../modules/TopSellers.module.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function TopSellers() {
  const [ActiveId, setActiveId] = useState(3);

  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateTransform = (index) => {
    // Center the current image in the viewport
    return `translateX(-${(index - 2) * 33.33}%)`; // 33.33% is the width of one image
  };

  function handleSelect(id) {
    setActiveId(id);
  }

  return (
    <section className={styles.gameSection}>
      <h2 className={styles.lineTitle}>Trending Artworks</h2>

      <div
        className={styles.carousel}
        style={{ transform: calculateTransform(currentIndex) }}
      >
        {items.map((artWork) => (
          <div
            key={artWork.id}
            className={`${styles.item} ${
              ActiveId === artWork.id ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${artWork.backgroundImage})`,
            }}
            onClick={() => handleSelect(artWork.id)}
          >
            <div className={styles.itemDesc}>
              <h3>{artWork.title}</h3>
              <p>{artWork.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.button} onClick={prevSlide}>
        <HiArrowNarrowLeft />
      </button>
      <button className={styles.button} onClick={nextSlide}>
        <HiArrowNarrowRight />
      </button>
    </section>
  );
}

export default TopSellers;

const items = [
  {
    id: 1,
    title: "Dota 2",
    description:
      "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
  },
  {
    id: 2,
    title: "The Witcher 3",
    description:
      "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
  },
  {
    id: 3,
    title: "RDR 2",
    description:
      "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
  },
  {
    id: 4,
    title: "PUBG Mobile",
    description:
      "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
  },
  {
    id: 5,
    title: "Fortnite",
    description:
      "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
  },
  {
    id: 6,
    title: "Far Cry 5",
    description:
      "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    backgroundImage:
      "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
  },
];
