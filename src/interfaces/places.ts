export interface PlacesResponse {
    place_id:     number;
    licence:      string;
    osm_type:     string;
    osm_id:       number;
    lat:          string;
    lon:          string;
    display_name: string;
    address:      Address;
    boundingbox:  string[];
}

export interface Address {
    house_number:     string;
    road:             string;
    city:             string;
    municipality:     string;
    county:           string;
    state_district:   string;
    state:            string;
    "ISO3166-2-lvl4": string;
    postcode:         string;
    country:          string;
    country_code:     string;
}

export interface Properties {
    accuracy: string;
}
