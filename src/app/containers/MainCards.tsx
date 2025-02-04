import churranquinho from '../../../public/pagode.jpeg';
import likedSongs from '../../../public/liked.jpg';
import yourEpisodes from '../../../public/eaasl.jpeg';
import imgJJPodcast from '../../../public/jj.jpeg';
import coldplay from '../../../public/coldplay.jpeg';
import bmars from '../../../public/bmars.jpeg';
import imgJJohnson from '../../../public/jjohnson.jpeg';
import tbeatles from '../../../public/tbeatles.jpeg';
import weeklyMixtape from '../../../public/discoverWeekly.jpeg'
import papaRoach from '../../../public/papaRoach.jpeg'
import beatles from '../../../public/beatles.jpeg'
import oRappa from '../../../public/oRappa.jpeg'
import newArtists from '../../../public/newArtists.jpeg'
import chillOut from '../../../public/chillOut.jpg'
import matue from '../../../public/matue.jpeg'
import gunsNR from '../../../public/gunsNR.jpeg'
import { MusicCard } from '../components/MusicCard';
import { RecommendationCard } from '../components/RecommendationCard';
import { Tag } from '../components/Tag';

interface MainCardsProps {
  title: string
}

export const MainCards = ({ title }: MainCardsProps) => {
  const musicCards = [
    { logo: coldplay, title: "Coldplay" },
    { logo: churranquinho, title: "Hábitos Saudáveis" },
    { logo: imgJJPodcast, title: "JotaJota Podcast" },
    { logo: bmars, title: "Bruno Mars" },
    { logo: likedSongs, title: "Liked Songs" },
    { logo: imgJJohnson, title: "Jack Johnson" },
    { logo: yourEpisodes, title: "DE600" },
    { logo: tbeatles, title: "The Beatles" },
  ];

  const recommendations = [
    { image: weeklyMixtape, description: "Your weekly mixtape of fresh music." },
    { image: papaRoach, description: "Papa Roach, Linkin Park, Hoobastank and more" },
    { image: beatles, description: "The Beatles, AC/DC" },
    { image: oRappa, description: "O Rappa, Charlie Brown Jr., Engenheiros do..." },
    { image: newArtists, description: "Fica a par das últimas músicas dos artistas qu..." },
    { image: chillOut, description: "Chillout Avenue, Khamir Music, Amvient Skies..." },
    { image: matue, description: "Matuê, Orochi, Japa and more" },
    { image: gunsNR, description: "Guns N' Roses, Pink Floyd, Metallica and more" }
  ]

  return (
    <>
      <div className="max-w-[1875px] grid w-full minimum:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {musicCards.map((card, index) => (
          <MusicCard key={index}
            logo={card.logo}
            title={card.title}
            size={16}
            classNameImage='minimum:h-[48px] minimum:w-[48px] lg:h-[48px] lg:w-[48px] xl:h-[64px] xl:w-[64px] 2xl:h-[80px] 2xl:w-[80px]'
            className='minimum:h-[48px] lg:h-[48px] xl:h-[64px] 2xl:h-[80px]' 
          />
        ))}
      </div>


      <div className="max-w-[1875px] flex w-full flex-col my-10 overflow-x-hidden">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-5 my-5">
          {recommendations.map((item, index) => (
            <RecommendationCard 
              key={index}
              image={item.image}
              description={item.description}
             />
          ))}
        </div>
      </div>
    </>
  )
}