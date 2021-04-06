import Link from "next/link";

function Post({ post }) {
  console.log(post);
  return (
    <div className="container" id="post-standalone">
      <h1 className="post-standalone-title">{post.title}</h1>
      <img
        className="post-standalone-image"
        src={post.image}
        alt={post.title}
      />

      <p className="post-standalone-content">{post.content}</p>
      <Link href="/haberler/page/1">
        <a className="post-standalone-content post-source ">Haberler</a>
      </Link>
      {post.source ? (
        <p className="post-standalone-content post-source">
          Haber Kaynağı:{" "}
          <a rel="nofollow" target="_blank" href={post.source}>
            Kaynak siteye gidebilirsiniz.
          </a>
        </p>
      ) : null}
    </div>
  );
}

export default Post;
