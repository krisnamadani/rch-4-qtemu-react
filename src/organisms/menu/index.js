import React from 'react'
import LeftMenu from '../../molecules/left-menu'
import RightMenu from '../../molecules/right-menu'

export default function Menu() {
  return (
    <div class="menu flex flex-auto justify-between">
        <LeftMenu />
        <RightMenu />
    </div>
  )
}
