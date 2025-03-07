import {useState,useEffect} from "react"



export const useObserver=(el)=>{
    const [isVisible,setIsVisible] = useState(false);


    const observeCard=(entries)=>{
        // console.log(entries)
        if(entries[0].isIntersecting){
            console.log("element spotted!");
            setIsVisible(true)
        }
    }
    let observer = new IntersectionObserver(observeCard,{threshold:.05})
   


    useEffect(()=>{
        if(el.current){
                observer.observe(el.current);
        }
    },)


    return isVisible;
}