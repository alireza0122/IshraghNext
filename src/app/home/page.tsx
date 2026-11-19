import React from 'react';
import HomeBanner from "@/src/app/home/home-banner/home-banner";
import HomePillars from "@/src/app/home/home-pillars/home-pillars";
import HomeNews from "@/src/app/home/home-news/home-news";
import HomeDashboard from "@/src/app/home/home-dashboard/home-dashboard";
import HomeAmar from "@/src/app/home/home-amar/home-amar";
import HomeEscape from "@/src/app/home/home-escape/home-escape";

function Home() {
    return (
        <div>
            <HomeBanner/>


            <HomePillars/>
            <HomeNews />
            <HomeDashboard />
            <HomeAmar />
            <HomeEscape />
        </div>
    );
}

export default Home;
