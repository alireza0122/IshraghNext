import React from 'react';

interface TitleProps {
    title: string;
}

function TitleSection({ title }: TitleProps) {
    return (
        <div className="group relative pb-3     ">
            <h1 className="relative md:text-[32px] text-[20px] text-[#18A1A1] font-[700] cursor-pointer">
                {title}
                <span className="absolute -bottom-1 right-0 h-[6px] w-[20%] rounded-full bg-[#F9D325] transition-all duration-300 group-hover:w-full" />
            </h1>
        </div>
    );
}

export default TitleSection;