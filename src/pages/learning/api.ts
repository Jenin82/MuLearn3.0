import axios, { AxiosResponse } from "axios";
import { publicGateway } from "../../services/apiGateways";

export const getIGs = async () => {
    try {
        const response: AxiosResponse =
            await axios
                .get("https://dev.mulearn.org/api/v1/public/lc-list", {
                    // ig_id: id,
                    // district_id: districtId
                });
        return response.data;
    }
    catch (error) {
        console.log(error)
        return error
    }
};

export const getDistricts = async () => {
    try {
        const response: AxiosResponse =
            await publicGateway
                .post("api/v1/register/district/list/", {
                    state: "44c63af8-8747-43d1-8402-ba79215d4bed"
                });
        return response?.data?.response?.districts;
    }
    catch (error) {
        console.log(error)
        return error
    }
};