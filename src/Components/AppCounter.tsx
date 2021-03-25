import React, { ChangeEvent, useEffect } from 'react'
import CounterParams from './CounterParams/CounterParams'
import Counter from './Counter/Counter'

const AppCounter = () => {

    const [counter, setCounter] = React.useState<number>(10)
    const [minValue, setMinValue] = React.useState<number>(10)
    const [maxValue, setMaxValue] = React.useState<number>(25)
    const [editMode, setEditMode] = React.useState<boolean>(false)
    const [valueWasChanged, setValueChanged] = React.useState<boolean>(false)
    const [btnDisabled, setBtnDisabled] = React.useState<boolean>(false)

    useEffect(() => {
        checkOnDiff()
    }, [minValue, maxValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])


    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.name === 'min'){
            setMinValue(Number(e.currentTarget.value))
            !valueWasChanged && setValueChanged(true)
        } else {
            setMaxValue(Number(e.currentTarget.value))
            !valueWasChanged && setValueChanged(true)
        }
    }

    const onInputClick = () => {
        if(!editMode){
            setEditMode(true)
            console.log('edit mode')
        }
    }

    const increaseCounter = () => {
        if(counter < maxValue){
            setCounter(counter + 1)
        }
    }

    const setParams = () => {
        setCounter(minValue)
        setEditMode(false)
        setValueChanged(false)
    }

    const resetCounter = () => {
        setCounter(minValue)
    }

    const onBlurChange = () => {
        if(!valueWasChanged){
            setEditMode(false)
        }
    }

    const checkOnDiff = () => {
        if(minValue > maxValue){
            setBtnDisabled(true)
        } else {
            btnDisabled && setBtnDisabled(false) 
        }
    }


    return (
        <>
           <div className='app__wrapper'>
                <div className='app__inner'>
                    <CounterParams
                        onValueChange={onValueChange}
                        minValue={minValue}
                        maxValue={maxValue}
                        onInputClick={onInputClick}
                        setParams={setParams}
                        onBlurChange={onBlurChange}
                        btnDisabled={btnDisabled}
                    />
                    <Counter
                        increaseCounter={increaseCounter}
                        counter={counter}
                        resetCounter={resetCounter}
                        editMode={editMode}
                     />
                </div>
            </div>  
        </>
    )
}

export default AppCounter
