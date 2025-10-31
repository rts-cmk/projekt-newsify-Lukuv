import { useEffect, useState } from "react";
import { Dropdown } from "./dropdown";
import "./home.sass";
import { motion } from "motion/react";

const ApiKey = "7i16BWNlPqYHUsFpeVKsN7sQSSesEmWM";

function Archive(article) {
  const savedArticles =
    JSON.parse(localStorage.getItem("archivedArticles")) || [];

  if (!savedArticles.find((a) => a.url === article.url)) {
    savedArticles.push(article);
    localStorage.setItem("archivedArticles", JSON.stringify(savedArticles));
    alert("Artiklen er gemt!");
  } else {
    alert("Artiklen er allerede gemt.");
  }
}

const categories = ["World", "Arts", "Fashion", "Health", "Food"];

function NewsApi() {
  const [newsByCategory, setNewsByCategory] = useState({});

  useEffect(() => {
    async function fetchAllCategories() {
      const results = {};

      for (const cat of categories) {
        try {
          const response = await fetch(
            `https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=${ApiKey}`
          );
          const data = await response.json();
          results[cat] = data.results || [];
        } catch (error) {
          console.error(`Error fetching ${cat}:`, error);
          results[cat] = [];
        }
      }

      setNewsByCategory(results);
    }

    fetchAllCategories();
  }, []);

  return (
    <div className="p-4 space-y-6">
      {Object.keys(newsByCategory).length === 0 ? (
        <p>Indlæser artikler...</p>
      ) : (
        categories.map((cat) => (
          <Dropdown key={cat} title={cat}>
            <motion.div className="space-y-3">
              {newsByCategory[cat]?.map((article) => (
                <motion.div
                  drag="x"
                  dragElastic={0.1}
                  dragConstraints={{ left: -115, right: 0 }}
                  key={article.url}
                  className="homeApiWrapper"
                >
                  <div className="article__box">
                    <button
                      className="grønKnap"
                      onClick={() => Archive(article)}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {article.multimedia?.[0]?.url && (
                    <img src={article.multimedia[0].url} alt={article.title} />
                  )}
                  <span>
                    <h2 className="homeApiTitle">{article.title}</h2>
                    {article.byline && (
                      <p className="homeApiByline">{article.byline}</p>
                    )}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="homeApiLink"
                    >
                      Læs artiklen her
                    </a>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </Dropdown>
        ))
      )}
    </div>
  );
}

export default NewsApi;
