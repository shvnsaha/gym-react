import { FaDumbbell, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";


const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
             <div className="container">
                
                 <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
                 {/* brand info section */}
                    <div className="py-8 px-4 space-y-4">
                        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                            <FaDumbbell/>
                            <p>Coders</p>
                            <p className="text-secondary">Gym</p>
                        </div>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores officiis expedita iste minus deserunt dicta impedit cupiditate officia harum! Perferendis, dolorum! A dolore tempore nisi dolor molestias facere molestiae!
                        </p>
                        <div className="flex items-center justify-start gap-5 mt-6">
                            <a href="#">
                                <HiLocationMarker className="text-3xl"></HiLocationMarker>
                            </a>
                            <a href="#">
                                <FaInstagram className="text-3xl"></FaInstagram>
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl"></FaFacebook>
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl"></FaLinkedin>
                            </a>
                        </div>
                    </div>
                  
                  {/* Footer Link */}
                  <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-5">Important Link</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-5">Company Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-5">Resources</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Pdf Reader</a>
                            </li>
                        </ul>
                    </div>

                  </div>

                 </div>

                 {/* copyright section */}
                 <div className="text-center py-6 border-t-2 border-gray-300/10">
                    <span className=" text-sm text-gray-300 opacity-70">@copyright {year} The Copding Journey</span>
                 </div>
             </div>
        </div>
    );
};

export default Footer;