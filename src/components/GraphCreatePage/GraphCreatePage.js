import React, {useState} from 'react';
import * as d3 from 'd3';
import { useD3 } from '../useD3';
import BarGraph from '../BarGraph/BarGraph'
// import {data} from '../../DataStore'
import Papa from "papaparse"

export default function GraphCreatePage() {


        const [state, setState] = useState({
          csvfile: null,
          data: [],
          loged: false
    });

    const handleChange = event => {
        setState({
            csvfile: event.target.files[0]
          });
      };

    const importCSV = (e) => {
        e.preventDefault();
        const { csvfile } = state;
    
        Papa.parse(csvfile, {
          complete: updateData,
          header: true
        });
      }
    const updateData = (result) =>{
      setState({
            data: result.data,
            loged: true
          });
      }

return(
    <div className="graph-create-page">
        <form className="graph-data" >
            <input type="file" id="myFile" name="filename" onChange={handleChange}/>
            <input type="submit" onClick={importCSV}/>
        </form>
        <div className="rendered-graph">
            {state.loged 
            ?<BarGraph data={state.data}/> 
            : <p>please upload csv file</p>}
        </div>

    </div>
)
}