// @ts-nocheck

import { FETCH_CHARACTERS_QUERY } from '../api';
import { GraphQLError } from 'graphql';

export const SinglePageChatacters = {
  request: {
    query: FETCH_CHARACTERS_QUERY,
    variables: {
      page: 1,
      filterName: ''
    }
  },
  result: {
    data: {
      characters: {
        results: [
          {
            name: 'Rick Sanchez',
            id: '1',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Morty Smith',
            id: '2',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Summer Smith',
            id: '3',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Beth Smith',
            id: '4',
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Jerry Smith',
            id: '5',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Abadango Cluster Princess',
            id: '6',
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            status: 'Alive',
            location: {
              name: 'Abadango'
            }
          },
          {
            name: 'Abradolf Lincler',
            id: '7',
            image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
            status: 'unknown',
            location: {
              name: 'Testicle Monster Dimension'
            }
          },
          {
            name: 'Adjudicator Rick',
            id: '8',
            image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
            status: 'Dead',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Agency Director',
            id: '9',
            image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alan Rails',
            id: '10',
            image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
            status: 'Dead',
            location: {
              name: "Worldender's lair"
            }
          },
          {
            name: 'Albert Einstein',
            id: '11',
            image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alexander',
            id: '12',
            image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
            status: 'Dead',
            location: {
              name: 'Anatomy Park'
            }
          },
          {
            name: 'Alien Googah',
            id: '13',
            image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
            status: 'unknown',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alien Morty',
            id: '14',
            image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Alien Rick',
            id: '15',
            image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Amish Cyborg',
            id: '16',
            image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Annie',
            id: '17',
            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
            status: 'Alive',
            location: {
              name: 'Anatomy Park'
            }
          },
          {
            name: 'Antenna Morty',
            id: '18',
            image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Antenna Rick',
            id: '19',
            image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
            status: 'unknown',
            location: {
              name: 'unknown'
            }
          },
          {
            name: 'Ants in my Eyes Johnson',
            id: '20',
            image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
            status: 'unknown',
            location: {
              name: 'Interdimensional Cable'
            }
          }
        ],
        info: {
          count: 826,
          next: 2,
          prev: null,
          pages: 42
        }
      }
    }
  }
};

export const EmptyListWithError = {
  errors: [new GraphQLError({ message: '404: Not Found' })],
  request: {
    query: FETCH_CHARACTERS_QUERY,
    variables: {
      page: 1,
      filterName: 'some random query'
    }
  },
  result: {
    data: {
      characters: null
    }
  }
};

