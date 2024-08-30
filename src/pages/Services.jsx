import React from 'react'

function Services() {
  return (
    <div>
      <div style={{width:"100%",}}>
        <header style={{background:"white", display:"flex",justifyContent:"space-between", alignItems:"center", padding:"20px 40px", borderBottom:"1px solid lightgrey"}}>
            <h2>List of Services</h2>
            <div style={{display:"flex",gap:"20px",}}>
                <button style={{backgroundColor:"blue", color:"white", fontWeight:"bold", padding:"4px", borderRadius:"5px"}}>Add Service</button>
                <button style={{backgroundColor:"black", color:"white", fontWeight:"bold", padding:"4px", borderRadius:"5px"}}>Download</button>
            </div>
        </header>
        <section style={{display:"flex", gap:"10px", marginTop:"20px"}}>
            {/* left side */}
            <div style={{width:"75%",backgroundColor:""}}>
                <div style={{display:'flex', justifyContent:"space-between", alignItems:"center", gap:"10px", padding:"0px 10px"}}> 
                    <div style={{width:"100%", height:"100%",background:""}}>
                        <input placeholder='search services' style={{borderRadius:"10px", border:"1px solid lightgrey", width:"97%",padding:"10px"}}></input>
                    </div>
                    <button style={{backgroundColor:"blue", color:"white", fontWeight:"bold", padding:"8px 15px", borderRadius:"5px",}} >Search</button>
                </div>
                <div style={{width:"100%", height:"100px", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius:"10px", marginTop:"20px",display:"flex", flexDirection:"column",justifyContent:"center",}}>
                      <div style={{marginLeft:"30px"}}>
                      <span ><b>Maternity</b></span>
                       <span><p style={{color:"grey", fontSize:"small"}}>Modified at: 12/12/24</p></span>
                       <span><p style={{color:"grey", fontSize:"small"}}>Status: active</p></span>

                      </div>
                </div>
            </div>
            {/* right side  */}
            <div style={{width:"25%",height:"50vh",backgroundColor:"", gap:"30px",display:"flex", flexDirection:"column",padding:"5px", }}>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <label>POS Code</label>
                    <input placeholder='search pos codes' style={{padding:"8px 10px", border:"1px solid lightgrey", borderRadius:"8px"}}></input>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <label>Procedure Code</label>
                    <input placeholder='search procedure codes' style={{padding:"8px 10px", border:"1px solid lightgrey", borderRadius:"8px"}}></input>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <label>Specialty Code</label>
                    <input placeholder='search specialty codes' style={{padding:"8px 10px", border:"1px solid lightgrey", borderRadius:"8px"}}></input>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <label>Diagnosis Code</label>
                    <input placeholder='search diagnosis codes' style={{padding:"8px 10px", border:"1px solid lightgrey", borderRadius:"8px"}}></input>
                </div>
                <span>
                <button style={{backgroundColor:"blue", color:"white", fontWeight:"bold", padding:"4px", borderRadius:"5px"}}>
                    Look up
                </button>
                </span>

            </div>
        </section>
        
      </div>
    </div>
  )
}

export default Services;
