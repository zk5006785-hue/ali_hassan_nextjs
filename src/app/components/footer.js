import Image from "next/image"
import logo from "@/public/next.svg"

export default function footer (){
    return <div>
        <Image src={logo} widhth={600} height={50} alt="nn"/>
    </div>
}