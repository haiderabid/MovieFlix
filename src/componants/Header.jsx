import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniXMark } from "react-icons/hi2";

export default function Header({ movies, setMovies }) {
    const [search, setSearch] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    return (
        <>
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/tv-show">TV Show</a></li>
                            <li><a href="movies">Movies</a></li>
                            <li><a href="blog">Blog</a></li>
                            <li><a href="pages">Pages</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MovieFlix</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/">Home</a></li>
                        <li><a href="/tv-show">TV Show</a></li>
                        <li><a href="movies">Movies</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="pages">Pages</a></li>
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
        </>
    )
}
