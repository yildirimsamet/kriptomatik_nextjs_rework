import Link from "next/link";
import AdPageInner from "../AdPageInner/AdPageInner";

function NewsList({ data }) {
  return (
    <div id="news">
      <div className="container news-container">
        <h1 className="news-main-title">Güncel Kripto Para Haberleri</h1>
        <div className="news-filter-btns"></div>
        <div className="news-news">
          {data.map((post, index) => {
            if (index === 2) {
              return (
                <>
                  <AdPageInner key={index} />
                  <div data-aos="fade-up" key={index} className="single-new">
                    <div className="single-image">
                      <img
                        className="single-new-image"
                        src={post.image}
                        alt={post.title}
                      />
                    </div>
                    <div className="single-new-right">
                      <h1 className="single-new-title">{post.title}</h1>
                      <img
                        className="single-new-image mobile"
                        src={post.image}
                        alt={post.title}
                      />
                      <p className="single-new-content">
                        {post.content.substring(0, 460) + "..."}
                        <Link href={"/haberler/" + post.url}>
                          <a className="single-new-continue">devamını oku.</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <div data-aos="fade-up" key={index} className="single-new">
                  <div className="single-image">
                    <img
                      className="single-new-image"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  <div className="single-new-right">
                    <h1 className="single-new-title">{post.title}</h1>
                    <img
                      className="single-new-image mobile"
                      src={post.image}
                      alt={post.title}
                    />
                    <p className="single-new-content">
                      {post.content.substring(0, 460) + "..."}
                      <Link href={"/haberler/" + post.url}>
                        <a className="single-new-continue">devamını oku.</a>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="container pagination-container">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default NewsList;
