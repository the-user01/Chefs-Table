// import { CiSearch } from "react-icons/ci";
import bg from '../../assets/Rectangle1.png'

const Header = () => {

    return (
        <div>
            {/* Navabr */}
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipe</a></li>
                                <li><a>Abount</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Chef&apos;s Table</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipe</a></li>
                            <li><a>Abount</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="ml-2">
                            <img className='btn' src="../../assets/boy2.png" alt="" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Banner */}

            <main>
                <div className="hero mt-12 rounded-xl" style={{ backgroundImage: "url("+ bg +")" }}>
                    <div></div>
                    <div className="hero-overlay bg-opacity-10 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5">Get amazing coocking and delicious flavour from us</p>
                            <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-full">Explore Now</button>
                            <button className="btn bg-[transparent] text-white rounded-full ml-8">Our FeedBack</button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Header;