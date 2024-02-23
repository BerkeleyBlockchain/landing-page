import React from 'react';
import styles from './Memorial.module.sass';

const MemorialPage = () => {
    return (
        <div className={styles.memorial}>
            <div className={styles.content}>
                <h2>In memory of</h2>
                <h1 style={{ fontFamily: "'Space Mono', monospace", color: 'white', fontWeight: 300}}>Anthony DiPrinzio</h1>
                <p className="years" style={{ fontFamily: "'Space Mono', monospace", marginTop: 0}}>1996-2024</p>
                <div className='anthony-desc'>
                <p>
                    As a former President and steadfast pillar of our community, Anthony
                    DiPrinzio left an indelible mark on Blockchain at Berkeley. His commitment to
                    unity and growth during pivotal times helped shape the foundation of our
                    organization. Anthony continued to support and inspire us through his work
                    with Aleo and beyond, embodying the spirit of collaboration that defines us.
                </p>
                <p>
                    Honoring Anthony's legacy, his family encourages donations to Blockchain
                    at Berkeley in lieu of flowers. We are establishing the Anthony DiPrinzio
                    Memorial Fund to continue his vision of bringing people together and
                    fostering innovation in the blockchain space.
                </p>
                <p>
                    To celebrate Anthony's life and contribute to the cause he held dear, please
                    make a donation <a href="https://diprinzio.fund" className="donation-link" target='_blank' style={{textDecoration: "underline", color: 'white'}}>here</a>.
                </p>
                <p>
                    We remember Anthony for his passion, leadership, and the profound impact
                    he made on us all.
                </p>
                </div>
            </div>
        </div>
    );
};

export default MemorialPage;