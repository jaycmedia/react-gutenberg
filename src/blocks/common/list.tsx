import {IWPGBlock} from '../../types'
import * as React from 'react'
import {WPGBlock} from "../../index";

const WPGListBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    innerBlocks,
    innerHTML
  } = props

  const items = innerBlocks.map((item, i) => {
    return (
      <WPGBlock key={i} block={item}/>
    )
    // return (
    //   <li className={`wp-block-list-item ${i + 1}-list-item`} key={i}
    //       dangerouslySetInnerHTML={{__html: item.innerHTML}}
    //   />
    // )
  })

  return <ul className="wpg-block wpg-b_list">{items}</ul>

  // return <div className="wpg-block wpg-b_list" dangerouslySetInnerHTML={{__html: innerHTML}}/>
}

export default WPGListBlock
