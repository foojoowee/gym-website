import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
            <div className="text-xl whitespace-nowrap font-bold bg-primary-300 px-5 rounded-lg max-w-fit">POWER FITNESS</div>
                <p className="my-5">
                    This is a mock-up website built as a personal project. This is not an actual site to register for gym services. The project is built using React and Typescript. Nonetheless, I advocate anyone reading this to get out and move more to live a healthier life.
                </p>
                <p>
                    2023 All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">CONTACT US</h4>
                <div className="flex my-3">
                    <div><EnvelopeIcon className="mr-4 h-6 w-6 text-black"/></div>
                    <p>foo.joowee@gmail.com</p>
                </div>
                <div className="flex my-3">
                    <div><PhoneIcon className="mr-4 h-6 w-6 text-black"/></div>
                    <p>+(6016)3070555</p>
                </div>
                <div className="flex my-3">
                    <div><MapPinIcon className="mr-4 h-6 w-6 text-black"/></div>
                    <p>2-26, Jalan SS 24/20, Taman Megah, 47301 Petaling Jaya, Selangor</p>
                </div>
            </div>
        </div>
    </footer>
)}

export default Footer