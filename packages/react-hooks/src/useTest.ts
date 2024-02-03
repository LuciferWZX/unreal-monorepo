import { useEffect } from "react";
interface IProps{
    str:string
    name:string
    age:number
}
const useTest = (props:IProps) => {
    useEffect(() => {
        console.log(props.str,props.name,props.age)
        console.log(1111111)
    }, []);
}
export default useTest