// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { fetchEntries } from '../../redux/entryActions';



export default function Entries() {


    const entriesInRedux = useSelector((state) => state.entries);

    // const dispatch = useDispatch();

    // // const [entries, setEntries] = useState([])

    // useEffect(() => {
    //     dispatch(fetchEntries())
    // }, []);

      return (
        <div>
            <h2>My Entries</h2>
            <div className="d-flex justify-content-center align-items-center container">
                    <div className="align-self-center row row-cols-1 row-cols-md-3 g-4">
                        {entriesInRedux.map(e =>
                            <div key={e.id} className="col"> 
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.title}</h5>
                                        <p className="card-entry">{e.body}</p>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>   
                </div>
        </div>
      )
}
