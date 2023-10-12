import React from 'react'
import './body.css'
import { quest, user } from '../data/Data'

export default function Right() {
  return (
    <div className='r-pg'>
        <div className='r-body'>
        

          
        <div style={{margin: '3%'}}>
            <h4 style={{fontSize: 18, fontWeight: '700', margin: 5}}>New members</h4>

            {user.map((data, index) => {
              return (
                <div key={index}>
                  <div style={{display: 'flex', flexDirection: 'row', margin: 4, marginTop: '0%', alignItems: 'center'}}>
                    
                    <div style={{width: '13%', height: "100%"}}>
                      <img src={data.pic} alt='logo' style={{position: 'absolute', width: 35, height: 35, borderRadius: 25}}/>
                      <div style={{position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', bottom: -20 }}>
                        <h6 style={{
                          fontSize: data?.messages > 9 ? 8 : 9, 
                          width: 14, 
                          height: 14, 
                          borderRadius: 9, 
                          backgroundColor: '#121212', 
                          color: '#fff', 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center'}}>{data?.messages > 99 ? 99 : data?.messages}</h6>
                      </div>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '3%', marginTop: '5%', lineHeight: 0}}>
                      <div style={{display: 'flex', flexDirection: 'row', height: '80%', marginTop: '5%', }}>
                        <h5 style={{fontSize: 13, fontWeight: '700'}}>{data.name}</h5>
                        {data.verified && (<i class="bi bi-patch-check-fill text-primary" style={{fontSize: 12}}></i>)}
                        
                        
                      </div>

                      <div>
                      <h5 style={{fontSize: 11}}>@{data?.username}</h5>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>

        </div>
        

        <div className='r-body1'>
        

          
        <div style={{margin: '3%'}}>
            <h4 style={{fontSize: 18, fontWeight: '700', margin: 5}}>Quest</h4>

            {quest.map((data, index) => {
              return (
                <div key={index}>
                  <div style={{display: 'flex', flexDirection: 'row', marginTop: '3%'}}>
                  <i class={data.icon} style={{fontSize: 13}}></i>
                    
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 5, height: '80%' }}>
                      <h5 style={{fontSize: 14, fontWeight: '700'}}>{data.title}</h5>
                      <p style={{fontSize: 12}}>{data?.body}</p>
                      
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
