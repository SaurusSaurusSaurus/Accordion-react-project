import React, { useState } from 'react'

function Tabs({tabsContent, onChange}) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0)


  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)

  }
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent.map((tabItem, index) => (
          <div key={tabItem.label}>
            <span className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} >{tabItem.label}</span>

          </div>
        ))}
      </div>
      <div className='content' style={{color: 'red'}}>
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}

export default Tabs