export const DoublePageCharacters = {
  request: {
    query: FETCH_CHARACTERS_QUERY,
    variables: {
      page: 1,
      filterName: ''
    }
  },
  result: {
    data: {
      characters: {
        results: [
          {
            name: 'Rick Sanchez',
            id: '1',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Morty Smith',
            id: '2',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Summer Smith',
            id: '3',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Beth Smith',
            id: '4',
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Jerry Smith',
            id: '5',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Abadango Cluster Princess',
            id: '6',
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            status: 'Alive',
            location: {
              name: 'Abadango'
            }
          },
          {
            name: 'Abradolf Lincler',
            id: '7',
            image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
            status: 'unknown',
            location: {
              name: 'Testicle Monster Dimension'
            }
          },
          {
            name: 'Adjudicator Rick',
            id: '8',
            image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
            status: 'Dead',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Agency Director',
            id: '9',
            image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alan Rails',
            id: '10',
            image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
            status: 'Dead',
            location: {
              name: "Worldender's lair"
            }
          },
          {
            name: 'Albert Einstein',
            id: '11',
            image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alexander',
            id: '12',
            image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
            status: 'Dead',
            location: {
              name: 'Anatomy Park'
            }
          },
          {
            name: 'Alien Googah',
            id: '13',
            image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
            status: 'unknown',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Alien Morty',
            id: '14',
            image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Alien Rick',
            id: '15',
            image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Amish Cyborg',
            id: '16',
            image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Annie',
            id: '17',
            image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
            status: 'Alive',
            location: {
              name: 'Anatomy Park'
            }
          },
          {
            name: 'Antenna Morty',
            id: '18',
            image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Antenna Rick',
            id: '19',
            image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
            status: 'unknown',
            location: {
              name: 'unknown'
            }
          },
          {
            name: 'Ants in my Eyes Johnson',
            id: '20',
            image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
            status: 'unknown',
            location: {
              name: 'Interdimensional Cable'
            }
          },

          {
            name: 'Aqua Morty',
            id: '21',
            image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Aqua Rick',
            id: '22',
            image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
            status: 'unknown',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Arcade Alien',
            id: '23',
            image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
            status: 'unknown',
            location: {
              name: 'Immortality Field Resort'
            }
          },
          {
            name: 'Armagheadon',
            id: '24',
            image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
            status: 'Alive',
            location: {
              name: 'Signus 5 Expanse'
            }
          },
          {
            name: 'Armothy',
            id: '25',
            image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg',
            status: 'Dead',
            location: {
              name: 'Post-Apocalyptic Earth'
            }
          },
          {
            name: 'Arthricia',
            id: '26',
            image: 'https://rickandmortyapi.com/api/character/avatar/26.jpeg',
            status: 'Alive',
            location: {
              name: 'Purge Planet'
            }
          },
          {
            name: 'Artist Morty',
            id: '27',
            image: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
            status: 'Alive',
            location: {
              name: 'Citadel of Ricks'
            }
          },
          {
            name: 'Attila Starwar',
            id: '28',
            image: 'https://rickandmortyapi.com/api/character/avatar/28.jpeg',
            status: 'Alive',
            location: {
              name: 'Interdimensional Cable'
            }
          },
          {
            name: 'Baby Legs',
            id: '29',
            image: 'https://rickandmortyapi.com/api/character/avatar/29.jpeg',
            status: 'Alive',
            location: {
              name: 'Interdimensional Cable'
            }
          },
          {
            name: 'Baby Poopybutthole',
            id: '30',
            image: 'https://rickandmortyapi.com/api/character/avatar/30.jpeg',
            status: 'Alive',
            location: {
              name: 'unknown'
            }
          },
          {
            name: 'Baby Wizard',
            id: '31',
            image: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Bearded Lady',
            id: '32',
            image: 'https://rickandmortyapi.com/api/character/avatar/32.jpeg',
            status: 'Dead',
            location: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Beebo',
            id: '33',
            image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
            status: 'Dead',
            location: {
              name: 'Venzenulon 7'
            }
          },
          {
            name: 'Benjamin',
            id: '34',
            image: 'https://rickandmortyapi.com/api/character/avatar/34.jpeg',
            status: 'Alive',
            location: {
              name: 'Interdimensional Cable'
            }
          },
          {
            name: 'Bepisian',
            id: '35',
            image: 'https://rickandmortyapi.com/api/character/avatar/35.jpeg',
            status: 'Alive',
            location: {
              name: 'Bepis 9'
            }
          },
          {
            name: 'Beta-Seven',
            id: '36',
            image: 'https://rickandmortyapi.com/api/character/avatar/36.jpeg',
            status: 'Alive',
            location: {
              name: 'unknown'
            }
          },
          {
            name: 'Beth Sanchez',
            id: '37',
            image: 'https://rickandmortyapi.com/api/character/avatar/37.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (C-500A)'
            }
          },
          {
            name: 'Beth Smith',
            id: '38',
            image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
            status: 'Alive',
            location: {
              name: 'Earth (C-137)'
            }
          },
          {
            name: 'Beth Smith',
            id: '39',
            image: 'https://rickandmortyapi.com/api/character/avatar/39.jpeg',
            status: 'Alive',
            location: {
              name: "Earth (Evil Rick's Target Dimension)"
            }
          },
          {
            name: "Beth's Mytholog",
            id: '40',
            image: 'https://rickandmortyapi.com/api/character/avatar/40.jpeg',
            status: 'Dead',
            location: {
              name: 'Nuptia 4'
            }
          }
        ],
        info: {
          count: 826,
          next: 2,
          prev: null,
          pages: 42
        }
      }
    }
  }
};

export const mockMatchMedia = () => {
  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    };
};
