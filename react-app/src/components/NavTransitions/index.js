import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
// http://reactcommunity.org/react-transition-group/switch-transition
// https://codesandbox.io/s/l9m3zrj4lq?file=/src/components/Container.js:998-1443
import HomeNav from "./routes/Home"
import ProfileNav from "./routes/Profile"
import TrendingNav from "./routes/Trending"
import FavoritesNav from "./routes/Favorites"
import GramNav from "./routes/Gram"
import NewsNav from "./routes/News"
import ContactNav from "./routes/Contact"
const modes = ["out-in", "in-out"];


function NavTransitions() {
    const [mode, setmode] = useState("out-in")
    const [state, setstate] = useState(true)
    return (
        <>
            <div className="label">Mode:</div>

            <div className="main">
                <SwitchTransition mode={mode}>
                    <CSSTransition
                        key={state}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <section className="NavLinkRouter">
                            <Switch >
                                <Route exact path="/"><HomeNav /></Route>
                                <Route exact path="/t"><TrendingNav /></Route>
                                <Route exact path="/f"><FavoritesNav /></Route>
                                <Route exact path="/g"><GramNav /></Route>
                                <Route exact path="/n"><NewsNav /></Route>
                                <Route exact path="/c"><ContactNav /></Route>

                                <Route exact path="/p"><ProfileNav /></Route>
                            </Switch>

                        </section>
                    </CSSTransition>
                </SwitchTransition>
            </div>

        </>
    )
}
// const Wrapper = styled.div`
//   .fade-enter {
//     opacity: 0.01;
//   }

//   .fade-enter.fade-enter-active {
//     opacity: 1;
//     transition: opacity 300ms ease-in;
//   }

//   .fade-exit {
//     opacity: 1;
//   }

//   .fade-exit.fade-exit-active {
//     opacity: 0.01;
//     transition: opacity 300ms ease-in;
//   }

//   div.transition-group {
//     position: relative;
//   }

//   section.route-section {
//     position: absolute;
//     width: 100%;
//     top: 0;
//     left: 0;
//   }
// `

export default NavTransitions;