import React from 'react'
import { IoMdTrendingUp, IoMdTrophy} from "react-icons/io";
import { IoMusicalNotes } from "react-icons/io5";
import { TiNews } from "react-icons/ti";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdFlightTakeoff, MdFastfood } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";

const Category = () => {
  return (
    <div className='category-main-wrapper' data-testid="nav-category-wrapper">
      <div className='category-container'>
        <div className='category-item'>
          <IoMdTrendingUp className='category-icon' />
          <span>Popular</span>
        </div>
        <div className='category-item'>
          <IoMusicalNotes className='category-icon' />
          <span>Music</span>
        </div>
        <div className='category-item'>
          <BiSolidMoviePlay className='category-icon' />
          <span>Movies</span>
        </div>
        <div className='category-item'>
          <FaComputer className='category-icon' />
          <span>Technology</span>
        </div>
        <div className='category-item'>
          <IoMdTrophy className='category-icon' />
          <span>Sports</span>
        </div>
        <div className='category-item'>
          <TiNews className='category-icon' />
          <span>News</span>
        </div>
        <div className='category-item'>
          <MdFlightTakeoff className='category-icon' />
          <span>Travel</span>
        </div>
        <div className='category-item'>
          <GrGamepad className='category-icon' />
          <span>Gaming</span>
        </div>
        <div className='category-item'>
          <MdFastfood className='category-icon' />
          <span>Food</span>
        </div>
      </div>
    </div>
  )
}

export default Category