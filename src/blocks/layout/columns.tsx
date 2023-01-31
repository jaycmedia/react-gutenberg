import {IWPGBlock} from '../../types'
import * as React from 'react'
import {WPGBlock} from '../../index'

const WPGColumnsBlock: React.FC<IWPGBlock> = (props) => {
  const {
    // attrs,
    innerBlocks
    // innerHTML
  } = props

  if (!Array.isArray(innerBlocks)) {
    console.warn('Columns should have innerBlocks')
    return null
  }

  const cols = innerBlocks.length

  const columns = innerBlocks.map((col, ci) => {

    const {attrs: {width}}: any = col
    const style: any = {}
    if (width) style.flexBasis = width

    return (
      <div className={`wp-block-column ${ci + 1}-column`} key={ci} style={style}>
        {col.innerBlocks.map((block, bi) => (
          <WPGBlock key={bi} block={block}/>
        ))}
      </div>
    );
  })

  return <div className={`wp-block-columns has-${cols}-columns`}>{columns}</div>
}

export default WPGColumnsBlock
