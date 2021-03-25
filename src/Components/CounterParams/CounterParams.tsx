import React, { ChangeEvent } from 'react'

export type CounterParamsType = {
    onValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    minValue: number
    maxValue: number
    onInputClick: () => void
    setParams: () => void
    onBlurChange: () => void
    btnDisabled: boolean
}

const CounterParams = (props: CounterParamsType) => {

    const {
        onValueChange,
        minValue,
        maxValue,
        onInputClick,
        setParams,
        onBlurChange,
        btnDisabled
    }

    = props

    return (
        <>
            <div className='params__wrapper'>
                <div className='params__inner'>
                    <div className='params'>
                        <div className='params__body'>
                            <div className='params__min'>
                                <div className='params__min_title'>min value: </div>
                                <div className='params__min_value'>
                                    <input 
                                    onChange={onValueChange}
                                    onClick={onInputClick}
                                    onBlur={onBlurChange}
                                    type='number'
                                    value={minValue}
                                    name='min' />
                                </div>
                            </div>
                            <div className='params__max'>
                                <div className='params__max_title'>max value: </div>
                                <div className='params__max_value'>
                                    <input 
                                    onChange={onValueChange}
                                    onClick={onInputClick}
                                    onBlur={onBlurChange}
                                    value={maxValue}
                                    type='number'
                                    name='max' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button__bg'>
                        <div><button className='set' onClick={setParams} disabled={btnDisabled}>set</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterParams
