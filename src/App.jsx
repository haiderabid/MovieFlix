import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState(false)

  
  const filtered = movies
    .filter(m => category === "All" || m.industry === category)
    .filter(m => m.title.toLowerCase().includes(search.toLowerCase()));

  const cat = ["All", ...new Set(movies.map(c => c.industry))];

  useEffect(() => {
    fetch("database.json")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <div>
        <div className="navbar bg-base-100 shadow-sm px-20 sticky top-0 z-50">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tv-show">TV Show</Link></li>
                <li><Link to="/blog-genre">Blog</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">MovieFlix</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tv-show">TV Show</Link></li>
              <li><Link to="/blog-genre">Blog</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-60"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSuggestion(!suggestion)}
              />
              <a className="btn">Sign up</a>
              {suggestion && <div className="absolute w-full bg-gray-700 max-h-73 overflow-auto scrollbar-none top-12 list-none z-20 right-20 border border-gray-400 rounded-sm">
                <div onClick={() => setSuggestion(false)} className="sticky top-0 bg-gray-600 flex items-center"><HiMiniXMark className="bg-white/20 text-3xl p-1 cursor-pointer" /><span className="pl-2">Search your Favorite movies</span></div>
                <hr className="border-gray-400" />
                {movies.map(mov => (
                  <li onClick={() => setSearch(mov.title)} className="hover:bg-white/10 w-full flex items-center gap-1 px-2 py-1 cursor-pointer" key={mov.id}>
                    <CiSearch className="text-xl" />
                    <span className="">{mov.title}</span></li>
                ))}
              </div>}
            </div>
          </div>
        </div>

        <div className="">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://i.ytimg.com/vi/6JP8zXYqnrg/maxresdefault.jpg"
                className="w-full h-60 lg:h-160 object-cover object-top" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://www.acmodasi.in/amdb/images/movie/8/n/3-idiots-2009-75632.jpg"
                className="w-full h-60 lg:h-160 object-cover object-top" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/25185045/Money-Heist.png"
                className="w-full h-60 lg:h-160 object-cover object-top" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://m.media-amazon.com/images/I/61gMiMOggaL._AC_UL1024_.jpg"
                className="w-full h-60 lg:h-160 object-cover object-top" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-20 my-20">
          <h2 className="text-3xl font-bold mb-6">Trending Movies</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition">
                <div className="h-40 bg-gray-700 rounded-lg mb-3">
                  <img className="h-full w-full object-cover" src="data:image/jpeg;base64,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" alt="" />
                </div>
                <h3 className="text-sm font-semibold">Movie Title {n}</h3>
                <p className="text-xs text-gray-400">2024 • Action</p>
              </div>
            ))}
          </div>
        </section>

        {/* movie cards */}
        <div>
          <div className="lg:px-20 lg:pt-10 lg:pb-2">
            <h1 className="lg:text-4xl mb-5 text-xl font-bold ">Filter Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {cat.map(c => (
                <button
                  key={c}
                  className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid col-span-12 lg:grid-cols-4 md:grid-cols-2 lg:gap-5 gap-2 p-2 lg:px-20">
            {filtered.map(movie => (
              <div key={movie.id} className="card bg-white/5  rounded-2xl border border-gray-500 shadow-2xl">
                <figure className="p-2">
                  <img
                    src={movie.poster}
                    title={movie.title}
                    alt={movie.title}
                    className="rounded-xl h-90 w-full object-cover"
                  />
                </figure>
                <div className="pb-2 flex flex-col items-center">
                  <h2 className="card-title">{movie.title}</h2>
                  <p className="mb-2">Rating: {movie.rating}</p>
                  <div className="card-actions">
                    <button className="btn bg-black text-white">Watch Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <footer className="footer border-t mt-5 sm:footer-horizontal bg-base-200 text-base-content p-10">
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy Policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Partners</h6>
            <a className="link link-hover">Advertise with us</a>
            <a className="link link-hover">Partner with us</a>
            <a className="link link-hover">Cookie Preferences</a>
            <a className="link link-hover">Legal Notices</a>
          </nav>
          <nav>
            <h6 className="footer-title">Account</h6>
            <a className="link link-hover">Way to Watch</a>
            <a className="link link-hover">Corporate Information</a>
            <a className="link link-hover">Only On MovieFlix</a>
          </nav>
          <form>
            <h6 className="footer-title">Get Started</h6>
            <fieldset className="w-80">
              <label>Ready to watch? Enter your email to create or restart your membership.</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </>
  );
}

export default App;
