import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'

const TravelTips = () => {
  return (
    <div className=''>
      <div className="pl-[25%] mt-10">
      <div className="airport bg-[#581664] w-[700px] h-[150px] flex gap-10 items-center pl-8">
          <div className="icon">
            <GiCommercialAirplane className='text-white text-[100px]'/>
          </div>
          <div className="header">
            <h1 className='text-[40px] font-bold uppercase text-white text-start leading-[45px]'>Transfer <br /> from airport</h1>
          </div>
        </div>
        <div className="relative">
       <div className="absolute top-0 -left-4 w-72 mix-blend-multiply h-72 bg-purple-300 rounded-full"></div>
       <div className="absolute top-0 right-8 w-72 mix-blend-multiply h-72 bg-orange-300 rounded-full"></div>
        </div>
       <div className="absolute -right-4 w-72 h-72 bg-purple-300 rounded-full"></div>
        <p className='text-start text-[15px] bg-gray-200 w-[700px] p-3 pt-8 font-medium leading-9'>For participants arriving to Casablanca airport, we suggest that you take the train from the airport to Fez, the train station is inside the airport, so you don’t need to go outside the airport, you should simply ask in the airport reception desks. They will help you find the train station; also there are many people that would help you get the train ticket to come to Fez.</p>
      <h1 className='text-[20px] bg-[#f1a24c] w-[700px] font-bold uppercase mt-8 p-3'>Note:</h1>
      <p className='text-start text-[15px] bg-gray-200 w-[700px] p-3 pt-8 font-medium leading-9'>Normally, you will have to change trains in Casa voyageur train station, you will take the train from Casablanca airport to Casa Voyageur, and then you will change trains to come to Fez. Train costs around 200 Dirhams “20 USD”.
      Once arriving to Fez, you should look for red small taxis at the exit door of the train station, and ask the driver to take you to your hotel (give him the name of the hotel). The taxi would charge 30 Dirhams Max. (make sure you have change). Concerning guests arriving to Rabat airport, you can also travel to Fez by train, but you should take a blue taxi outside the airport and ask the driver to take you to the train station (la Gare de Rabat Ville). You should preferably ask someone at the airport to show you the small taxis station. Once arriving to Rabat Ville train station, you can buy your train ticket to Fez. People working there will help you out. We can also arrange a shuttle service/cab to pick you up from the airport of Casablanca or Rabat, but it would cost much more than the train (around 1000 Dirhams “100 USD” from Rabat and 1800 Dirhams or 200 USD from Casablanca).For participants arriving to Fez airport, you will have to look for big white taxis at the exit door of the airport and ask the driver to take you to your hotel in Fez. The prices for trips to Fez city are fixed; it’ll cost you 150 Dirhams (15 USD). We can also arrange for your airport transfer if you want to come to Fez by taxi. If you face any problems or you need help once arriving to Morocco, please don’t hesitate to contact me, here is my phone and whatsApp number:  +212 619518951.
      </p>
      </div>

    </div>
  )
}

export default TravelTips