import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"
import { motion } from "framer-motion";
import { Rotate, SlideRight } from "../../utility/animation";


const Hero = () => {
    return (
        <>
            <section>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h[650px] relative">
                    {/* Brand Info */}

                    <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
                        <div className="text-center md:text-left space-y-6">
                            <motion.h1 variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">Gym Gives you the perfect <span className="text-primary">Health</span></motion.h1>
                            <motion.p variants={SlideRight(1.2)}
                                initial="hidden"
                                animate="visible" className="text-gray-600 xl:max-w-[500px]">We will make sure you get the right and the best quality products
                                for your workout</motion.p>

                            <motion.div variants={SlideRight(1.5)}
                                initial="hidden"
                                animate="visible"
                                 className="flex justify-center gap-8 items-center md:justify-start">
                                <button className="primary-btn flex items-center gap-2">Order Now</button>
                                <button className="flex justify-center items-center gap-2"> <FaPlay /> Watch Now</button>
                            </motion.div>
                        </div>
                    </div>

                    {/* hero image */}
                    <div className="flex justify-center items-center">
                        <motion.img 
                           variants={Rotate(0.5)}
                           initial="hidden"
                           animate="visible"
                        
                        src={HeroImg} alt="" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;