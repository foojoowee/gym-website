import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quia atque placeat est nostrum neque laborum, expedita minus tempora dolor a commodi molestias soluta ipsam cum distinctio, eveniet ipsa sed repudiandae aut veniam alias nobis ratione veritatis.
                </p>
                <p>
                    All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem, ipsum dolor </p>
                <p className="my-5">Lorem, ipsum dolor </p>
                <p className="my-5">Lorem, ipsum dolor </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">eveniet ipsa sed repudiandae aut veniam alias nobis ratione veritatis. </p>
                <p className="my-5">(333)425-851293</p>
            </div>
        </div>
    </footer>
)}

export default Footer