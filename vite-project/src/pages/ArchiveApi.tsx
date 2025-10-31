import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Dropdown } from "./dropdown";
import "./home.sass";

function getArchivedArticles() {
  return JSON.parse(localStorage.getItem("archivedArticles")) || [];
}

function removeArchivedArticle(url) {
  const savedArticles = getArchivedArticles();
  const filtered = savedArticles.filter((a) => a.url !== url);
  localStorage.setItem("archivedArticles", JSON.stringify(filtered));
  return filtered;
}

function Archive() {
  const [archivedArticles, setArchivedArticles] = useState([]);

  useEffect(() => {
    setArchivedArticles(getArchivedArticles());
  }, []);

  return (
    <div className="p-4 space-y-6">
      <Dropdown title="Archive">
        <motion.div className="space-y-3">
          {archivedArticles.length === 0 ? (
            <p>Ingen gemte artikler.</p>
          ) : (
            archivedArticles.map((article) => (
              <motion.div
                drag="x"
                dragElastic={0.1}
                dragConstraints={{
                  left: -Math.min(115, window.innerWidth / 2),
                  right: 0,
                }}
                key={article.url}
                className="homeApiWrapper"
              >
                <div className="article__box2">
                  <button
                    className="rødKnap"
                    onClick={() =>
                      setArchivedArticles(removeArchivedArticle(article.url))
                    }
                  >
                    Remove
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
            ))
          )}
        </motion.div>
      </Dropdown>
    </div>
  );
}

export default Archive;
