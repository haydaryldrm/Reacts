import React from 'react';

function DataCard(props) {
    if(props.theme=== "light"){
        var styleing = {
         div : {
           backgroundColor : "#ECF9FF",
           color : "#20262E"
         }
       } 
       }
       else{
         var styleing = {
           div : {
             backgroundColor : "#20262E",
             color : "#ECF9FF"
           }
         } 
       }
  return (
    <div className="card">
        <div>

        </div>
        <div className="card-header" style={styleing.div}>
            <h3>{props.Data.character}</h3>
            <img src={props.Data.image} alt="pho"/>
        </div>
    </div>
  );
}

const Homepage = (props) => {
    const [Datas, setDatas] = React.useState([]);
        
    React.useEffect(() => {
        fetch("https://harry-potter-api-en.onrender.com/characters")
        .then((response) => response.json())
        .then((data) => setDatas(data));
    }, []);
    return ( <div className="container"  >
                    {Datas.map((Data) => (
                        <DataCard Data={Data} theme={props.theme} />
                    ))}
                </div>
    );;
};
export default Homepage;