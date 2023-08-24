import { artist_1, artist_2, artist_3, artist_4, artist_5, artist_6, artist_7, artist_8, artist_9 } from '../assets';

const navLinks = 
[{
  title: 'Records & Casettes',
  url: '/projects'
 },
 {
  title: 'Discover',
  url: '/discover'
 },
]

const imagesArray = [
  {
    img: artist_6,
    url: 'https://www.pexels.com/photo/man-playing-bass-electric-guitar-2649113/',
    title: 'Martin Lopez',
    content: 'Guitar-based folk, indie, blues, rock and everything in-between.',
  },
  {
    img: artist_8,
    url: 'https://www.pexels.com/photo/fashion-man-people-street-18071746/',
    title: 'Matthew  Twin',
    content: 'Dazzling drops of breaks, rhythm & rhyming in hip hop & rap.',
  },
  {
    img: artist_3,
    url: 'https://www.pexels.com/photo/man-sitting-on-bed-with-vinyl-records-12987619/',
    title: 'Okay Imagery',
    content: 'From DIY parties in South Bronx, New York to anime-infused rap in 2023, hip-hop continues to live and in a refreshingly eclectic way',
  }
]

const storiesArray = [
  {
    view: 'LATEST',
    content: [
      {
        img: artist_6,
        top: 'Qrates Recommends',
        url: 'https://www.pexels.com/photo/man-playing-bass-electric-guitar-2649113/',
        title: 'Martin Lopez',
        content: 'Guitar-based folk, indie, blues, rock and everything in-between.',
        date: 'Aug 22 2023'
      },
      {
        img: artist_8,
        top: 'Qrates Recommends',
        url: 'https://www.pexels.com/photo/fashion-man-people-street-18071746/',
        title: 'Matthew  Twin',
        content: 'Dazzling drops of breaks, rhythm & rhyming in hip hop & rap.',
        date: 'Jul 14 2023'
      },
      {
        img: artist_3,
        top: 'Qrates Recommends',
        url: 'https://www.pexels.com/photo/man-sitting-on-bed-with-vinyl-records-12987619/',
        title: 'Okay Imagery',
        content: 'From DIY parties in South Bronx, New York to anime-infused rap in 2023, hip-hop continues to live and in a refreshingly eclectic way',
        date: 'Jun 29 2023'
      }     
    ]
  },
  {
    view: 'INTERVIEW',
    content: [
      {
        img: artist_5,
        top: 'Artists on Qrates',
        url: 'https://www.pexels.com/photo/photo-of-man-playing-acoustic-guitar-2531551/',
        title: 'King Chino',
        content: 'The Toronto-based multi-instrumentalist and beat aficionado breaks down his early inspirations growing up',
        date: 'Apr 27 2023'
      },
      {
        img: artist_7,
        top: 'Artists on Qrates',
        url: 'https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-playing-flute-8191522/',
        title: 'MindSpring Memories',
        content: 'The ever-prolific Baltimore-born producer Angel Marcloid, also known as Fire-Toolz, drops slushwave vinyl release Magical Realism, along with an extensive selection of five ways of looking at things—spiritually-speaking',
        date: 'Jan 09 2023'
      },
      {
        img: artist_9,
        top: 'Artists on Qrates',
        url: 'https://www.pexels.com/photo/bald-man-holding-microphone-singing-12216243/',
        title: 'Osunlade',
        content: "Culture & cadences: The Afro house originator talks staying independent, vinyl's resurgence & the Chicago roots of house music",
        date: 'Dec 06 2022'
      }
    ]
  },
  {
    view: 'QRATES BIZ',
    content: [
      {
        img: artist_1,
        top: 'Filling the gaps:',
        url: 'https://www.pexels.com/photo/woman-wearing-black-crop-top-and-orange-skirt-standing-1152994/',
        title: 'Ten87 on the advantages of long-term studios, fostering community, & changing musical landscapes',
        content: "The London-based organization's Rob Burn and Julian Prentis talk providing studios and sites for professional development to an array of talent—from independent musicians and producer to engineers and labels.",
        date: 'Oct 07 2022'
      },
      {
        img: artist_4,
        top: 'Down with walled gardens:',
        url: 'https://www.pexels.com/photo/woman-in-white-tank-top-sitting-on-green-and-brown-floral-sofa-chair-12801795/',
        title: 'A dive into the fast-paced world of Web3 and how it can benefit independent musicians',
        content: 'New platforms like Tellie are making use of blockchain technology to help musicians and creatives regain their independence in the digital age of streaming',
        date: 'May 30 2022'
      },
      {
        img: artist_2,
        top: 'Deck the Halls: ',
        url: 'https://www.pexels.com/photo/woman-holding-a-vinyl-record-while-sitting-on-floor-12204293/',
        title: 'Eight must-have vinyl stocking stuffers for this holiday season ',
        content: 'The Qrates teams shares a list of some 2021 favorites that are available to purchase in time for Christmas',
        date: 'Dec 09 2021'
      }
    ]
  }
]

export {
  navLinks,
  imagesArray,
  storiesArray
}