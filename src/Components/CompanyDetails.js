import React from "react"

const CompanyDetails = () => {
    return (
        <div className=" flex flex-col mt-5 bg-gray-200
        sm:flex sm:flex-row">
            <div className="grid-cols-4 pt-5 mx-auto
            sm:grid-cols-1">
                <h2 className="text-2xl font-bold">Swiggy</h2>
                <p>©2025 Swiggy Limited</p>
            </div>
            <div className=" mr-auto">
                <table><tbody>
                    <tr className="m-auto p-5">
                        <th className="m-auto p-0
                        md:-5
                        lg:p-5">Company</th>
                        <th className="m-auto p-0
                        md:-5
                        lg:p-5">Contact Us</th>
                        <th className="m-auto p-0
                        md:-5
                        lg:p-5">Available In:</th>
                        <th className="m-auto p-0
                        md:-5
                        lg:p-5">Life at Swiggy</th>
                    </tr>
                    <tr>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">About Us</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Help & Support</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">bangalore</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Explore with Swiggy</td>
                    </tr>
                    <tr>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Swiggy Corporate</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Partner with us</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">gurgaon</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Swiggy News</td>
                    </tr>
                    <tr>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Careers</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Ride with us</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">hyderabad</td>
                        <td className="m-auto p-0 text-center
                        md:p-5
                        lg:p-5">Snackables</td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    )
};

export default CompanyDetails ;