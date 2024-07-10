import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image 
                src={"/logo.svg"}
                alt="logo"
                width={55}
                height={55}
                priority
            />
        </Link>
    )
}

export default Logo