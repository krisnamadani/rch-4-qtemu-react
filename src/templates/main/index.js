import React from 'react'
import CardImage from '../../molecules/card-image'
import CardContent from '../../molecules/card-content'
import Heading from '../../atoms/heading'
import Text from '../../atoms/text'
import Button from '../../atoms/button'
import Link from '../../atoms/link'
import Card from '../../organisms/card'

export default function Main() {
  return (
    <div className='p-4'>
        <div class="card p-4 bg-gray-300 shadow-lg flex">
            <CardImage ImageSrc='https://meeting.ai/images/Group%20427321872.svg' ImageclassName='bg-white w-48 h-48' />
            <CardContent>
                <Heading className="text-2xl font-semibold">Hacktiv8 Meetup</Heading>
                <Text className="text-gray-600">Location Jakarta, Indonesia</Text>
                <Text className="text-gray-600">Members 1,078</Text>
                <Text className="text-gray-600">Organizers Adhy Wiranata</Text>
                <Button className="bg-gray-500 text-white font-bold py-2 px-4 mt-2">
                    Join Us
                </Button>
            </CardContent>
        </div>
        <div class="title text-xl font-semibold mt-8 mb-4">
            <Heading>Next Meetup</Heading>
        </div>
        <div class="card p-4 bg-gray-300 shadow-lg flex">
            <CardContent>
                <Heading className="text-2xl font-semibold">Awesome meetup and event</Heading>
                <Text className="text-gray-600">25 January 2019</Text>
                <Text className="text-gray-600">Hello, Javascript & Node.js Ninjas!</Text>
                <Text className="text-gray-600">Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!</Text>
                <Text className="text-gray-600">The meetup format will contain some short stories and technical talks.</Text>
                <Text className="text-gray-600">If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.</Text>
                <Text className="text-gray-600">Remember to bring a photo ID to get through building security.</Text>
                <Text className="text-gray-600">-----</Text>
                <Text className="text-gray-600">See you there!</Text>
                <Text className="text-gray-600">Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</Text>
            </CardContent>
        </div>
        <div class="title text-xl font-semibold mt-8 mb-4">
            <Heading>About Meetup</Heading>
        </div>
        <div class="card p-4 bg-gray-300 shadow-lg flex">
            <CardContent>
                <Text className="text-gray-600">Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</Text>
                <Text className="text-gray-600">Twitter: @JakartaJS and we use the hashtag #jakartajs</Text>
            </CardContent>
        </div>
        <div class="title text-xl font-semibold mt-8 mb-4">
            <div class="flex justify-between">
                <Heading>Members</Heading>
                <Link className="text-gray-400 mx-2" href="#">See All</Link>
            </div>
        </div>
        <div class="card p-4 bg-gray-300 shadow-lg flex">
            <CardImage ImageSrc='https://cdn-icons-png.flaticon.com/512/149/149071.png' ImageclassName='w-16 h-16' />
            <CardContent>
                <Heading className="text-2xl font-semibold">Organizers</Heading>
                <Text className="text-gray-600">Adhy Wiranata</Text>
                <Text className="text-gray-600">4 others.</Text>
            </CardContent>
        </div>
        <div class="title text-xl font-semibold mt-8 mb-4">
            <div class="flex justify-between">
                <Heading>Past Meetup</Heading>
                <Link className="text-gray-400 mx-2" href="#">See All</Link>
            </div>
        </div>
        <div class="flex gap-4 flex-col md:flex-row">
            <Card title='27 November 2017' date='JakartaJS April Meetup with kumparan' description='139 went' />
            <Card title='27 November 2017' date='JakartaJS April Meetup with kumparan' description='139 went' />
            <Card title='27 November 2017' date='JakartaJS April Meetup with kumparan' description='139 went' />
        </div>
    </div>
  )
}
