import { useState } from "react";

const AdminPage = () => {
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Bitcoin");
  const [source, setSource] = useState("");
  const handleLogin = () => {
    fetch("https://kriptomatik.herokuapp.com/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setAdmin(true);
        } else {
          setError(true);
          (() => {
            setTimeout(() => {
              setError(false);
            }, 1500);
          })();
          setAdmin(false);
        }
      });
  };
  const handleAddPost = () => {
    fetch("https://kriptomatik.herokuapp.com/api/admin/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        url,
        content,
        image,
        category,
        source,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      {admin ? (
        <>
          <h1>Admin sayfasına hoşgeldiniz.</h1>
          <h3 className="my-4">----------- Post Ekleme -----------</h3>
          <form className="w-100">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label">
                Title
              </label>
              <input
                required={true}
                type="text"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail4" className="form-label">
                Url
              </label>
              <input
                required={true}
                type="text"
                className="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              {" "}
              <label htmlFor="exampleInputEmail5" className="form-label">
                Content
              </label>
              <textarea
                required={true}
                style={{ resize: "none" }}
                rows="5"
                type="text"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail6" className="form-label">
                Image
              </label>
              <input
                required={true}
                type="text"
                className="form-control"
                id="exampleInputEmail6"
                aria-describedby="emailHelp"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              {" "}
              <label htmlFor="exampleInputEmail7" className="form-label">
                Category
              </label>
              <select
                id="exampleInputEmail7"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
                value={category}
              >
                <option value="Bitcoin">Bitcoin</option>
                <option value="Altcoin">Altcoin</option>
                <option value="Genel">Genel</option>
              </select>
            </div>
            <div className="mb-3">
              {" "}
              <label htmlFor="exampleInputEmail8" className="form-label">
                Source
              </label>
              <input
                required={true}
                type="text"
                className="form-control"
                id="exampleInputEmail8"
                aria-describedby="emailHelp"
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
              />
            </div>

            <button
              onClick={handleAddPost}
              className="btn btn-dark"
              type="button"
            >
              Gönder
            </button>
          </form>

          <h3 className="my-4">----------- Post Silme -----------</h3>
        </>
      ) : (
        <>
          <h2>Admin Page</h2>
          <form className="d-block w-50">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {error ? (
              <div className="alert alert-danger" role="alert">
                Email or password is incorrect.
              </div>
            ) : null}

            <button
              onClick={handleLogin}
              type="button"
              className="btn btn-primary d-block w-100"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};
export default AdminPage;
