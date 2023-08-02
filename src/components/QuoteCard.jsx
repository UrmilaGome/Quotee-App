import React, { useContext , useEffect} from 'react'
import QuoteContext from '../context/QuoteContext'
import { getData } from '../context/QuoteAction'

const QuoteCard = () => {

  const {quoteData , dispatch} = useContext(QuoteContext);

  const handleFetch = async( ) => {
    const data = await getData();
    dispatch({
      type: "GET_QUOTE",
      payload: data,
    });


  };

  useEffect(() => {
    handleFetch();
  }, []);

  if(!quoteData)
  {
    return(
      <h1 className="text-center p-5">Loading.....</h1>
    );
  };

  return (
<>
  <div className="card-header my-5 p-5 shadow-lg">
   <h3> Quote</h3>
  <div className="card-body my-4">
    <blockquote class="blockquote mb-0">
      <p>{quoteData.content}</p>
      <footer className="blockquote-footer">{quoteData.author}</footer>
    </blockquote>
    
   <button className="btn btn-dark text-light my-3 w-100  rounded-0" onClick={handleFetch}>Get More</button>
  </div>
  </div>
</>
    
  )
}

export default QuoteCard;
