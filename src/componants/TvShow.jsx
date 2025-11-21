import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router";

function TVShow() {
  const [tvshows, setTvShows] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState(false)

  // CATEGORY + SEARCH FILTER
  const filtered = tvshows
    .filter(m => category === "All" || m.title === category)
    .filter(m => m.title.toLowerCase().includes(search.toLowerCase()));

  const cat = ["All", ...new Set(tvshows.map(c => c.title))];


  useEffect(() => {
    fetch("tvshows.json")
      .then(res => res.json())
      .then(data => setTvShows(data));
  }, []);

  return (
    <>
      <div>
        {/* navbar */}
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
                  <div onClick={() => setSearch(mov.title)} className="hover:bg-white/10 w-full flex items-center gap-1 px-2 py-1 cursor-pointer" key={mov.id}>
                    <CiSearch className="text-xl" />
                    <span className="">{mov.title}</span>
                  </div>
                ))}
              </div>}
            </div>
          </div>
        </div>

        {/* hero */}

        <div className="w-full h-130">
          <img className="w-full h-full object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/002/236/321/small_2x/movie-trendy-banner-vector.jpg" alt="" />
        </div>


        {/* movie cards */}
        <div>
          <div className="lg:px-20 lg:pt-10 lg:pb-2">
            <h1 className="lg:text-2xl text-xl font-bold">Filter TV Shows</h1>
            <div className="flex overflow-x-auto scrollbar-thin my-3 gap-4">
              {cat.map(c => (
                <button
                  key={c}
                  className="bg-gray-800 p-4 text-nowrap rounded-lg text-center hover:bg-gray-700 cursor-pointer"
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid col-span-12 lg:grid-cols-3 md:grid-cols-2 lg:gap-5 gap-2 p-2 lg:px-20">
            {filtered.map(movie => (
              <div key={movie.id} className="card bg-base-100 rounded-2xl border shadow-sm">
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

export default TVShow;
