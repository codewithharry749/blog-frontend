import React from 'react'

const HomePage = () => {
    return (
        <div className='Home_page'>
            <div style={{
                width: '90%',
                margin: 'auto',
                marginTop: '30vh',

            }}>
                <p

                    style={{
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        fontWeight: '600',
                        // lineHeight: '40vh',

                        color: 'black'
                    }}
                >Welcome  <span style={{ color: 'green' }}>to our </span> blogging site</p>
                <p style={{
                    fontSize: '.8rem',
                    textAlign: 'center',
                    fontWeight: '600',

                    color: 'black'
                }}>
                    "All the things I love are what my business is all about." Martha Stewart.
                </p>
                <p style={{
                    fontSize: '.8rem',
                    textAlign: 'center',
                    fontWeight: '600',

                    color: 'black'
                }}>
                    "The currency of blogging is authenticity and trust"
                </p>
                <p style={{
                    fontSize: '.8rem',
                    textAlign: 'center',
                    fontWeight: '600',

                    color: 'black'
                }}>
                    "Content: there is no easy button." Scott Abel
                </p>
                <p style={{
                    fontSize: '.8rem',
                    textAlign: 'center',
                    fontWeight: '600',

                    color: 'black'
                }}>
                    "I'm just going to keep on blogging, and knitting, and hoping for the best!"
                </p>
            </div>
        </div>
    )
}

export default HomePage;