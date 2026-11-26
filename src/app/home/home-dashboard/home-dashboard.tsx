import Image from "next/image";
import "./home-dashboard.css";

type Service = { title: string; label: string; disabled?: boolean };
type Group = { logo: string; logoW: number; logoH: number; services: Service[] };

const groups: Group[] = [
    {
        logo: "هنری",
        logoW: 101,
        logoH: 40,
        services: [
            {title: "ریگار", label: "واحد تدوین"},
            {title: "دیریژنه", label: "استودیو"},
            {title: "خلاق مدیا", label: "رسانه"},
        ],
    },
    {
        logo: "خدمات",
        logoW: 121,
        logoH: 40,
        services: [
            {title: "صُفه", label: "اتاق گفت‌وگو"},
            {title: "کلاس", label: "تالار آموزشی"},
            {title: "پرچین", label: "سالن کنفرانس"},
        ],
    },
    {
        logo: "توسعه توان",
        logoW: 154,
        logoH: 36,
        services: [
            {title: "نارنج", label: "شبکه مشاوره"},
            {title: "ترنج", label: "کارگزاران", disabled: true},
            {title: "کوشک", label: "تور بازدید", disabled: true},
        ],
    },
];


export default function HomeDashboard() {
    return (
        <div className="grop  grid grid-cols-12 lg:mt-20 mt-10  xl:px-[250px] lg:px-[clamp(20px,0vw,250px)]  px-6 md:px-8 relative items-center    ">
            <div className="lg:col-span-3 col-span-12 cursor-pointer my-5 lg:my-0">
                <div className="flex justify-center items-center flex-col gap-4 lg:flex-row ">
                    <div
                        className="relative    justify-center  flex   flex-col items-center rounded-2xl    lg:h-100    ">
                        <div className="absolute bg-[#f8f8f8]   w-[84px] m-auto rounded-[20px] h-[40%] md:h-[80%] items-center  inset-0 z-[-10]"></div>
                        <h3 className="flex flex-col text-[20px]">
                            <span className="lg:text-[32px] font-700 text-[#18A1A1] mb-2 font-bold lg:mb-0 text-[20px]">پیشخوان</span>
                            <span className="m-0 p-0 text-[#18A1A1]  text-[19px] ">خدمات و سرویس ها</span>
                        </h3>

                        <div className="[.grop:hover_&]:w-[20%] my-3 h-[6px] w-full bg-[#F9D325] rounded-full"/>

                        <p className="m-0 pb-1 font-bold">رزرو کنید، استفاده کنید.</p>
                        <p className={'flex gap-[8px] items-center text-[16px]'}>
                            <span>110 54 311 025</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="#373F47">
                                <g clipPath="url(#clip0_158_2567)">
                                    <path
                                        d="M13 0.999644C13 0.734428 13.1053 0.480074 13.2929 0.292537C13.4804 0.105001 13.7348 -0.000356157 14 -0.000356157C16.6513 0.00255544 19.1931 1.05706 21.0678 2.93179C22.9426 4.80653 23.9971 7.34838 24 9.99965C24 10.2649 23.8946 10.5192 23.7071 10.7068C23.5196 10.8943 23.2652 10.9996 23 10.9996C22.7348 10.9996 22.4804 10.8943 22.2929 10.7068C22.1053 10.5192 22 10.2649 22 9.99965C21.9976 7.87865 21.154 5.8452 19.6542 4.34542C18.1544 2.84565 16.121 2.00203 14 1.99964C13.7348 1.99964 13.4804 1.89429 13.2929 1.70675C13.1053 1.51921 13 1.26486 13 0.999644ZM14 5.99965C15.0609 5.99965 16.0783 6.42107 16.8284 7.17122C17.5786 7.92136 18 8.93878 18 9.99965C18 10.2649 18.1053 10.5192 18.2929 10.7068C18.4804 10.8943 18.7348 10.9996 19 10.9996C19.2652 10.9996 19.5196 10.8943 19.7071 10.7068C19.8946 10.5192 20 10.2649 20 9.99965C19.9984 8.40884 19.3658 6.88363 18.2409 5.75876C17.116 4.63388 15.5908 4.00123 14 3.99965C13.7348 3.99965 13.4804 4.105 13.2929 4.29254C13.1053 4.48008 13 4.73443 13 4.99965C13 5.26486 13.1053 5.51922 13.2929 5.70675C13.4804 5.89429 13.7348 5.99965 14 5.99965ZM23.093 16.7386C23.6725 17.3198 23.9979 18.107 23.9979 18.9277C23.9979 19.7483 23.6725 20.5355 23.093 21.1167L22.183 22.1657C13.993 30.0067 -5.93702 10.0816 1.78299 1.86564L2.93299 0.865644C3.51476 0.302321 4.29492 -0.00930708 5.10469 -0.00182132C5.91446 0.00566445 6.68873 0.331662 7.25999 0.905644C7.29099 0.936644 9.14399 3.34365 9.14399 3.34365C9.69382 3.92127 9.99989 4.68857 9.99859 5.48605C9.99729 6.28352 9.6887 7.04982 9.13699 7.62565L7.97899 9.08165C8.61984 10.6388 9.56205 12.0539 10.7515 13.2457C11.9409 14.4376 13.3542 15.3827 14.91 16.0266L16.375 14.8617C16.9509 14.3104 17.7171 14.0021 18.5143 14.001C19.3115 13.9999 20.0785 14.306 20.656 14.8556C20.656 14.8556 23.062 16.7076 23.093 16.7386ZM21.717 18.1926C21.717 18.1926 19.324 16.3516 19.293 16.3206C19.087 16.1164 18.8086 16.0018 18.5185 16.0018C18.2284 16.0018 17.95 16.1164 17.744 16.3206C17.717 16.3486 15.7 17.9556 15.7 17.9556C15.5641 18.0638 15.4023 18.1348 15.2306 18.1614C15.059 18.1881 14.8833 18.1695 14.721 18.1076C12.7055 17.3572 10.8747 16.1824 9.35282 14.6627C7.83092 13.1431 6.65339 11.3141 5.89999 9.29965C5.83319 9.1351 5.81141 8.95574 5.83689 8.77999C5.86238 8.60424 5.9342 8.43844 6.04499 8.29965C6.04499 8.29965 7.65199 6.28165 7.67899 6.25565C7.88326 6.04963 7.99787 5.77126 7.99787 5.48115C7.99787 5.19103 7.88326 4.91266 7.67899 4.70665C7.64799 4.67665 5.80699 2.28164 5.80699 2.28164C5.59789 2.09415 5.32499 1.99374 5.04424 2.00099C4.76348 2.00824 4.49613 2.12261 4.29699 2.32064L3.14699 3.32065C-2.49502 10.1046 14.776 26.4177 20.721 20.7997L21.632 19.7497C21.8455 19.5519 21.9737 19.2789 21.9896 18.9884C22.0054 18.6978 21.9077 18.4125 21.717 18.1926Z"
                                        fill="#373F47"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_158_2567" x1="12.0195" y1="-0.00195313"
                                                    x2="12.0195" y2="23.9586" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#27BDBC"></stop>
                                        <stop offset="1" stopColor="#27BDBC" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_158_2567">
                                        <rect width="24" height="24" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </p>

                    </div>


                </div>
            </div>
            <div className="lg:col-span-9 col-span-12">

                <div className="flex flex-col justify-between md:px-16 gap-3 lg:gap-12 ">
                    {
                        groups.map((item, index) => (
                            <div key={index}>

                                <div
                                    className="grid grid-cols-12   shadow-[10px_20px_20px_rgba(193,193,193,0.2)] p-[41px] lg:p-[21px] lg:pb-[30px] rounded-[20px] items-center gap-[14px]">

                                    <div className="col-span-12 lg:col-span-3">
                                        <div className="flex items-center justify-center ">

                                            <svg
                                                className={'relative'}

                                                xmlns="http://www.w3.org/2000/svg"
                                                width="80"
                                                height="80"
                                                viewBox="28.5 -0.5 41 24"
                                                fill="none"
                                            >
                                                <circle cx="38" cy="14" r="9" fill="#F9D325"/>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M66.5425 0.229679C66.8126 0.520565 66.7958 0.97534 66.5049 1.24545C62.3699 5.0851 55.2605 8.2152 52.2437 9.30127C51.8702 9.43572 51.4584 9.24195 51.3239 8.86846C51.1895 8.49497 51.3833 8.0832 51.7567 7.94874C54.7295 6.87856 61.6118 3.82741 65.5267 0.192058C65.8176 -0.0780504 66.2724 -0.061207 66.5425 0.229679Z"
                                                    fill="#F9D325"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M68.6834 16.8464C68.8153 17.2208 68.6186 17.6312 68.2442 17.763C62.9216 19.6369 55.1537 19.6748 51.954 19.4688C51.5578 19.4432 51.2574 19.1014 51.2829 18.7053C51.3084 18.3092 51.6502 18.0087 52.0464 18.0342C55.1993 18.2373 62.7274 18.1813 67.7668 16.4071C68.1412 16.2753 68.5516 16.472 68.6834 16.8464Z"
                                                    fill="#F9D325"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M64.4724 9.85946C64.6701 10.2037 64.5512 10.643 64.207 10.8407C60.8369 12.7759 55.4424 13.8926 53.1903 14.2134C52.7973 14.2693 52.4334 13.9961 52.3774 13.6031C52.3214 13.2102 52.5946 12.8462 52.9876 12.7902C55.2042 12.4745 60.37 11.3863 63.4912 9.59408C63.8354 9.39641 64.2747 9.51523 64.4724 9.85946Z"
                                                    fill="#F9D325"
                                                />
                                            </svg>

                                            <h1 className={'text-[20px] font-[700]   right-[70px]'}>
                                                {item.logo}
                                            </h1>
                                        </div>
                                    </div>
                                    {
                                        item.services.map((service, i) => (
                                            <div className="col-span-4 lg:col-span-3" key={i}>
                                                <div
                                                    className="box h-[90px] md:h-[91px]   px-[21px] flex items-center justify-center rounded-2xl relative border-transparent"
                                                >
                                                    <h1 className="text-[#27BDBC] md:text-[20px] text-[18px] font-[700] relative z-50 text-center">
                                                        {service.title}
                                                    </h1>
                                                    <button
                                                        className="bg-[#27BDBC] text-white rounded-[19px] min-w-[75px] md:min-w-[70px] p-[5px] px-0  text-center  md:p-2 text-[12px] md:text-[14px] md:bottom-[-25%] bottom-[-20%] absolute"
                                                    >
                                                        {service.label}
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>


                            </div>
                        ))
                    }
                </div>


            </div>


        </div>
    );
}