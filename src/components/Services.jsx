import React from 'react'
import  { FaClinicMedical, FaUserMd, FaRegSmile, FaSyringe } from 'react'

const Services = () => {
    const Services = [
        {icon: <FaClinicMedical className='text-4xl text-pink-600' arial-hidden='true'/>,
            title: "Facelift Procedures",
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum ex praesentium nam impedit incidunt nemo saepe voluptas explicabo? Perspiciatis.',
            link : "#facelift"
        },
        {icon: <FaUserMd className='text-4xl text-pink-600' arial-hidden='true'/>,
            title: "Botox & Fillers",
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum ex praesentium nam impedit incidunt nemo saepe voluptas explicabo? Perspiciatis.',
            link : "#botox"
        },
        {icon: <FaRegSmile className='text-4xl text-pink-600' arial-hidden='true'/>,
            title: "laser treatment",
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum ex praesentium nam impedit incidunt nemo saepe voluptas explicabo? Perspiciatis.',
            link : "#laser"
        },
        {icon: <FaSyringe className='text-4xl text-pink-600' arial-hidden='true'/>,
            title: "Body Contouring",
            desc : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum ex praesentium nam impedit incidunt nemo saepe voluptas explicabo? Perspiciatis.',
            link : "#contouring"
        },
    ]
  return (
    <div>
        <p></p>
    </div>
  )
}

export default Services