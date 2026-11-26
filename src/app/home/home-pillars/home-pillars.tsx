"use client";

import React, {useState} from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import TitleSection from "@/src/app/viwes/shared/titlesection";

type DataType = {
    img: string;
    btn: string;
    color: string;
    imgiconA: string;
    imgiconB: string;
    description: string;
};

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
    {
        img: '/img/4sogh-logo-unlabel (1).svg',
        btn: 'ورود به چارسوق',
        description:
            'خانـه خلاق و نـوآوری اشـراق بـه عنـوان مبـادی رسـمی و بـا مجـوز از معاونـت علمـی و فناوری ریاسـت جمهـوری، متقاضیـان دریافـت اعتبارنامـه شـرکت خلاق را از سراسـر کشـور پذیـرش کــرده و می کوشــد بــا رشــد و شــتابدهی موسسات و شرکتهای متقاضی، شــرایطی فراهـم آورد تـا در اسـرع وقـت ایـن شـرکتها اعتبارنامـه شـرکت خلاق را دریافـت نماینـد.\n' +
            '\n',

        imgiconA: '/img/4sogh-logo-label.svg',
        imgiconB: '/img/4sogh-logo-label2.svg',
        color: '#16c1d0',
    },
    {
        img: '/img/3dal-logo-unlabel (1).svg',
        btn: 'ورود به سه دال',
        description:
            'در شــتاب دهنــده ســه دال تیم هــای دارای ایــده نوآورانــه، پذیــرش و بــرای رشــد، میزبانــی و شـتابدهی خواهنـد شـد، خدمـات علمـی، فنـی، و اعتبـاری مـورد نیـاز تیم هـا در اختیـار ایشـان قــرار داده شــده و بــه صــورت روشــمند و دقیــق تیم هــا هدایــت می شــوند تــا بتواننــد در قامـت شـرکت خـلاق و دانـش بنیـان و بـه صـورت رسـمی بـه تولیـد محصـول و ارائـه خدمـات خلاقانـه مبـادرت بورزنـد.',

        imgiconA: '/img/3dal-logo-label.svg',
        imgiconB: '/img/3dal-logo-label2.svg',
        color: '#3b459d',
    },
    {
        img: '/img/karizman-logo-unlabel.svg',
        btn: 'ورود به کاریزنگار',
        description:
            'رویدادهای دوره‌ای که به منظور تمرین و تجربه ایده‌ورزی و تیم‌سازی در موضوعات مختلف تکرار می‌شود و علاقه‌مندان به حوزه فناوری فرهنگی و صنایع نرم و خلاق می‌توانند در آنها شرکت کرده و با تمرین و تکرار فعالیت‌ها نسبت به ایده‌ورزی، تجربه بیشتری به دست بیاورند. اين رويداد، تقاطع مساله‌محوري و ايده‌مداري به شمار مي‌رود و در آن تلاش مي‌شود مساله و چالش‌هاي عرصه فرهنگ لايه‌برداري شده و به استخراج ايده‌هاي استارت‌آپي نزديك شود و از سوي ديگر با آماده‌سازي ذهن علاقه‌مندان و ايده‌ورزان، زمينه اكتشاف ايده‌هاي نوآورانه فراهم مي‌آيد تا بدين صورت ايده‌هاي استحصالي در مدار حل مساله‌ها و چالش‌هاي فرهنگي قرار بگيرند.',

        imgiconA: '/img/karizman-label.svg',
        imgiconB: '/img/karizman-logo-label.svg',
        color: '#14afb9',
    },
];


const RINGS = [
    {
        size: 57,
        duration: 20,
        direction: 1,
        logos: [
            {src: '/img/4sogh-logo.svg', alt: 'چارسوق', angle: 180, index: 1},
            {src: '/img/3dal-logo.svg', alt: 'سه‌دال', angle: 20, index: 2},
        ],
    },
    {
        size: 86,
        duration: 20,
        direction: -1,
        logos: [
            {src: '/img/kariz-logo.svg', alt: 'کاریزنگار', angle: 165, index: 3},
            {src: '/img/fanoos-logo.svg', alt: 'فانوس', angle: 350, index: 0},
        ],
    },
];


