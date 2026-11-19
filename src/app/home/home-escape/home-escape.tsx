import React from 'react';
import Titlesection from "@/src/app/viwes/shared/titlesection";
import HomeEscapeFanos from "@/src/app/home/home-escape/home-escape-fanos/home-escape-fanos";

function HomeEscape() {
    return (
        <div className={'mt-20 mb-250'}>
            <div className="flex justify-center">
                <Titlesection title={'گریزی به ارکان اشراق'}/>
            </div>

            <HomeEscapeFanos />

        </div>
    );
}

export default HomeEscape;
