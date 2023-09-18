import React from 'react'
import Heading from '../../atoms/heading'
import Text from '../../atoms/text'
import Button from '../../atoms/button'

export default function Card(props) {
  return (
    <div class="card p-4 bg-gray-300 shadow-lg flex-auto">
        <Heading>{props.title}</Heading>
        <Text className="text-gray-600">{props.date}</Text>
        <Text className="text-gray-600">{props.description}</Text>
        <Button className="bg-gray-500 text-white font-bold py-2 px-4 mt-2">
            View
        </Button>
    </div>
  )
}
