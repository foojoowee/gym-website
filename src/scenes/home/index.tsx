import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageRack from "@/assets/HomePageRack.jpg"
import SponsorMAP from "@/assets/SponsorMAP.jpg"
import SponsorRedbull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {motion} from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Home({setSelectedPage}: Props) {   

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* Image and main header */}
            <motion.div 
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* mainheader */}
                <div className="z-10 mt-32 md:basis 3/5">
                    {/* Headings */}
                    <motion.div 
                        className="md: -mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <h1 className="basis-3/5 font-monserrat md:text-7xl text-5xl font-bold">POWER FITNESS</h1>
                            </div>
                        </div>

                        <p className="mt-8 text:md md:text-lg md:text-start">
                            At Power Fitness we provide the best free-weight training environment, coupled with world class-lifters and equipment. Evolve with us today at Power Fitness!
                            {/* Unrivaled Gym, Unparalleled Training Fitness Center. World-class Studios to get the Body Shapes that you dream of. Get Your Dream Physique today! */}
                        </p>
                    </motion.div>
                    {/* Actions */}
                    <motion.div 
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -100},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            JOIN US
                        </ActionButton>
                        <AnchorLink 
                            className="text-lg font-bold text-primary-500 underline hover:text-secondary-500" 
                            onClick={() => setSelectedPage(SelectedPage.Benefits)} href={`#${SelectedPage.Benefits}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* image */}
                <div className="flex basis-3/5 justify-center mt-10 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageRack} alt="home-page-rack" className="rounded-xl md:min-w-[450px] object-contain" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justift-between gap-16">
                            <img src={SponsorRedbull} alt="redbull-sponsor"/>
                            <img src={SponsorMAP} alt="fortunes-sponsor" className="h-16"/>
                            <img src={SponsorForbes} alt="forbes-sponsor"/>
                            <img src={SponsorFortune} alt="fortunes-sponsor"/>

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home