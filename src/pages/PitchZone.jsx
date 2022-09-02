import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const PitchZone = () => {
  return (
    <div>
        <div className="pitch-header">
        <h1 className='text-[60px] text-center font-bold uppercase bg-[#581664] text-white p-6 mt-6'>Pitch zone</h1>
        </div>

        <div className="pitch-content">
            <p className='text-[25px] text-center leading-8 p-6'>African Women in Media in partnership with the European Union invite you to submit your pitch for story ideas for a chance to win $2,000 to produce your story. This year the categories are:</p>

            <ul className='text-[16px] leading-10 p-10 font-medium'>
                <li>1.  AU Theme of the Year 2022 – The Year of Nutrition “Strengthening resilience in nutrition and food security on the African continent: Strengthening agro-food systems, health and social protection systems for the acceleration of human, social and economic capital development”</li>
                <li>2. Africa’s Digital transformation Strategy – Positioning Africa for the 4th Industrial Revolution (Agenda 2063 Programme for Infrastructure Development in Africa)</li>
                <li>3. Re-branding Africa – Changing Narratives and perceptions (Agenda 2063, Aspiration 7)</li>
                <li>4. Promoting efforts towards the Economic and Financial Inclusion of African Women (Agenda 2063 Aspiration 6 , AU Gender Equality and women’s’ Empowerment Strategy, GEWE, African Charter on The Rights of Women in Africa, AU Constitutive Act,)</li>
                <li>5. Promoting the Right’s of Children in Africa  (Agenda 2063 Aspiration 6,  African Charter on the Rights and Welfare of Children)</li>
            </ul>
        </div>

        {/* <div className="buttons flex justify-center gap-32">
        <button type="button" class="text-white bg-gradient-to-r from-[#f1a24c] flex to-[#581664] hover:bg-gradient-to-bl transition duration-700 ease-in-out font-medium rounded-lg text-lg px-5 py-2.5 text-center ml-10 mb-10">Register</button>
        <button type="button" class="text-white bg-gradient-to-r from-[#f1a24c] flex to-[#581664] hover:bg-gradient-to-bl  font-medium transition hover:transition transition:duration-0 hover:duration-150 rounded-lg text-sm px-5 py-2.5 text-center ml-10 mb-10">How to pitch</button>
        </div> */}
        {/* HOW TO PITCH */}
        <h1 className='text-[60px] text-center font-bold uppercase bg-[#f1a24c] p-6 mt-8'>How to pitch</h1>
       <div className="text-[16px] leading-10 p-10 font-medium">
        <p>1. <Link className='underline' to='/register'>Register</Link> to attend AWiM22 </p>
        <p>2. Click 'Book a pitch slot' in the AWiM22 welcome email you get when you register </p>
        <p>3. Select a timeslot and input the requested details </p>
       </div>
        
        <Footer />
    </div>
  )
}

export default PitchZone















// The categories:

// AU Theme of the Year 2022 – The Year of Nutrition “Strengthening resilience in nutrition and food security on the African continent: Strengthening agro-food systems, health and social protection systems for the acceleration of human, social and economic capital development”
// Africa’s Digital transformation Strategy – Positioning Africa for the 4th Industrial Revolution (Agenda 2063 Programme for Infrastructure Development in Africa)
// Re-branding Africa – Changing Narratives and perceptions (Agenda 2063, Aspiration 7)
// Promoting efforts towards the Economic and Financial Inclusion of African Women (Agenda 2063 Aspiration 6 , AU Gender Equality and women’s’ Empowerment Strategy, GEWE, African Charter on The Rights of Women in Africa, AU Constitutive Act,)
// Promoting the Right’s of Children in Africa  (Agenda 2063 Aspiration 6,  African Charter on the Rights and Welfare of Children)



