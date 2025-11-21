import { Link } from "react-router";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
export default function Blog() {

    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState(false)
    const [blogGenre, setBlogGenre] = useState([])


    useEffect(() => {
        fetch(`database.json`).then(res => res.json()).then(data => setBlogGenre(data))
    }, [])
    return (
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
                                <li onClick={() => setSearch(mov.title)} className="hover:bg-white/10 w-full flex items-center gap-1 px-2 py-1 cursor-pointer" key={mov.id}>
                                    <CiSearch className="text-xl" />
                                    <span className="">{mov.title}</span></li>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Watch Movies Anytime, Anywhere
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                    Detectives navigate corruption and chaos in a city ruled by fear.
                </p>
                <Link to='/' className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition">
                    Get Started
                </Link>
            </section>

            {/* Sports Categories */}
            <section className="px-6 py-12">
                <h3 className="text-2xl font-semibold mb-6">Popular Movie Details or Release</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {["Comedy", "Thriller", "Crime", "Drama", "Romance", "Adventure"].map(sport => (
                        <div
                            key={sport}
                            className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 cursor-pointer"
                        >
                            {sport}
                        </div>
                    ))}
                </div>
            </section>



            <div className="container mx-auto px-20 ">
                <ul className="grid grid-cols-3 gap-5 ">
                    {blogGenre.map(blogGen => (
                        <div key={blogGen.id} className="border shadow-2xl p-4 border-gray-500 rounded-xl">
                            <h1 className="text-4xl mb-2 font-bold">{blogGen.title}</h1>
                            <div className="flex justify-between">
                                <p>Industry: {blogGen.industry}</p>
                                <p>Release: {blogGen.year}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Creator: {blogGen.creator}</p>
                                <p>Rating: {blogGen.rating}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Laguage: {blogGen.language}</p>
                                <p>Seasons: {blogGen.seasons}</p>
                            </div>
                            <p>Description: <br />{blogGen.description}</p>
                        </div>
                    ))}
                </ul>
            </div>
            
            <div className="text-center text-9xl mt-10 mb-30">
                <h1>Upcomming Next...</h1>
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
    )
}
