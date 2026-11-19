"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import TitleSection from "@/src/app/viwes/shared/titlesection";

interface DataType {
    img: string;
    btn: string;
    color: string;
    imgiconA: string;
    imgiconB: string;
    description: string;
}

const RINGS = [
    {size: 320, duration: 12, direction: 1},
    {size: 480, duration: 26, direction: 1},
];

const pillars: DataType[] = [
    {
        img: '/img/fanos-logo-unlable.svg',
        description:
            'در مدرسـه فنـاوری فانـوس آموزش هـای نوآورانـه در موضوعـات متعـددی از جملـه آشـنایی بـا اکوسیسـتم کارآفرینـی و نوآوری هـای فرهنگـی، یادگیـری فرآینـد تبدیـل مفهـوم ایـده بـه خلـق محصــول و خدمــت فرهنگــی، مهارت هــای کاربــردی و تجاری ســازی ایده های فرهنگــی و ... بــه فعـالان و فنـاوران فرهنگـی ارائـه می گـردد.',
        btn: 'ورود به فانوس',
        imgiconA: '/img/fanos-lable.svg',
        imgiconB: '/img/fanoos-s1.svg',
        color: '#1e9b81',
    },

];

function HomePillars() {
    const ringsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".ring").forEach((el, i) => {
                gsap.to(el, {
                    rotation: 360 * RINGS[i].direction,
                    duration: RINGS[i].duration,
                    ease: "none",
                    repeat: -1,
                    transformOrigin: "50% 50%",
                });
            });
        }, ringsRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={'grid grid-cols-12 px-60 my-10 items-center '}>
            <div className="col-span-12 my-10">
                <div className="flex justify-center">
                    <TitleSection title="ارکان 4 گانه اشراق"/>
                </div>
            </div>
            <div className="col-span-6">
                {pillars.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <div
                                style={{'--c': item.color} as React.CSSProperties}
                                className="
                                my-3 relative w-fit
                                before:content-[''] before:absolute before:top-0 before:right-[-12px]
                                before:h-full before:w-[100%] z-0 before:bg-[var(--c)]
                                before:rounded-[15px] before:rotate-8">
                                <Image
                                    className={'relative z-10 bg-white w-fit p-3 rounded-[15px]'}
                                    src={item.img}
                                    alt={item.btn}
                                    width={65}
                                    height={65}
                                />

                            </div>
                            <div className="flex flex-col justify-between">
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className="text-[30px]  rotate-90 border-1 border-[]  rounded-full"
                                />
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className="text-[30px]  rotate-[-90deg] border-1 border-[]  rounded-full"
                                />
                            </div>


                        </div>
                        <div className="border border-[#D3D3D3] min-h-[150px] rounded-[20px]">
                            <p className={'p-5 text-justify'}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="col-span-6">
                <div
                    ref={ringsRef}
                    className="relative mx-auto flex items-center justify-center"
                    style={{width: 480, height: 480}}
                >
                    {RINGS.map((r, i) => (
                        <div
                            key={i}
                            className="ring absolute rounded-full"
                            style={{
                                width: r.size,
                                height: r.size,
                                border: `1px solid #CCC `,
                                background: "transparent",
                            }}
                        >
                            <span
                                className="absolute rounded-full"
                                style={{
                                    top: -6,
                                    left: "50%",
                                    width: 12,
                                    height: 12,
                                    marginLeft: -10

                                }}
                            />
                        </div>
                    ))}

                    <div className="relative z-10 flex items-center justify-center rounded-full border p-10 border-[#ddd] bg-white ">
                        <Image
                            src="/img/mid-circle-logo.svg"
                            alt="mid logo"
                            className={'object-contain w-[110px] h-[110px] relative'}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePillars;