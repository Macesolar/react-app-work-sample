import React from 'react'
import './top.css'
import { Dropdown } from 'react-bootstrap'
import { post } from '../data/Data'

function Righted() {
   
    
    

       


    
  return (
    <div className='p-pg'>
        

        <div className='p-body'>
          <div style={{width: '90%', display: 'flex', flexDirection: 'row', alignContents: 'center', justifyContent: 'space-between',}}>
            <div>
            <h4 style={{fontSize: 16, fontWeight: '700'}}>All updates</h4>

            
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className='fs-9'>
                  Show
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action/1">Everything</Dropdown.Item>
                  <Dropdown.Item href="#action/2">New post</Dropdown.Item>
                  <Dropdown.Item href="#action/3">Friends only</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
            
        </div>
        

      
      {post.map((data, index) => (
        
        <div className='p-body1' key={index} >
          <div style={{width: '100%', height: '100%', top: 0}}>
            <div style={{padding: 5, width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={data.pic} alt='logo' style={{width: 35, height: 35, borderRadius: 20, borderWidth: 1, borderColor: 'black'}} />
                <h5 style={{fontSize: 15, fontWeight: '700', marginLeft: '2%'}}>{data.name} {data.verified && (<i class="bi bi-patch-check-fill text-primary" style={{fontSize: 12}}></i>)}
                <i style={{marginLeft: 2, fontSize: 13, width: '100%', height: 10, borderRadius: 15, background: 'gray'}}> {data?.membership}</i>
                  
                  <h6>{data?.topic ? ' replies to this topic' : 'posted an update'} <i style={{fontWeight: '600'}}> {data?.topic}</i>
                  {data?.topic ? ` in the forum ` : `` } <i style={{fontWeight: '600'}}> {data?.topic ? `${data?.room}` : `` }</i>
                  </h6></h5>
              </div>

              
              <div>
                <h6 style={{marginTop: '-3%', marginBottom: '5%', paddingLeft: '12%'}}>{data?.date} {data?.date > 1 ? 'years' : 'year'}</h6>
              </div>

              <div style={{width: '100%', margin: '1%'}}>
                {data?.post ? <img src={data?.post} alt='logo' style={{width: '97%', height: 180}}/> : `${data?.word}`}
              </div>
              
              <hr/>
              
              <div style={{width: '97%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
               {data?.emoji}
                  {data?.like} 
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '50%'}}>
                  <div>
                    {data?.comment} comment
                  </div>
                  <div>
                    {data?.share} share
                  </div>
                </div>
              </div>
            </div>
          </div>  
            
        </div>
      ))} 
        
        


            
    </div>
  )
}


export default Righted