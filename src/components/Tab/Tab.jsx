import { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from 'framer-motion'


const Tab = () => {

    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Yoga", "Fitness", "Muscles"];


    const filterdCard = activeTab === 'All' ? ProductsData :
        ProductsData.filter((item) => item.category === activeTab)


    return (
        <>
            <div className="container my-12 md:my-16">

                {/* Tab section */}
                <div className="flex  space-x-4 mb-4 p-6">
                    {
                        tabs.map((tab, index) => (
                            <button onClick={() => setActiveTab(tab)} key={index}
                                className={`py-2 px-4 rounded-md ${activeTab === tab ? "bg-primary text-white" : "bg-gray-200 text-gray-700"}`}
                            >{tab}</button>
                        ))
                    }
                </div>

                {/* card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterdCard.map((card) => (
                        <motion.div
                            id={card.id}
                            key={card.id}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-4 border rounded shadow-sm space-y-2"
                        >
                            <img
                                src={card.image}
                                alt=""
                                className="h-[240px] w-full object-cover"
                            />
                            <p className="text-xl font-semibold">{card.title}</p>
                            <p className="text-gray-500">{card.category}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Tab;