import React from 'react';
import vlogging_questions from './BlogQA'

const BlogInfo = () => {


    return (
        <>
            <h3 className='text-center text-bg-dark text-white p-2'>|| Vlog Related question & answer ||</h3>
            <div className='container-fluid' style={{ width: '90%', margin: '.3rem auto', height: '79vh', overflowY: 'scroll' }}>

                <div className='row'>

                    <div className='col-12'>
                        {
                            vlogging_questions.map((ele, ind) => {
                                return (
                                    <div className="accordion mb-1" id="accordionExample">
                                        <div
                                            className="accordion-item"
                                        >
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Que{ind + 1} )      {ele.question}
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Answer {ind + 1} )&nbsp;
                                                    {ele.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogInfo;