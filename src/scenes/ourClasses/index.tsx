import { ClassType, SelectedPage } from "@/shared/types"
import {motion} from "framer-motion"
import image1 from "@/assets//image1.png"
import image2 from "@/assets//image2.png"
import image3 from "@/assets//image3.png"
import image4 from "@/assets//image4.png"
import image5 from "@/assets//image5.png"
import image6 from "@/assets//image6.png"
import Htext from "@/shared/Htext"
import Class from "./Class"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lift weights the proper way - get your form checked today! To avoid possible injuries, it is important to know when form can be compensated and when it might be harzardous.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Let your mind and body become one. Test the limits of your body's flexibility and mobility with our experienced instructors",
        image: image2,
    },
    {
        name: "Pilates Classes",
        description: "Test the limits of your core strength in our Pilates Class. Engage your core and muscles you never knew could be engaged.",
        image: image3,
    },
    {
        name: "PowerLifting Classes",
        description: "Further enhance your technique in Squat, Bench and Deadlift with our elite lifters who hold national records. There is never enough fine-tuning to perfect your lift technique!",
        image: image4,
    },
    {
        name: "Calisthenics Classes",
        description: "Join our group class performing calisthenics exercises. We have three different circuit sessions per week consisting of various bodyweight exercises!",
        image: image5,
    },
    {
        name: "Boxing Classes",
        description: "Train like Mike Tyson and Muhammad Ali! Except, do it with our strong and merciless coaches which have years of experience competing nationally and internationally.",
        image: image6,
    }
]

function OurClasses({setSelectedPage}: Props) {
  return (
    <section
        id="ourclasses"
        className="w-full bg-primary-100 py-40"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <div className="md:w-3/5  md:text-lg text-md">
                    <Htext>Our Classes</Htext>
                    <p className="py-5">
                        Our facilities include group classes to cater for members who want to focus on flexibility, mobility and a more social aspect of working out. We offer Yoga, Pilates (both Math and Reformer), Calisthenics, Beginner Weight Lifting, Powerlifting and Boxing Classes.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index)=>(
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    )) }
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses