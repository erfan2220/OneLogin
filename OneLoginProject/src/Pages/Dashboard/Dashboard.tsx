import Links from "../../Components/Links/Links.tsx";

const boxes =
    [
        {
            id:1,
            name:"Google",
            url:"./Login/eye.svg",
        },
        {
            id:1,
            name:"Google",
            url:"./Login/eye.svg",
        },
        {
            id:1,
            name:"Google",
            url:"./Login/eye.svg",
        }
    ]



const Dashboard = () => {
    return (
        <div className="dashboardContainer bg-[#f7f9fa] h-[100vh] flex flex-row gap-[20px] p-[20px]">
            {
                boxes.map((item)=>
                    (
                    <Links key={item.id} url={item.url} name={item.name}/>
                    ))
            }

        </div>
    );
};

export default Dashboard;