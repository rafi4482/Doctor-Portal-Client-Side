import React from 'react'
import Service from './Service'

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: "Cancer Treatment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit! Numquam doloribus molestiae distinctio praesentium harum ipsa, nobis repellendus eligendi.",
            img: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 2,
            name: "Cardiovascular Treatment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit! Numquam doloribus molestiae distinctio praesentium harum ipsa, nobis repellendus eligendi.",
            img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 3,
            name: "Oral Care",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, reprehenderit! Numquam doloribus molestiae distinctio praesentium harum ipsa, nobis repellendus eligendi.",
            img: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
       
    ]



    return (
        <div className="mt-16">
            <div className="text-center">
                <h2 className="text-2xl text-primary uppercase font-normal mb-8">Our Services</h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    servicesData.map(service => <Service
                    
                    key={service.id}
                    service={service}
                    >

                    </Service>)

                }
            </div>
        </div>
    )
}

export default Services