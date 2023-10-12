import React from 'react'
import './leftbody.css'
import { badges, groups } from '../data/Data'

export default function Left() {
  
  return (
    <div className='l-pg'>
        <div className='l-body'>

          <div style={{margin: '3%'}}>
            <h4 style={{fontSize: 18, fontWeight: '700', margin: 5}}>Popular Group</h4>

            {groups.map((data, index) => {
              return (
                <div>
                  <div style={{width: '50%', margin: '2%', marginTop: '6%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>  
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <img src={data.pic} style={{width: 35, height: 35, borderRadius: 25}}/>
                      
                      <div>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 5, height: '80%' }}>
                          <h5 style={{fontSize: 13, fontWeight: '700'}}>{data.room}</h5>
                          <h5 style={{fontSize: 10}}>{data.members} members</h5>
                          

                        </div>
                      </div>
                    </div>
                  
                    <div>
                        <i className={data?.icon}></i>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
        
        <div className='l-body1'>

          <div style={{margin: '3%'}}>
            <h4 style={{fontSize: 18, fontWeight: '700', margin: 5}}>Badges</h4>

            {badges.map((data, index) => {
              return (
                <div key={index}>
                 <div style={{display: 'flex', flexDirection: 'row', marginTop: '4%'}}>
                    <img src={data.icon} style={{width: 35, height: 35, borderRadius: 25}}/>
                    
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 5, height: '80%' }}>
                      <h5 style={{fontSize: 12, fontWeight: '700'}}>{data.name}</h5>
                      <h5 style={{fontSize: 11, marginLeft: 0, width: '90%'}}>{data.message}</h5>
                      
                      <hr style={{width: 200}}/>
                    </div>
                  </div>
                
                </div>
              )
            })}
            
          </div>
        </div>
        
        
    </div>
  )
}
