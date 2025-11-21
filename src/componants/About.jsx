import { Link } from "react-router";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";
export default function About() {

    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState(false)
    const [blogGenre, setBlogGenre] = useState([])
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


            {/* main about section  */}
            <main className="bg-gray-900 text-white px-6 py-16">

                {/* Section 1 — About the Website */}
                <section className="max-w-5xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">About MovieFlix</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        MovieFlix is your one-stop destination to explore movies, TV shows, trailers,
                        and trending entertainment content. We help millions discover what to watch next
                        with clean and fast recommendations.
                    </p>
                </section>

                {/* Section 2 — What We Offer */}
                <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20">

                    {[
                        {
                            title: "Latest Movies",
                            desc: "Browse newly released films from Hollywood, Bollywood, Tollywood, Korean cinema, and more."
                        },
                        {
                            title: "Trending Series",
                            desc: "Discover popular web series across Netflix, Amazon Prime, Disney+, and other OTT platforms."
                        },
                        {
                            title: "Smart Search",
                            desc: "Find movies by genre, language, year, cast, or platform — fast and easy."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:bg-gray-700 transition"
                        >
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-300">{item.desc}</p>
                        </div>
                    ))}

                </section>

                {/* Section 3 — Why Choose Us */}
                <section className="max-w-5xl mx-auto text-center mb-20">
                    <h2 className="text-3xl font-bold mb-6">Why Choose MovieFlix?</h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
                            <h4 className="text-xl font-semibold mb-3">Huge Database</h4>
                            <p className="text-gray-300">
                                We collect thousands of movies and series from global streaming platforms.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
                            <h4 className="text-xl font-semibold mb-3">Real-Time Updates</h4>
                            <p className="text-gray-300">
                                Stay updated on new releases, ratings, and popular picks instantly.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
                            <h4 className="text-xl font-semibold mb-3">User-Friendly</h4>
                            <p className="text-gray-300">
                                A clean, modern UI makes browsing movies smooth and enjoyable.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
                            <h4 className="text-xl font-semibold mb-3">Multi-Platform</h4>
                            <p className="text-gray-300">
                                See where to watch: Netflix, Amazon, Disney+, Hulu, HBO, and more.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Section 4 — Our Mission */}
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We aim to build the most trusted movie discovery platform on the internet —
                        helping you spend less time searching and more time enjoying the movies you love.
                    </p>
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
