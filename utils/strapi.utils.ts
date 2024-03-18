import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route: string) {
    const url = `${BASE_URL}/api/${route}`;

    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (err) {
        console.log(err);
        throw new Error(`Could not fetch data from ${url}`);
    }
}

export function processHomeData(data: any) {
    return {
        src: BASE_URL + data.attributes?.Logo?.data?.attributes?.url,
        alt: data.attributes?.Logo?.data?.attributes?.alternativeText,
        id: data.attributes?.Logo?.data?.id,
    }
}

export function processFlyBlockData(data: any) {
    const FlyBlockData = data.map((item: any) => ({
        ...item.attributes,
        id: item.id,
        airlineName: item.attributes?.Airline?.data?.attributes?.Name,
        airlineLogo: BASE_URL + item.attributes?.Airline?.data?.attributes?.Logo?.data?.attributes?.url,
        countryName: item.attributes?.Country?.data?.attributes?.Name,
        countryFlag: BASE_URL + item.attributes?.Country?.data?.attributes?.Flag?.data?.attributes?.url,
    }));

    FlyBlockData.sort(
        (a: any, z: any) => +new Date(z.Date) - +new Date(a.Date)
    );

    return FlyBlockData;
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
}