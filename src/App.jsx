import React, {useState} from "react";
import './App.css'

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState(0);
    const [deliveryFreq, setDeliveryFreq] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [comment, setComment] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [submit, setSubmit] = useState("");
    const handleReset = () => {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFreq},
    Opmerkingen: ${comment},
    Algemene voorwaarden: ${agreeToTerms}
    `);
        console.log(`Fruitmand bestelling - aardbeien: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
    }

    //const deliveryForm = () => {
    // const [formState, setFormState] = useState({
    //     firstname: '',
    //     lastname: '',
    //     age: '',
    //     zipcode: '',
    //     DeliveryFreq: '',
    //     deliveryTime: '',
    //     comment: '',
    //     agreeToTerms: '',
    //     submit: '',
    // })
    //
    //     function handleChange(event) {
    //         const changedFieldName = e.target.name;
    //         const newValue= event.target.type === "checkbox" ? event.target.checked : event.target.value;
    //
    //         setFormState({
    //             ...formState,
    //             [changedFieldName]: newValue,
    //         });
    //     }
    //
    // const handleSubmit= (e) => {
    //     e.preventDefault();
    //     console.log('form submitted: ', formState)
    //
    //     setFormState({
    //         firstname: e.target.value
    //     })
    //};


return (
    <>
        <span className="orderPage">
        <h1>Fruitmand bezorgservice</h1>
        <div className="strawberriesBox">
        <p>🍓 Aardbeien </p>
        <button
            type="button"
            className="strawberriesButton"
            disabled={strawberries === 0}
            onClick={() => setStrawberries(strawberries - 1)}
        >
            -
        </button>
        <p>{strawberries}</p>
        <button
            type="button"
            className="strawberriesButton"
            onClick={() => setStrawberries(strawberries + 1)}
        >
            +
            </button>
        </div>
        <div className="bananasBox">
        <p>🍌 Bananas</p>
        <button
            type="button"
            className="bananasButton"
            disabled={bananas === 0}
            onClick={() => setBananas(bananas - 1)}
        >
            -
        </button>
        <p>{bananas}</p>
        <button
            type="button"
            className="bananasButton"
            onClick={() => setBananas(bananas + 1)}
        >
            +
        </button>
        </div>
        <div className="appleBox">
        <p> 🍏 Apples</p>
        <button
            type="button"
            className="appleButton"
            disabled={apples === 0}
            onClick={() => setApples(apples - 1)}
        >
            -
        </button>
        <p>{apples}</p>
        <button
            type="button"
            className="appleButton"
            onClick={() => setApples(apples + 1)}
        >
            +
        </button>
        </div>
        <div className="kiwiBox">
        <p>🥝 kiwi's</p>
        <button
            type="button"
            className="kiwiButton"
            disabled={kiwis === 0}
            onClick={() => setKiwis(kiwis - 1)}
        >
            -
        </button>
        <p>{kiwis}</p>
        <button
            type="button"
            className="kiwiButton"
            onClick={() => setKiwis(kiwis + 1)}
        >
            +
        </button>
        </div>
        <button
            type="button"
            className="resetButton"
            onClick={handleReset}
        >
            reset
        </button>
            </span>
        <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="firstname-field">Voornaam</label>
                <input
                    name="firstname"
                    type="text"
                    id="firstname-field"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
            </section>
            <section>
                <label htmlFor="lastname-field">Achternaam</label>
                <input
                    name="lastname"
                    type="text"
                    id="lastname-field"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    />
            </section>
            <section>
                <label htmlFor="age-field">Leeftijd</label>
                <input
                    name="age"
                    type="text"
                    id="age-field"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="zipcode-field">Postcode</label>
                <input
                    name="zipcode"
                    type="text"
                    id="zipcode-field"
                    value={zipcode}
                    onChange={(e) =>setZipcode(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor=""></label>
            </section>
        </form>
    </>


)

}

export default App
