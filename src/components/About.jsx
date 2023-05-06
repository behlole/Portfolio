import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}
            >
                <div
                    option={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}
                >
                    <img src={icon} alt={title} className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
            {title}
        </Tilt>);
}
const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>
                    Introduction
                    <h2 className={styles.sectionHeadText}>
                        Overview.
                    </h2>
                </p>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
            >
                I'm a skilled full-stack developer with experience in various technologies, including Node.js, Angular,
                React.js, NextJS, Java Spring, Laravel, and Lumen, I have developed and maintained enterprise
                applications, financial web applications, and branchless banking systems. I have a proven track record
                of optimizing legacy databases and queries to reduce latency and have integrated third-party APIs and
                libraries to enhance the functionality of web applications. I have also developed microservices
                architecture and collaborated with project managers, designers, and other developers to deliver
                high-quality products on time.
            </motion.p>
            <div className={"mt-20 flex flex-wrap gap-10"}>
                {services.map((service, index) => {
                    return (<ServiceCard key={service.title} index={index} {...service}/>)
                })}
            </div>
        </>
    )
}

export default About
