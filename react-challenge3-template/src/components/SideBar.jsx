import React from 'react'
import { Icon } from '@iconify/react'
import headphonesIcon from '@iconify/icons-fa/headphones'
import heartIcon from '@iconify/icons-fa/heart'
import playCircleIcon from '@iconify/icons-fa/play-circle'
import searchIcon from '@iconify/icons-fa/search'
import barsIcon from '@iconify/icons-fa/bars'
import avatar from '../assets/img/avatar.jpg'

export default function SideBar() {
  return (
    <div className="w-[200px] bg-[#f0f0f0] text-black p-5 flex flex-col fixed top-0 bottom-0 z-10 h-full">
      <div className="flex items-center mb-[30px] mt-[30px]">
        <img src={avatar} alt="Avatar" className="w-[100px] h-[100px] rounded-full" />
        <p className="ml-[10px] text-[16px] font-semibold">Bob Smith</p>
      </div>

      <div className="pt-[45px] flex flex-col">
        <div className="flex items-center p-[10px] my-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d3d3d3]">
          <Icon icon={headphonesIcon} width="18" height="18" />
          <p className="ml-[10px]">Discover</p>
        </div>
        <div className="flex items-center p-[10px] my-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d3d3d3]">
          <Icon icon={searchIcon} width="18" height="18" />
          <p className="ml-[10px]">Search</p>
        </div>
        <div className="flex items-center p-[10px] my-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d3d3d3]">
          <Icon icon={heartIcon} width="18" height="18" />
          <p className="ml-[10px]">Favourites</p>
        </div>
        <div className="flex items-center p-[10px] my-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d3d3d3]">
          <Icon icon={playCircleIcon} width="18" height="18" />
          <p className="ml-[10px]">Playlists</p>
        </div>
        <div className="flex items-center p-[10px] my-[5px] cursor-pointer transition-all duration-300 hover:bg-[#d3d3d3]">
          <Icon icon={barsIcon} width="18" height="18" />
          <p className="ml-[10px]">Charts</p>
        </div>
      </div>
    </div>
  )
}
