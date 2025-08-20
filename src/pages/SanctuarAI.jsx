import {ArrowLeft} from "lucide-react";

export const SanctuarAI = () => {
    return (
        <div className="container mx-auto max-w-5xl relative">
            <div className=" py-20  ">
                <div className="items-center flex border border-primary bg-primary rounded-lg w-max hover:scale-105 transition-all duration-300">
                    <ArrowLeft className="size-7"/>
                    <a href=""
                       className=" px-5 py-3 rounded-full font-medium text-lg ">
                        Go Back</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  items-center py-10">
                    <div >
                        <h1 className="text-start text-5xl font-bold ">SanctuarAI</h1>
                    </div>


                    <div className=" grid grid-cols-1 gap-6">
                        slider will be here
                    </div>
                </div>

            </div>
        </div>

    )
}