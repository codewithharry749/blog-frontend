import React, { useEffect, useState } from 'react'

const Setting = () => {
    const [check, setCheck] = useState(false)
    const [set, setA] = useState()



    const colorArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let a = '#';
    const generatecolor = () => {

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * 16);
            const value = colorArray[index];

            a += value;

        }
        setA(a)
        // document.body.style.backgroundColor = a;

        a = '#'
    }

    return (
        <div className='setting container-fluid' >
            <div className='row'>
                <div className='col-6'>
                    <p style={{ fontSize: '1.2rem', textAlign: 'center', color: 'white' }}>theme setting</p>
                </div>
                <div className='col-6'
                    style={{ textAlign: 'center', width: '100px', marginLeft: '10vh' }}
                >
                    {
                        check ?

                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={() => {
                                    document.body.style.backgroundColor = `${set}`
                                    setCheck(!check)
                                    generatecolor()
                                }}
                                    style={{ cursor: 'pointer', color: 'white' }}
                                    type="checkbox" role="switch" id="flexSwitchCheckChecked" />

                            </div> :
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={() => {
                                    document.body.style.backgroundColor = `${set}`
                                    setCheck(check)
                                    generatecolor()
                                }}
                                    style={{ cursor: 'pointer' }}
                                    type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            </div>
                    }

                </div>
                <hr style={{ color: 'blue', height: '2px' }} />
            </div>

            <div className='row'>

            </div>

        </div>
    )
}

export default Setting;