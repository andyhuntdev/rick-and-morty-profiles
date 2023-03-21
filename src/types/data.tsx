interface ILocation {
    name: string;
    dimension: string;
    residents: { id: string }[];
}

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: ILocation;
    location: ILocation;
    image: string;
    episode: { id: string; name: string }[];
    url: string;
    created: string;
}

interface IInfo {
    count: number;
    pages: number;
    prev: string | null;
    next: string | null;
}

export interface IRes {
    info: IInfo;
    results: ICharacter[];
}
