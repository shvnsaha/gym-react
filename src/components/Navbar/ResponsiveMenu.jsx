import { motion, AnimatePresence } from "framer-motion";


const ResponsiveMenu = ({ open }) => {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0,y :-100 }}
                        animate={{ opacity: 1 ,y:0}}
                        exit={{ opacity: 0 ,y:-100}}
                        className="absolute top-20 left-0 w-full h-screen z-10"
                    >
                        <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                            <ul className="flex  flex-col justify-center items-center gap-10">
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default ResponsiveMenu;