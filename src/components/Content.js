import React, { useState } from 'react';

const Content = () => {
    const [highlightFirst, setHighlightFirst] = useState(false);
    const [highlightSecond, setHighlightSecond] = useState(false);

    return (
        <main>
            <p><strong>Освіта:</strong></p>
            <ul>
                <li>ЗСШФМП №12, м. Чернігів</li>
                <li>НТУУ "КПІ", м. Київ</li>
            </ul>

            <p><strong>Хобі:</strong></p>
            <ul>
                <li>Комп'ютерні ігри</li>
                <li>Теніс</li>
                <li>Футбол</li>
                <li>Колекціонування мініатюр</li>
            </ul>

            <p><strong>Улюблені фільми:</strong></p>
            <ol>
                <li>"Матриця", 1999</li>
                <li>"Темний лицар", 2008</li>
                <li>"Хороший, поганий, злий", 1966</li>
                <li>"Сталкер", 1979</li>
                <li>"Уцілілий", 2015</li>
            </ol>

            <p>
                Чернігів — одне з найстаріших міст України, розташоване на півночі країни на річці Десна. Воно має багатовікову історію і славиться своєю архітектурною та культурною спадщиною.
            </p>

            <p
                id="target-element"
                onClick={() => setHighlightFirst(!highlightFirst)}
                style={{
                    backgroundColor: highlightFirst ? 'yellow' : 'transparent',
                    color: highlightFirst ? 'blue' : 'inherit',
                    fontWeight: highlightFirst ? 'bold' : 'normal',
                    cursor: 'pointer',
                }}
            >
                Місто відоме своїми старовинними церквами та соборами, серед яких:
            </p>

            <ul
                onClick={() => setHighlightSecond(!highlightSecond)}
                style={{
                    backgroundColor: highlightSecond ? 'green' : 'transparent',
                    color: highlightSecond ? 'white' : 'inherit',
                    fontWeight: highlightSecond ? 'bold' : 'normal',
                    cursor: 'pointer',
                }}
            >
                <li>Спасо-Преображенський собор — один із найстаріших православних храмів Східної Європи, заснований у 11 столітті.</li>
                <li>Борисоглібський собор — пам'ятка давньоруської архітектури, побудована в 12 столітті.</li>
                <li>Троїцький монастир — один із найвизначніших монастирських комплексів України, заснований у 17 столітті.</li>
            </ul>

            <p>
                Чернігів також відомий своїми неймовірними парками та скверами, особливо Дитинець, історичний центр міста, де зосереджено багато археологічних та архітектурних пам'яток.
            </p>
        </main>
    );
};

export default Content;