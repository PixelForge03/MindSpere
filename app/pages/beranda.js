import React from "react";
import Styles from "../style.module.css"

const Main = () => {
    return (
        <main className={Styles.main}>
            <div className={Styles.heroText}>
                <h1>
                    Mental Health,<br/>
                    kamu lebih kuat dari yang kamu pikir                    
                </h1>
                <p>
                Kesehatan mental bukanlah kelemahan, melainkan tanda keberanian untuk sembuh.Setiap langkah menuju pemulihan adalah langkah menuju kekuatan sejati. Jangan biarkan stigma atau rasa malu menghalangi perjalananmu. Setiap perjalanan dimulai dengan keberanian untuk memulai. Kamu tidak sendirian
                    <br/>Adanya website mental healt ini sangat
membantu, karena terkadang kekuatan
sejati muncul saat kamu menghadapi
tantangan yang tak terduga, dan kamu lebih kuat
dari yang kamu kira.”
                    <br />cutting-edge mental health website
                </p>
                <div className={Styles.start}>
                    <a href="">Start Now</a>
                </div>
            </div>
            <div className={Styles.heroImg}>
                <img src="/heroImg.PNG" alt="hero"/>
            </div>
        </main>
    );
}

export default Main