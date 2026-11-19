import React from 'react';
import Image from "next/image";

function HomeBanner() {
    return (
        <div
            className="bg-[linear-gradient(263.23deg,rgba(39,189,188,0.14)_0%,rgba(249,211,37,0.14)_100%)]       px-6 md:px-16 lg:px-[465px] relative">

            <div className="absolute right-0 z-0    top-0 ">
                <Image width={350} height={350} className="w-full  " src="/img/subtract.svg" alt="title-top"/>
            </div>


            <div className="flex justify-center  py-10">
                <Image width={500} height={400} className="h-auto w-auto z-5" src="/img/title-top.svg" alt="title-top"/>
            </div>


            <div className="grid grid-cols-12 gap-2 mt-6 z-50 lg:ps-10 relative">
                <div className="col-span-7">
                    <div className="flex justify-end ">
                        <p className={'text-[16px]   text-justify leading-20 text-[#74727f]    '}>
                            دفتر تبلیغات اسلامی حوزه علمیه قم در مسیر توسعه فعالیت‌های فرهنگی و تبلیغی و به منظور
                            شناسایی،
                            حمایت و شبکه سازی خلاقیت‌ها و نوآوری‌های فرهنگی، مبادرت به تأسیس خانه خلاق و نوآوری اشراق
                            نموده
                            است. در این خانه، ایده‌های خلاق و نوآورانه که قابلیت ترویج ارزش‌های فرهنگی به صورت تاب‌آور
                            را
                            داشته باشد پذیرش شده و از طریق حمایت‌های آموزشی، مشاوره‌ای، امکاناتی و مادی سعی می‌شود
                            شرایطی
                            فراهم آید که ایده‌های پذیرش شده به بلوغ رسیده و بتوانند در قامت یک خدمت یا محصول فرهنگی در
                            گستره‌ی جامعه‌ی اسلامی زمینه ساز نشر و توسعه ارزش‌های فرهنگی و دینی بشوند.
                        </p>
                    </div>

                    <div className="grid  grid-cols-12 lg:flex  gap-5  ">
                        <div className="col-span-6">
                            <button
                                className="group relative flex h-[50px] w-auto min-w-[168px] cursor-pointer items-center justify-between
         rounded-[15px] border-none bg-[linear-gradient(85.33deg,#27BDBC_0%,#18A2A1_100%)]
         py-3 ps-[25px] pe-3 mt-3 text-[18px] text-white
         shadow-[0_8px_32px_0_transparent]
         transition-all duration-1000
         hover:justify-center
         hover:shadow-[0_8px_32px_0_rgba(24,162,161,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]"
                            >
  <span className="px-2 transition-all duration-1000 font-[800]">
    بیشتر بدانید
  </span>
                                {/*<FontAwesomeIco icon={faArrowLeft}*/}
                                {/*    className="fa-solid fa-arrow-left flex size-[45px] cursor-pointer items-center justify-center rounded-[15px] bg-white text-[20px] text-[#2fbdbc]" />*/}
                            </button>
                        </div>
                        <div className="col-span-6">
                            <div
                                className="flex  text-center  mt-3   cursor-pointer   gap-4">
                                <svg className="bg-[#F9D325] rounded-[15px]  w-[48px] p-[15px] h-[48px]"
                                     xmlns="http://www.w3.org/2000/svg" width="15"
                                     height="18"
                                     viewBox="0 0 15 18" fill="none">
                                    <path
                                        d="M13.369 5.97677L6.2155 0.731271C5.65677 0.322135 4.99566 0.0757051 4.30545 0.0192981C3.61524 -0.037109 2.92289 0.0987095 2.30514 0.411699C1.6874 0.724688 1.16838 1.20262 0.805636 1.79253C0.442887 2.38243 0.250571 3.06126 0.250005 3.75377V14.25C0.248927 14.9432 0.440238 15.6231 0.802641 16.214C1.16505 16.8049 1.68432 17.2837 2.30267 17.597C2.92102 17.9103 3.61419 18.0458 4.30501 17.9885C4.99583 17.9312 5.6572 17.6834 6.2155 17.2725L13.369 12.027C13.8437 11.6787 14.2296 11.2235 14.4957 10.6982C14.7617 10.173 14.9003 9.59253 14.9003 9.00377C14.9003 8.41501 14.7617 7.83452 14.4957 7.30929C14.2296 6.78406 13.8437 6.32886 13.369 5.98052V5.97677Z"
                                        fill="currentColor"/>
                                </svg>
                                <button className="fw-bold text-[#373F47]">
                                    ویدیو معرفی
                                </button>

                            </div>
                        </div>



                    </div>
                    <div className="my-5">
                        <a
                            href="https://creativehousenet.ir/web/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-1 bg-white rounded-[16px] max-w-[290px] shadow-[2px_2px_4px_rgba(193,193,193,0.3)]"
                        >
                            <Image
                                width={49}
                                height={48}
                                className="h-[48px] w-[49px] object-contain"
                                src="/img/creative-houses.png"
                                alt="خانه‌های خلاق و نوآوری ایران"
                            />

                            <div className="mr-[14px] leading-[24px] font-bold">
                <span className="block text-[16px] text-[#373F47]">
                    آشنایی با
                </span>
                                <span className="block text-[16px] text-[#01A740]">
                    خانه‌های خلاق و نوآوری ایران
                </span>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="col-span-5">
                    <div className="flex justify-center">
                        <Image width={260} height={260} className="h-auto w-auto  " src="/img/logo-banner.svg"
                               alt="title-top"/>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HomeBanner;