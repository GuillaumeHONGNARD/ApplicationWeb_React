import React from "react";


interface Props {
    startDate: string; // Date de début
    endDate: string; // Date de fin
    profit: number; // Bénéfice
}

export const Charts_Test = (props:Props) => {

    const chartData = {
        labels: [props.startDate, props.endDate],
        datasets: [
            {
                label: 'Taux de bénéfice',
                data: [null, props.profit], // Utilise null pour la première date si tu ne disposes pas de données de profit pour cette date
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };


    return(
        <div>
            {/*<Line type="line" data={chartData} />*/}
        </div>
    )

}