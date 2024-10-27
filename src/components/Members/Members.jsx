import React from 'react'
import './Members.css'
import member_img from '../../assets/members.png'


export default function Members() {
  return (
    <div className='members'>
    <div className="member-posts">
        <img src={member_img} alt="" />
    </div>
    </div>
  )
}
