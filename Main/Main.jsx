import React, { useEffect } from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../Assets/ktm.jpg";
import img1 from "../../Assets/patan.jpg";
import img2 from "../../Assets/taudaha.jpg";
import img3 from "../../Assets/godawari.jpg";
import img4 from "../../Assets/pashupatinath.jpg";
import img5 from "../../Assets/macchapuchre.jpg";
import img6 from "../../Assets/abc.jpg";
import img7 from "../../Assets/ebc.jpg";
import img8 from "../../Assets/Pokhara.jpg";
import img9 from "../../Assets/Goa beach.jpg";
import img10 from "../../Assets/Hampi.jpg";         
import img11 from "../../Assets/KERALA House Boat.jpg";
import img12 from "../../Assets/Munnar.jpg";
import img13 from "../../Assets/Murudeshwar.jpg";
import img14 from "../../Assets/Mysore.jpg";
import img15 from "../../Assets/udupi.jpg";
import img16 from "../../Assets/Kotilingeshwara.jpg";


import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Kathmandu Durbar Square",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Kathmandu Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to “palace” or “a court held by a prince”) is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Patan Durbar Square",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Patan Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to “palace” or “a court held by a prince”) is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: "Taudaha",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "The lake is believed to be a remnant pool of the huge lake that once existed where now the city of Kathmandu sits. According to mythology, a Buddhist mythical character Manjushree cut the hill in the valley's south, allowing the lake's water to drain off, thereby creating land that was duly occupied by people.",
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: "Godawari",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "Godawari is one of the popular hiking destinations in Nepal for its rich wildlife and splendid environment. Godawari is also famous for its botanical garden and Godawari temple (Kunda and navadhara). Mt. Phulchowki is located in Godawari which is the highest peak in Kathmandu valley.",
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: "Pashupatinath Temple",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Pashupatinath Temple, place of worship in the Kathmandu Valley on the Baghmati River, on the eastern outskirts of the city of Kathmandu, that is the holiest site in Nepal. It is devoted to the Hindu god Shiva in his form as Pashupati, protector of animals.",
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: "Macchapuchre",
    location: "Gandaki",
    grade: "CULTURAL RELAX",
    fees: "6000",
    description:
      "Machapuchare is at the end of a long spur ridge, coming south out of the main backbone of the Annapurna massif, which forms the eastern boundary of the Annapurna Sanctuary. The peak is about 25 km (16 mi) north of Pokhara, the provincial capital of the Gandaki Province.",
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Annapurna Base Camp",
    location: "Gandaki",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Annapurna is a mountain situated in the Annapurna mountain range of Gandaki Province, north-central Nepal.Mount Annapurna I is the tenth highest mountainin the world at 8,091 metres (26,545 ft).",
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: "Everest Base Camp",
    location: "Lukla",
    grade: "CULTURAL RELAX",
    fees: "6900",
    description:
      "The base camps are rudimentary campsites at the base of Mount Everest that are used by mountain climbers during their ascent and descent. They are also visited by hikers. South Base Camp is used when climbing via the southeast ridge, while North Base Camp is used when climbing via the northeast ridge.",
  },
  {
    id: 9,
    imgSrc: img8,
    destTitle: "Pokhara",
    location: "Kaski",
    grade: "CULTURAL RELAX",
    fees: "5999",
    description:
      "Pokhara's spellbinding beauty has been the subject of many travel writers. Its pristine air, the spectacular backdrop of the snowy peaks of the Annapurna Range and the serene Phewa, Begnas and Rupa Lakes, makes this destination 'the Jewel of the Himalaya'.",
  },
  {
    id: 10,
    imgSrc: img9,
    destTitle: "Goa Beach",
    location: "India",
    grade: "CULTURAL RELAX",    
    fees: "7000",
    description: 
      "Goa is a state on the southwestern coast of India within the Konkan region. It is bordered by the states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coast.",
  },    

  {
    id: 11,   
    imgSrc: img10,
    destTitle: "Hampi",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "6000",
    description:
      "Hampi is a village in the southern part of India, located in the state of Karnataka. It is known for its rich history and stunning architecture, with numerous temples, palaces, and ruins from the Vijayanagara Empire.",
  },

{
    id: 12,
    imgSrc: img11,
    destTitle: "Kerala House Boat",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "8000",
    description:
      "Kerala houseboats, also known as Kettuvallams, are traditional wooden boats that have been converted into luxurious floating accommodations. They are a popular way to explore the backwaters of Kerala, offering a unique and serene experience amidst lush greenery and tranquil waters.",   
  },
  {

    id: 13,
    imgSrc: img12,
    destTitle: "Munnar",

    location: "India",
    grade: "CULTURAL RELAX",

    fees: "7000",
    description:
      "Munnar is a hill station in the Western Ghats mountain range in Kerala, India. It is known for its lush tea plantations, rolling hills, and pleasant climate. Munnar is a popular destination for nature lovers and adventure enthusiasts, offering opportunities for trekking, wildlife spotting, and exploring tea estates.",
  },


  {    id: 14,
    imgSrc: img13,
    destTitle: "Murudeshwar",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "6000",
    description:
      "Murudeshwar is a town in the Bhatkal taluk of Uttara Kannada district in Karnataka, India. It is famous for the Murudeshwar Temple, which houses a towering statue of Lord Shiva and is surrounded by the Arabian Sea. The town is known for its scenic beauty, beaches, and religious significance.",
  },

  {
    id: 15,

    imgSrc: img14,
    destTitle: "Mysore",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Mysore, also known as Mysuru, is a city in the southern part of India, located in the state of Karnataka. It is famous for its rich cultural heritage, palaces, gardens, and festivals. The Mysore Palace, a stunning example of Indo-Saracenic architecture, is one of the city's main attractions.",
  },


  {
    id: 16,
    imgSrc: img15,
    destTitle: "Udupi",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Udupi is a coastal city in the Indian state of Karnataka, known for its temples, beaches, and cuisine. It is famous for the Udupi Sri Krishna Matha, a temple dedicated to Lord Krishna, and is also renowned for its delicious vegetarian cuisine, particularly Udupi-style dosas and sambar.",
  },

  {
    id: 17,
    imgSrc: img16,
    destTitle: "Kotilingeshwara",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Kotilingeshwara is a temple complex located in the Kolar district of Karnataka, India. It is known for its massive Shiva linga and numerous smaller lingas that are installed in the temple premises. The temple attracts devotees and tourists alike, making it a significant pilgrimage site.",
}
];

const Main = () => {
  //scroll animation

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>₹ {fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
