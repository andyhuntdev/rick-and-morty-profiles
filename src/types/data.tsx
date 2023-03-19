interface ILocation {
    name: string;
    url: string;
}

export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: ILocation,
    location: ILocation,
    image: string,
    episode: string[],
    url: string,
    created: string,
}

interface IInfo {
    count: number,
    pages: number,
    prev: string | null,
    next: string | null,
}

export interface IRes {
    info: IInfo,
    results: ICharacter[],
}