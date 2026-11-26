"use client"
import React from 'react';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from "swiper/react";

type DataTypeKarizman = {
    img: string;
    title: string;
    StartTime: string;
    EndTime: string;
};

const karizmanData: DataTypeKarizman[] = [
    {
        img: '/img/B0hjpLIPvQUbOawVl6w7csHyNuDLnO7J2aWhoOHn_.png',
        title: 'خدمات خلاق',
        StartTime: 'از 08 آذر 1403',
        EndTime: ' تا 06 تیر 1404',
    },
    {
        img: '/img/p5BbSUizKU9s8cpJyYUk1deWHZdPkjuLwtoouXBo_.png',
        title: 'رویداد ایده‌پردازی در حوزه یاددهی و یادگیری',
        StartTime: 'از 20 دی 1403',
        EndTime: ' تا 31 اردیبهشت 1404',
    },
    {
        img: '/img/TsVKA99G6ObBGSApAzOHIiqd7xyB3YjYJ5YAa6pv_.png',
        title: 'دومین رویداد ملّی رشدآوند',
        StartTime: 'از 06 اسفند 1403',
        EndTime: 'تا 20 آذر 1404',
    },
    {
        img: '/img/4MasAsFClysCWU7pikcoblTvNQ9z3l16wyB0X7vZ_.png',
        title: 'دومین رویداد ملی نوآوری و ایده پردازی مهدوی',
        StartTime: 'از 17 اسفند 1401',
        EndTime: 'تا 27 اردیبهشت 1402',
    },
    {
        img: '/img/Id8JudeaottVBFO4KYkTe0riyzcurWmEo8PwOGi3_.png',
        title: 'تدبیرگران؛ رویداد شبیه سازی حل مساله',
        StartTime: 'از 01 تیر 1404',
        EndTime: 'تا 24 آبان 1404',
    },
    {
        img: '/img/yDxLkOmVQVc89nApHSIuYxksNO6afemqO2rv7wXQ_.png',
        title: 'رویداد تبادل فناوری اطلاعات',
        StartTime: 'از 01 اردیبهشت 1402',
        EndTime: ' تا 30 آبان 1402',
    },
    {
        img: '/img/m22kcCEI5LZ3XI01kemI13q78zZeyGljXvDbKUPa_.png',
        title: 'رویداد ایده پردازی سبک زندگی رضوی',
        StartTime: 'از 20 شهریور 1402',
        EndTime: ' تا 10 مهر 1402',
    },
];

function HomeEscapeKarizman() {
    return (
        <div className={'bg-[#fafafa] lg:py-4  '}>
            <div className="grid grid-cols-12  h-100 ">
                <div className="col-span-12 lg:col-span-4">

                    <div className="flex flex-col">
                        <div className="flex justify-center">
                            <Image className={'w-[149px] '} src={'/img/karizman-logo-new1.svg'} alt={'karizman_logo'}
                                   width={500} height={500}/>
                        </div>

                        <h1 className={'text-[#707070] mt-[18px] text-[16px] text-center'}>
                            رویدادهایی دوره‌ای
                            <br/>
                            به منظور تمرین و تجربه ایده‌ورزی و تیم‌سازی
                        </h1>
                        <div className="group flex gap-1 justify-center cursor-pointer items-center">
                            <p className="text-[#373F47] text-[18px] font-[700]">
                                ورود به کاریزنگار
                            </p>
                            <div>
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    className="text-[16px] group-hover:mt-1 "
                                />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div
                        className="flex  flex-col box-data bg-[linear-gradient(79.04deg,#F07168_0%,#01AFBA_100%)] ps-[30px]  rounded-[20px]    gap-10 py-6 ">
                        <h1 className={'font-[700] text-[16px] text-[#FFFFFF] '}>

                            رویدادهای ایده‌پردازی
                        </h1>


                        <div className="">


                            <Swiper
                                dir="rtl"
                                key="rtl-swiper"
                                navigation
                                loop
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 30
                                    },
                                    640: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 10
                                    },
                                    1024: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 15
                                    },
                                    1280: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 16
                                    },
                                }}
                                className="pb-10"
                            >

                                {
                                    karizmanData.map((item, index) => (
                                        <SwiperSlide className={'pt-10'} key={index}>
                                            <div className={'bg-white rounded-[20px] w-[390px] h-[213px] p-[21px] '}>

                                                <div className="flex gap-[5px]">
                                                    <div className="w-[120px] h-[12 0px] relative top-[-45px] ">
                                                        <Image
                                                            className={'w-[110px] h-[110px]  object-fill blur-sm  -hidden  rounded-[12px] '}
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={500} height={500}/>
                                                        <div className="absolute inset-0">

                                                            <Image
                                                                className={'w-[120px] h-[120px]    overflow-hidden  rounded-[12px] '}
                                                                src={item.img}
                                                                alt={item.title}
                                                                width={500} height={500}/>
                                                        </div>

                                                    </div>

                                                    <h1 className={'text-[#373F47] text-[16px]   font-[700]'}>
                                                        {item.title}
                                                    </h1>
                                                </div>
                                                <div className="w-full h-[1px] bg-[#D3D3D3] ">

                                                </div>

                                                <div className="px-2">


                                                    <h1 className={'flex text-[14px] justify-between bg-[#ffebee] text-[#ef5350] p-[14px] rounded-[10px]'}>
                                                        <span>{item.StartTime}</span>
                                                        <span>{item.EndTime}</span>
                                                    </h1>
                                                </div>


                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeEscapeKarizman;