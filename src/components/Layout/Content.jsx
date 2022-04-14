import React,{useState} from "react";
import { UseFormGetValues ,useForm,FormProvider} from "react-hook-form";
import Test from "../contexts/Test";

export default function MainSection(){
    const [data,setData] = useState({
    })
    const methods = useForm();
    const { register, handleSubmit } = methods;
    return(
       
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit((data) => console.log(data))}>
                <label>Test</label>
                <input {...register("test", { required: true })} />
                <label>Nested Input</label>
                <Test />
                <input type="submit" />
              </form>
            </FormProvider>
    )
}