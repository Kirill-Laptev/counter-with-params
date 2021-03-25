import React from 'react'

export type CounterPropsType = {
    increaseCounter: () => void
    counter: number
    resetCounter: () => void
    editMode: boolean
}

const Counter = (props: CounterPropsType) => {

    const {
        increaseCounter,
        counter,
        resetCounter,
        editMode
    } 
    
    = props

    return (
        <>
            <div className='counter__wrapper'>
                <div className='counter__inner'>
                    <div className='counter'>
                        <div className='counter__body'>
                            <div className='counter__content'>
                                {editMode
                                ? <div className='counter__info'>Enter values and press "Set"</div>
                                : <div className='counter__view'>{counter}</div>}
                                </div>
                        </div>
                    </div>
                    <div className='buttons__bg'>
                        <div><button className='increase' onClick={increaseCounter}>increase</button></div>
                        <div><button className='reset' onClick={resetCounter}>reset</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
