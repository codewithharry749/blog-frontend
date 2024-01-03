import React from 'react'

const Degitalclock = () => {




    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    setInterval(() => {
        let a = new Date();
        let hour = a.getHours()%12;
        let minute = a.getMinutes();
        let seconds = a.getSeconds();
        let time
        let b;

        b = a.toLocaleDateString('en-US', options)
        time = hour + ":" + minute + ":" + seconds;
        document.getElementById("clock").innerHTML = time + " " + b;

    }, 1000);


    return (
        <div className=' container-fluid digital_clock'>
            <div className=' row' >
                <span id='clock'></span>
            </div>

        </div>
    )
}

export default Degitalclock;