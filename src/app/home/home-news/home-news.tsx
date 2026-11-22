'use client';
import React from 'react';
import Titlesection from "@/src/app/viwes/shared/titlesection";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface DataType {
    img: string,
    title: string,
}

const newsdata: DataType[] = [
    {
        img: '/img/u9LArC2M18QwdnhOvgC9vm9y16Dhj4VoHiyEmc4l.jpg',
        title: 'دریافت گواهی‌ دانش‌بنیانی توسط یکی دیگر از شرکت‌های مرکز ...',
    },
    {
        img: '/img/c13mmkzYtCTkPZoOoa88e1PRzmcFX5lmjDqhEpx2.jpg',
        title: 'تولید امید و روایت‌گری حق؛ پاسخ اکوسیستم نوآوری به جنگ رو...',
    },
    {
        img: '/img/MRzdZb0MV0Gqd7VJQf2DNZ8zWPRcjBeLPdSmLwVX.jpg',
        title: 'گفت وگو با استراتژیست اتاق جنگ شناختی اشراق/ حضور 60 طلبه...',
    },
    {
        img: '/img/y3Vc09YqDQ77enhKlls2eUzWCQsNByaa753xmKcM.jpg',
        title: 'امت به‌مثابه فاعل راهبری در فقدان رهبر',
    },
    {
        img: '/img/Pw1fjn3oZb4RJmh1YKZmIBDWHLT9GV9unBRfkHal.jpg',
        title: 'ضرورت تجهیز جبهه مقاومت با قدرت رسانه‌های نوین از طریق تو...',
    },
    {
        img: '/img/pb7zNt8tqRAzAtcyvrw4Izu2RH4ZvHEClCvEpuLF.jpg',
        title: 'از جهان‌های موازی تا زبان مشترک با نسل نو',
    },
    {
        img: '/img/L3RwUEZ07lB9ZxVyj2CnWFOc9iDZm1zuLcHGqdqx.jpg',
        title: 'کار، هویت‌ساز و معنابخش زندگی؛ معرفی تکنیکی نوین برای طرا...',
    },
    {
        img: '/img/3wwvHliejv3h9mfFaVN8rcG0GLNRZ8l2l9WHBekw.jpg',
        title: 'توانمندسازی اقتصاد دیجیتال؛ تقویت نقش شرکت‌های خلاق و دان...',
    },
    {
        img: '/img/ZahytewJoZp5bOsUzsScMj2XWRPDxMVodLDO6WnC.jpg',
        title: 'بررسی روایت نوآورانه رسانه‌ای از احکام دختران در دهمین نش...',
    },
    {
        img: '/img/G0ecSAXowWA2sx4V4b103WMN9IzNR57ztfku40b7.jpg',
        title: 'سلسله وبینارهای آموزشی «عصر هوش مصنوعی» برگزار می‌شود',
    },
    {
        img: '/img/ilmBva6XZS0UZsUAr67qyGAAr8OKKCmKGvv0xwfz.jpg',
        title: 'قرآن کریم؛ بهترین راهنمای کسب‌وکار',
    },
    {
        img: '/img/fl6h49FmVNjwVVVjniFsXGHGyetdxeaQD7az6eRW.jpg',
        title: 'بازنمایی خلاق مفاهیم قرآنی با هوش مصنوعی/ معرفی تیم «طلبه...',
    },
    {
        img: '/img/wWki5MdwRd5pUlqY5WMIaPYrH2w0WZhJxJqwbcfr.jpg',
        title: 'وقتی فاطمیه به زبان بازی روایت می‌شود/ معرفی بازی پرونده‌...',
    },
    {
        img: '/img/hg9nBYURA4RusLfs4iXaVOerKncQL0JIWxW3XlqU.jpg',
        title: 'بازدید دانشجویان دانشگاه معارف از شعبه اصفهان مرکز نوآوری...',
    },
    {
        img: '/img/lfssnvtNyTB8O5nuw1tHSewxA9eZnTGMpF9dxbQr.jpg',
        title: 'ارائه 25 اثر تیم « طلبه Ai » در دومین گالری آثار هنری قرآ...',
    },
];

function HomeNews() {
    return (
        <div className={'grid grid-cols-12 lg:px-60 px-6      '}>
            <div className="col-span-12">
                <div className="flex justify-between  px-3">
                    <div className="">
                        <Titlesection title={'جدیدترین اخبار'}/>
                    </div>
                    <div className="group flex gap-1 justify-center cursor-pointer items-center">
                        <p className="text-[#373F47] text-[16px] font-[700]">
                            آرشیو اخبار
                        </p>
                        <div className="">
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                className="text-[16px] group-hover:mt-1 "
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-span-12  ">

                <div className="">
                    <Swiper
                        dir="rtl"
                        key="rtl-swiper"
                        // modules={[Navigation, Pagination, Autoplay]}

                        navigation
                        // pagination={{clickable: true}}
                        // autoplay={{delay: 3000, disableOnInteraction: false}}
                        loop
                        spaceBetween={25}

                        breakpoints={{
                            0: {slidesPerView: 1},
                            640: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                            1280: {slidesPerView: 4.2},
                        }}
                        className="pb-10"
                    >
                        {newsdata.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className=" border-1  cursor-pointer border-[#D3D3D3] rounded overflow-hidden  rounded-[20px]">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={300}
                                        height={200}
                                        className=" object-cover h-[170px] w-full rounded-[20px]"
                                    />
                                    <div className="p-3 pt-10">
                                        <p className="text-[16px] leading-8 min-h-[50px] line-clamp-2">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </div>


    );
}

export default HomeNews;