import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
    query getCharacters($currentPage: Int) {
        characters(page: $currentPage) {
            info {
                count
                pages
            }
            results {
                id
                name
                image
                gender
                status
                species
                origin {
                    name
                    dimension
                    residents {
                        id
                    }
                }
                location {
                    name
                    dimension
                    residents {
                        id
                    }
                }
                episode {
                    id
                    name
                }
            }
        }
    }
`;
