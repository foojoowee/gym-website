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
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"



const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Faciilities",
        description: "This is just text for testing development. This is just text for testing development"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "Diverse Classes",
        description: "This is just text for testing development. This is just text for testing development"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert Certified Trainers",
        description: "This is just text for testing development. This is just text for testing development"
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
                className="md:my-5 md:w-3/5"
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
                    More Than Just A Gym.
                </Htext>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
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
                <img src={BenefitsPageGraphic} alt="" className="mx-auto"/>
                {/* Description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                                className="md:my-5 md:w-3/5"
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
                                    MILLIONS OF HAPPY MEMBERS GETTING 
                                    <span className="text-primary-500"> FIT</span>
                                </Htext>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPTION */} 
                    <motion.div
                        className="md:my-5 md:w-3/5"
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
                            This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development.
                        </p>
                        <p className="mb-5">
                            This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development. This is just text for testing development.
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