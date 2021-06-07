import React,{useState,useCallback} from 'react'
import ButtonComponent from './ChildCallBack.js/ButtonComponent'
import InputComponent from './ChildCallBack.js/InputComponent'
import Title from './ChildCallBack.js/Title'

function ParentCallBack() {
    const [age, setAge] = useState(25)
    const [salary,setSalary] = useState(5000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
            <h1>Parent component Call back</h1>
            <Title/>
            <InputComponent text="age" count={age}/>
            <ButtonComponent handleClick={incrementAge}>Increment Age</ButtonComponent>
            <InputComponent text="salary" count={salary}/>
            <ButtonComponent handleClick={incrementSalary}>Increment Salary</ButtonComponent>
        </div>
    )
}

export default ParentCallBack
