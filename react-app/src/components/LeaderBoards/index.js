import React, { useState } from 'react'
import './boards.css'
function LeaderBoards() {

    //Booleans for page extensions binded with css is not working.
    const [loadBoolean, setloadBoolean] = useState(true)
    console.log("LEADERBOARD BOOL", loadBoolean)
    return (
        <>
            <div className={loadBoolean ? "containBoards" : "clickedcontainBoards"} style={{ color: 'white', backgroundColor: 'black' }}>

                <h1 style={{ color: 'white' }}> Today's Innovator's</h1>
                <h3> Recipe Leader Board</h3>

                <div className="u-w26of42 u-offset-l-w8of42 | u-w13of15@sm u-offset-l-w1of15@sm">
                    <div className="u-fit-w">
                        <div className="c-home-awards-line u-flex u-align-items-c t-text--sm u-bold u-color--gray | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">#</div>
                            <div className="u-w12of26 | u-w6of13@sm">Award</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Project</div>
                        </div>

                        <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">01</div>
                            <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Unspun</div>
                            <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                        </div>

                        <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">02</div>
                            <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site Of The Day</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Unspun</div>
                            <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                        </div>

                        <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">03</div>
                            <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Unspun</div>
                            <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                        </div>

                        <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">04</div>
                            <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Connect Homes</div>
                            <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                        </div>

                        <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                            <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">05</div>
                            <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site Of The Day</div>
                            <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Connect Homes</div>
                            <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                        </div>

                        <div className="c-home-awards-more" style={{ height: "0px" }}>

                            <div className="js-collapse">

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">06</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Connect Homes</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">07</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Mobile Excellence</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Connect Homes</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">08</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: FWA of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Connect Homes</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">09</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Decisive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">9</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Decisive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">10</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Decisive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">11</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Decisive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">12</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Webby Nomination: Employment</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Kanarys</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2020</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">13</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Kanarys</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">14</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Kanarys</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">15</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Kanarys</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">16</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">RappiPay</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">17</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">RappiPay</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">18</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Mobile of the Week</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">RappiPay</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">19</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">RappiPay</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">20</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">21</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">22</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Mobile Excellence</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">23</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: FWA of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">24</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">25</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Mindsparkle: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">26</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Disrupt</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">

                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">27</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Disrupt</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">28</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: FWA of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Disrupt</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">29</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Disrupt</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2019</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">30</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Rivian Automotive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">31</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Rivian Automotive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">32</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Rivian Automotive</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">33</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site Of The Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Humbert &amp; Poyet</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">34</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Humbert &amp; Poyet</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">35</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Humbert &amp; Poyet</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">36</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Year Nominee</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Humbert &amp; Poyet</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">37</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site Of The Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Grand Image</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">38</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Grand Image</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">39</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Grand Image</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">40</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Brontide</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">41</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Brontide</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">42</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Award: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Brontide</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">43</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Clarity</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">44</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Developer Award</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Clarity</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">45</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Award: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Clarity</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">46</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">47</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: FWA of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Oui Will</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">48</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Webby: Best eCommerce</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Amaiò Swim</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">49</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Webby: Best Visual Design Aesthetic</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Amaiò Swim</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2018</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">50</div>
                                    <div className="u-w12of26 | u-w6of13@sm">Awwwards: Site Of The Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Amaiò Swim</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">51</div>
                                    <div className="u-w12of26 | u-w6of13@sm">CSS Design Awards: Website of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Amaiò Swim</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">52</div>
                                    <div className="u-w12of26 | u-w6of13@sm">FWA: FWA of the Day</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">Amaiò Swim</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">2017</div>
                                </div>

                                <div className="c-home-awards-line c-home-awards-line--link u-flex u-align-items-c t-text--sm | u-align-items-s@sm">
                                    <div className="t-text--xs u-color--gray u-w2of26 | u-w3of13@sm">53</div>
                                    <div className="u-w12of26 | u-w6of13@sm">...</div>
                                    <div className="u-w10of26 | u-w5of13@sm u-text-right@sm">And Much More</div>
                                    <div className="u-w2of26 | u-w3of13@sm u-text-right | u-hide@sm">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="u-fit-w u-marg-t-xl u-text-center">
                        <button type="button" className="t-link--primary t-btn t-text--sm" onClick={() => setloadBoolean(!loadBoolean)}>
                            {loadBoolean ? <span>Load More</span> : <span>Load Less</span>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeaderBoards