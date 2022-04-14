import React from "react";
import {ResponsiveAppBar} from "./ResponsiveAppBar";
import {useHref,useLinkClickHandler} from 'react-router-dom';

const StyledLink = styled("a",{color:"white"});

const Link = React.forwardRef(
    (
        {
            onClick,
            replace=false,
            state,
            target,
            to,
            rest
        },
        ref
        )=>{
            let href = useHref(to,
                {state,
                replace:false,
                target
            });
            let handleClick = useLinkClickHandler(to,
                {state,
                replace:false,
                target
            });
            return(
                <StyledLink 
                {...rest}
                href={href}
                onClick={(event)=>{
                    onClick?.(event);
                    if(!event.defaultPrevented){
                        handleClick(event);}}}
                        ref={ref}
                        target={target} />
            )
        }
    );
    
