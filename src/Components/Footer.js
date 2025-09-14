import CityWithOnlineFood from "./CityWithOnlineFood";
import CompanyDetails from "./CompanyDetails";

const Footer = () => {
    return (
        <div id = "footer" className="bg-white ">
            <h3 className="font-bold text-2xl my-6 p-4 text-white bg-black ">For better experience,download the Swiggy app now</h3>
            <div className=" m-auto mt-3" id="city with online food delivery">
                <h3 className="font-bold text-2xl ">Cities with food delivery</h3>
                <CityWithOnlineFood />
            </div>
            <div className=" m-auto mt-3" id="city with online groceries delivery">
                <h3 className="font-bold text-2xl ">Cities with groceries delivery</h3>
                <CityWithOnlineFood />
            </div>
            <div id="Company-Details">
                <CompanyDetails />
            </div>
        </div>
    )
};

export default Footer ;