"use client";

import React from "react";
import Image from "next/image";

interface LogoCircleProps {
    size?: "mobile" | "header" | "footer";
}

export function LogoCircle({ size = "header" }: LogoCircleProps) {
    const sizeClasses = {
        mobile: "w-10 h-10",
        header: "w-12 h-12",
        footer: "w-16 h-16"
    };

    const imgSize = {
        mobile: 40,
        header: 48,
        footer: 64
    };

    return (
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-brand-gold shadow-xs flex-shrink-0 hover:ring-3 hover:ring-brand-gold/30 transition-all duration-300`}>
            <Image
                src="/assets/logo-1.png"
                alt="Al Diyar Al Arabia National SPC"
                width={imgSize[size]}
                height={imgSize[size]}
                className="w-full h-full object-contain p-1"
                priority
            />
        </div>
    );
}

export default LogoCircle;
