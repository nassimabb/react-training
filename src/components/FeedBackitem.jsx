import {useState} from 'react'

function FeedBackitem() {
    const [rating , setRating] = useState(7)
    const [text , setText] = useState('this is just a feed back test')
    return (
    <div className='card'>
    <div className="num-display">{rating}</div>
    <div className="text-display">{text}</div>
    <button onclick></button>
    </div>
  )
}
export default FeedBackitem