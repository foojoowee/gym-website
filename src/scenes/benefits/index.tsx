import Htext from "@/shared/Htext";
import {BenefitType, SelectedPage } from "@/shared/types";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic2 from "@/assets/BenefitsPageGraphic2.jpg"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Faciilities",
        description: "Power Fitness provides a safe, spacious and clean environment, moderated by our staff. Power Fitness will feel like your second home in no time! "
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Diverse Classes",
        description: "Building strength also requires stamina, mobility and flexibility. We provide various classes to meet your functional needs incliding Yoga and Pilates."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert Certified Trainers",
        description: "We have NASM/ACE/ISSA certified trainers to help you plan out your routines and maintain consistency. Schedule with us for a one-time FREE TRIAL session."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Benefits({setSelectedPage}: Props) {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5 pt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.4, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <Htext>
                    More Than Just Working Out.
                </Htext>
                <p className="my-5 md:text-lg text:md">
                    At Power Fitness, we believe that getting into tip-top shape is more than just working out and grinding out the weights. We believe in a healthy balanced lifestyle of stress management, sleep and diet to complement your training programme. 
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) =>(
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                )
                )}
            </motion.div>
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img src={BenefitsPageGraphic2} alt="" className="rounded-xl md:min-w-[450px] md:w-1/2 object-contain w-3/4 mx-auto"/>
                {/* Description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                className="md:my-5 md:w-3/5 md:mt-10 mt-20"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.5}}
                                transition={{delay: 0.2, duration: 0.5}}
                                variants={{
                                    hidden: {opacity: 0, x: 100},
                                    visible: {opacity: 1, x: 0},
                                }}
                            >
                                <Htext>
                                    THOUSANDS OF MEMBERS GETTING 
                                    <span className="text-primary-500"> FIT </span>
                                    AND 
                                    <span className="text-primary-500"> SMARTER</span>
                                </Htext>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPTION */} 
                    <motion.div
                        className="md:my-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.5, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 100},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <p className="my-5">
                            At Power Fitness, we believe in training based on science-backed data. In today's age misinformation about fitness and health is spreading like the plague on social media. Our affliated personal trainers will do our best to spread accurate knowledge in the gym and assist beginners when they are around in the gym. Please do not be shy to approach fellow personal trainers and gym members, we strive to create a safe and comfortable working out environment!
                        </p>
                        <p className="mb-5">
                            We will be carrying out free classes to educate our members on what is reliable and consistent exercise and health advice. For those of you who want an easy way out, Power Fitness is not the place for you. We tell you what you NEED to hear, not what you WANT to hear.
                        </p>
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                    <button></button>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits