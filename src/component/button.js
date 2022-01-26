import "./button.css";

const Button = ({symbol,color,hadleClick}) =>{
    return <div >
           <button onClick={() => hadleClick(symbol)}
          
          className="button-wrapper" 
          style={{backgroundColor:color}}>
                {symbol}
          </button>
               

           </div>
};

 export default Button ;