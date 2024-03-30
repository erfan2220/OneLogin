//@ts-nocheck


const Links = ({url,name}) => {
    return (
        <div className="bg-white flex flex-col
          items-center h-fit w-[150px] rounded-sm">


            <div className="logoContainer flex items-center justify-center
            bg-white border-b-[1px] border-gray-400
            py-[10px] px-[20px]">
                <img src={url} alt="" className="w-[24px] flex "/>
            </div>

            <span className="bg-white py-[10px] px-[20px]">{name}</span>


        </div>
    );
};

export default Links;