import axios from "axios";

const URL = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search'

const options = {
  params: {
    domain: 'AE',
    sort_order: 'REVIEW',
    locale: 'en_GB',
    checkout_date: '2023-09-27',
    region_id: '2872',
    adults_number: '1',
    checkin_date: '2023-09-26',
    // available_filter: 'SHOW_AVAILABLE_ONLY',
    // meal_plan: 'FREE_BREAKFAST',
    // guest_rating_min: '8',
    // price_min: '10',
    // page_number: '1',
    // children_ages: '4,0,15',
    // amenities: 'WIFI,PARKING',
    // price_max: '500',
    // lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
    // payment_type: 'PAY_LATER,FREE_CANCELLATION',
    // star_rating_ids: '3,4,5'
  },
  headers: {
    'X-RapidAPI-Key': '71e999e23emsh3f810c50f04bc1bp186b22jsn42c396844562',
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
    'Access-Control-Allow-Origin': '*'
  },
};

export const getPlacesData = async () => {
  try {
    const { data } = await axios.get(URL, options);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
