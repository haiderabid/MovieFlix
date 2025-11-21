import { Link } from "react-router";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
export default function Pages() {

    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState(false)
    const [blogGenre, setBlogGenre] = useState([])
    return (
        <div className="min-h-screen bg-gray-900 text-white">
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

            <main className="bg-gray-900 text-white px-6 py-16 space-y-24">

                {/* Section 1 — Hero Banner */}
                <section className="relative h-[60vh] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                    <div className="relative z-10 text-center max-w-3xl">
                        <h1 className="text-5xl font-bold mb-4">Discover Your Next Favorite Movie</h1>
                        <p className="text-gray-300 mb-6">
                            Browse trending films, top-rated classics, and everything in between.
                        </p>
                        <button className="px-6  py-3 bg-red-600 font-semibold rounded-lg hover:bg-red-500 transition">
                            Explore Now
                        </button>
                    </div>
                </section>

                {/* Section 2 — Trending Movies */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">🔥 Trending Movies</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition">
                                <div className="h-40 bg-gray-700 rounded-lg mb-3"></div>
                                <h3 className="text-sm font-semibold">Movie Title {n}</h3>
                                <p className="text-xs text-gray-400">2024 • Action</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3 — Categories */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">🎞 Movie Categories</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {["Action", "Drama", "Horror", "Sci-Fi", "Romance", "Comedy", "Thriller", "Family"].map((cat) => (
                            <div
                                key={cat}
                                className="bg-gray-800 py-6 text-center rounded-xl hover:bg-gray-700 transition cursor-pointer"
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 4 — Featured Series */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">⭐ Popular Web Series</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[1, 2].map((n) => (
                            <div
                                key={n}
                                className="flex bg-gray-800 rounded-xl p-4 gap-4 hover:bg-gray-700 transition"
                            >
                                <div className="w-40 h-52 bg-gray-700 rounded-lg"></div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold">Series Name {n}</h3>
                                        <p className="text-gray-400 text-sm mb-3">2025 • Adventure • 8 Seasons</p>
                                        <p className="text-gray-300 text-sm">
                                            Explore an entertaining storyline filled with action, drama, and twists.
                                        </p>
                                    </div>

                                    <button className="mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition w-fit">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

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
    );
}
