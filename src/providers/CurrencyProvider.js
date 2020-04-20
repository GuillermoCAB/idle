import React, {useState} from 'react'

const CurrencyContext = React.createContext()

const CurrencyProvider = (props) => {

    const [level, setLevel] = useState(13)
    const [gold, setGold] = useState(300)
    const [influence, setInfluence] = useState(100)
    const [coins, setCoins] = useState(0)

    return (
        <CurrencyContext.Provider
        value={{                
            level,
            gold,
            influence,
            coins,
            setLevel,
            setGold,
            setInfluence,
            setCoins
        }}>
            {props.children}
        </CurrencyContext.Provider>
    )
}

export {CurrencyProvider, CurrencyContext}