import {Cards, Card} from 'react-cool-cards'

export default function About(){
    const settings = {
        width: '400px',
        height: 'max-content',
        margin: '20px',
        style: 'custom',
        theme: {
            color: 'black',
            type: 'square',
            fill: 'solid'
        }
    }
    return(
        <div className="about">
            <div className="main">
                <div className="hero" style={{backgroundImage: 'url(/img/about/hero.jpg)'}}>
                    <div className="head">Pacific
                    <br/>
                    Sparkles</div>
                    <p className="quote standard-content">"Soap is to the Body what Laughter is to the Soul…"</p>
                </div>
                <div className="start">
                    <h1 className="head">The Start of Something New.</h1>
                    <p className="standard-content">From a casual idea to creating something during the peak of lockdown 2020, to now selling  handcrafted organic soaps on Amazon and Flipkart, Pacific Sparkles was born  somewhere in the middle. We offer an array of aromatic and detoxifying soaps in beautiful  designs. Since our soaps are handmade, each ingredient is thoughtfully chosen to give  the best results.</p>
                </div>
                <Cards common={settings}>
                    <Card>
                        <div className="head">
                            Our Story.
                        </div>
                        <p className="standard-content">
                            After doing our share of extensive research, we meticulously crafted a variety of  soaps and gifted them to our family and friends on Diwali 2020. The response that we received  motivated us to dream bigger and better. Pacific Sparkles is about getting closer to our  roots as each and every soap that we make is unique when it comes to the ingredients  and benefits.
                        </p>
                    </Card>
                    <Card>
                        <div className="head">
                            Our Mission.
                        </div>
                        <p className="standard-content">
                            Skin care has been synonymous with self-care using only the natural ingredients. We at  Pacific Sparkles believe in crafting soaps using the finest organic ingredients for daily  grooming.
                        </p>
                    </Card>
                    <Card>
                        <div className="head">
                            Benefits.
                        </div>
                        <p className="standard-content">
                            Pacific Sparkles boasts of creating 6 different soaps each with exclusive benefits on skin  as our soaps are organic and enriched with essential oils. 
                        </p>
                        <ul>
                            <li>Soap for acne prone and sensitive skin</li>
                            <li>Rejuvenating and anti ageing benefits</li>
                            <li>Uplifts your mood and Detoxifies your skin</li>
                            <li>Protects from harmful UV rays</li>
                        </ul>
                    </Card>
                </Cards>
            </div>
        </div>
    )
}