function HomePillars() {
    const [active, setActive] = useState(0);
    const item = pillars[active];

    const goNext = () => setActive((p) => (p + 1) % pillars.length);
    const goPrev = () => setActive((p) => (p - 1 + pillars.length) % pillars.length);

    return (
        <div className={'grid grid-cols-12 px-6 md:px-10 xl:px-[clamp(50px,calc(64.84vw-780px),288px)] lg:mt-20  items-center  overflow-hidden '}>
            <div className="col-span-12 lg:my-10 my-5">
                <div className="flex justify-center  ">
                    <TitleSection title="ارکان 4 گانه اشراق"/>
                </div>
            </div>


            <div className="col-span-12 lg:col-span-6 order-1 lg:order-0">


                <div key={active} className=" ">
                    <div className="flex  justify-between items-center ">
                        <div className="flex gap-4 items-center sm:gap-[42px]">
                            <div
                                style={{'--c': item.color} as React.CSSProperties}
                                className="my-3 relative md:w-[120px] w-[80px]  md:h-[120px] h-[80px]
                        before:content-[''] before:absolute before:top-0 before:right-[-9.5px] cursor-pointer
                        before:h-full before:w-[100%] z-0 before:bg-[var(--c)]
                        before:rounded-[20px] before:rotate-6"
                            >
                                <Image
                                    className="relative z-10 bg-white p-4 rounded-[20px]  md:w-[120px] w-[80px]  md:h-[120px] h-[80px] shadow-[-2px_4px_30px_rgba(193,193,193,0.3)]"
                                    src={item.img}
                                    alt={item.btn}
                                    width={65}
                                    height={65}
                                />
                            </div>
                            <div className="flex flex-col gap-[10px] cursor-pointer">
                                <Image src={item.imgiconA} alt={item.btn} width={100} height={100}/>
                                <Image className="w-[125px]" src={item.imgiconB} alt={item.btn} width={100} height={100}/>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="قبلی"
                                className="w-[38px] h-[38px] rounded-full border border-[#D3D3D3] flex justify-center items-center cursor-pointer hover:bg-[#f3f3f3] transition"
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="text-[17px] text-[#343b43] rotate-90"/>
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="بعدی"
                                className="w-[38px] h-[38px] rounded-full border border-[#D3D3D3] flex justify-center items-center cursor-pointer hover:bg-[#f3f3f3] transition"
                            >
                                <FontAwesomeIcon icon={faAngleLeft} className="text-[17px] text-[#343b43] rotate-[-90deg]"/>
                            </button>
                        </div>
                    </div>
                    <div className="min-h-[250px] ">
                        <div className="relative border border-[#D3D3D3]  transition-all  rounded-[20px] mb-6 lg:mt-[49px] mt-[24px]">
                            <p className="   overflow-y-auto p-5 pb-10 text-justify text-sm leading-7 text-[#343b43] sm:text-base">
                                {item.description}
                            </p>

                            <button
                                style={{background: item.color}}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-white w-[184px] min-h-[48px] rounded-[15px] text-[18px] font-[700] cursor-pointer"
                            >
                                {item.btn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 order-0 lg:order-1 ">
                <style>{`
        @keyframes orbit-spin { to { transform: rotate(360deg); } }
        .orbit-ring, .orbit-logo { animation-name: orbit-spin; animation-timing-function: linear; animation-iteration-count: infinite; }
    `}</style>

                <div className="relative mx-auto flex aspect-square w-full max-w-[350px] items-center justify-center sm:max-w-[600px] lg:max-w-[560px]">
                    {RINGS.map((r, i) => (
                        <div
                            key={i}
                            className="orbit-ring pointer-events-none absolute rounded-full border border-[#CCC]"
                            style={{
                                width: `${r.size}%`,
                                height: `${r.size}%`,
                                animationDuration: `${r.duration}s`,
                                animationDirection: r.direction === 1 ? "normal" : "reverse",
                            }}
                        >
                            {r.logos.map((logo, j) => {
                                const rad = (logo.angle * Math.PI) / 180;
                                const x = 50 + 50 * Math.cos(rad); // درصد
                                const y = 50 + 50 * Math.sin(rad); // درصد
                                return (
                                    <div
                                        key={j}
                                        className="pointer-events-auto absolute h-[52px] w-[52px]  -translate-x-1/2 -translate-y-1/2 sm:h-[62px] sm:w-[62px] lg:h-[75px] lg:w-[75px]"
                                        style={{left: `${x}%`, top: `${y}%`}}
                                    >
                                        <div
                                            className={`orbit-logo z-[250] flex  h-[50px] w-[50px] md:h-[75px] md:w-[75px] cursor-pointer items-center justify-center rounded-full border-2 bg-white shadow-sm transition-colors ${
                                                logo.index === active
                                                    ? "border-dashed border-[#1e9b81]"
                                                    : "border-[#E6E6E6]"
                                            }`}
                                            style={{
                                                animationDuration: `${r.duration}s`,
                                                animationDirection: r.direction === 1 ? "reverse" : "normal",
                                            }}
                                            onClick={() => setActive(logo.index)}
                                        >
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={45}
                                                height={45}
                                                className="z-[250] h-[40px] w-[40px] md:h-[60px] md:w-[60px] object-contain p-[3px]  "
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    <div className="relative z-10 flex items-center justify-center rounded-full border border-[#ddd] bg-white p-4 shadow-[0_0_50px_10.79px_rgba(249,211,37,0.2)] sm:p-6 lg:p-10">
                        <Image
                            className="relative h-[50px] w-[50px] object-contain sm:h-[65px] sm:w-[65px] lg:h-[110px] lg:w-[110px]"
                            src="/img/mid-circle-logo.svg"
                            alt="mid logo"
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