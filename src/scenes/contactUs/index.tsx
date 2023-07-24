import { SelectedPage } from "@/shared/types"
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from "@/shared/Htext";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}




function contactUs({setSelectedPage}: Props) {
    
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();
    
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    }
  return (
    <section
        id="contactus"
        className="mx-auto w-5/6 pt-24 pb-32"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
        {/* header */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.2, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -100},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <Htext>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </Htext>
                <p className="my-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur necessitatibus totam velit vitae deleniti molestias eligendi atque quos eum deserunt. Vero quisquam temporibus accusamus praesentium vitae repellat quidem? Ab, delectus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi similique nesciunt eveniet? Pariatur, perspiciatis. Beatae sint non quod nobis, mollitia itaque sit soluta officia deleniti similique incidunt a ab?
                </p>
            </motion.div>
            {/* form and image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <form 
                        action="https://formsubmit.co/eeba4fd8542b2a07933d1759a94d0440"
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                    >
                        <input
                            className={inputStyles} 
                            type="text" 
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <input
                            className={inputStyles} 
                            type="text" 
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invlid email address."}
                            </p>
                        )}
                        <textarea
                            className={inputStyles} 
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white flex mx-auto"
                        >
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.4, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                    }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img 
                            src={ContactUsPageGraphic} 
                            alt="contact-us" 
                            className="w-3/4 md:ml-24"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default contactUs