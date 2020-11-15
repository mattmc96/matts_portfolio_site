import React from 'react'


export default function Card() {
        return (

                <div className="content">
                    <div className="card">
                        <div className="card__side card__side--front">
                            {/* Front Content */}
                            <div className="card__cont">
                                <span className="blue">alert</span>
                                <span>(<span className="green">'Hello World!'</span>)</span>
                            </div>
                        </div>
                        <div className="card__side card__side--back">
                            {/* Back Content */}
                            <div className="card__cta">
                                <p><span className="purple">const</span> aboutMe <span className="cyan">=</span> {'{'}
                                    <br />
                                    <span className="space red">name</span>
                                    <span className="cyan">:</span> <span className="green">'Matt McCarthy'</span>,
                                    <br />
                                    <span className="space red">email</span>
                                    <span className="cyan">:</span> <span className="green">'mattmccarthy.dev@gmail.com'</span>',
                                    <br />
                                    <span className="space red">position</span>
                                    <span className="cyan">:</span>
                                    <span className="green">'back-end developer'</span>,
                                    <br />
                                    <span className="space red">website</span><span className="cyan">:</span> <span className="green">'mattsportfolio.dev'</span>
                                    <br />
                                    {'}'};
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
