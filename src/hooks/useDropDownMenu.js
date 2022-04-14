import {useRef,useState,useEffect} from 'react';

export const DropDownMenu = () =>{
    const dropdownRef = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);


    useEffect(()=>{
        const pageClickEvent = (e) =>{
            console.log(e);
        };

        if (isActive){
            window.addEventListener('click',pageClickEvent);
        }
        return () =>{
            window.removeEventListener('click',pageClickEvent);
        }
    },
    [isActive])


    return(
        <div>
        </div>
    )
}