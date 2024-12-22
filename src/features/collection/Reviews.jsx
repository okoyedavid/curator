import { useState } from "react";
import styles from "../modules/Reviews.module.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    if (currentIndex < reviews.length - 3) {
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
  return (
    <div className={styles.review}>
      <section className={styles.info}>
        <h2 className={styles.lineTitle}>Reviews</h2>
      </section>
      <section className={styles.cardsWrapper}>
        {reviews.map((item, index) => (
          <div
            key={item.id}
            style={{ transform: calculateTransform(currentIndex) }}
            className={styles.cardGridSpace}
          >
            <div
              className={`${styles.card} ${
                index === currentIndex ? "active" : ""
              }`}
              style={{
                "--bg-img": `url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)`,
              }}
            >
              <div className={styles.reviewCard}>
                <img
                  className={styles.reviewImg}
                  src={item.image}
                  alt={"profile image"}
                />
                <h1>{item.name}</h1>
                <p>{item.review}</p>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.tags}>
                  <div className={styles.tag}>My Gallery</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <button className={styles.button} onClick={prevSlide}>
        <HiArrowNarrowLeft />
      </button>
      <button className={styles.button} onClick={nextSlide}>
        <HiArrowNarrowRight />
      </button>
    </div>
  );
}

export default Reviews;

const reviews = [
  {
    id: 1,
    name: "John Smith",
    review: "Fast shipping and great quality! Will definitely order again.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://randomuser.me/api/",
    date: "25-10-2023",
  },
  {
    id: 2,
    name: "Emily Johnson",
    review: "The product works as advertised. Super happy with my purchase!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://randomuser.me/api/",
    date: "10-10-2023",
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "Customer service was fantastic. Highly recommend this company.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    link: "https://randomuser.me/api/",
    date: "29-03-2023",
  },
  {
    id: 4,
    name: "Sarah Davis",
    review: "Good value for the price. I’m very satisfied with my order.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    link: "https://randomuser.me/api/",
    date: "17-11-2023",
  },
  {
    id: 5,
    name: "David Miller",
    review:
      "The packaging was neat, and everything arrived in perfect condition.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    link: "https://randomuser.me/api/",
    date: "05-04-2023",
  },
  {
    id: 6,
    name: "Jessica Wilson",
    review: "Exceeded my expectations. Five stars!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    link: "https://randomuser.me/api/",
    date: "05-10-2023",
  },
  {
    id: 7,
    name: "Chris Taylor",
    review: "Pretty good overall. Minor issues but nothing major.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    link: "https://randomuser.me/api/",
    date: "19-06-2023",
  },
  {
    id: 8,
    name: "Ashley Martinez",
    review: "Love it! I've already told my friends about this.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    link: "https://randomuser.me/api/",
    date: "01-05-2023",
  },
  {
    id: 9,
    name: "James Anderson",
    review: "Product is solid. Would buy again for sure.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    link: "https://randomuser.me/api/",
    date: "28-01-2023",
  },
  {
    id: 10,
    name: "Megan Thomas",
    review: "Simple, easy, and exactly what I needed. Thanks!",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    link: "https://randomuser.me/api/",
    date: "23-05-2023",
  },
];
