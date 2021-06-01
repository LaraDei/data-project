import React, {useState} from 'react';
// import * as d3 from 'd3';
// import { useD3 } from '../useD3';
import BarGraph from '../BarGraph/BarGraph'
// import {data} from '../../DataStore'
import Papa from "papaparse"

export default function GraphCreatePage() {


        const [state, setState] = useState({
          csvfile: null,
          data: [],
          loged: false,
          xAxis: "",
          yAxix: "",
          labeled: false
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
      console.log(result.data)
      setState({
            data: result.data,
            loged: true
          });
      }
    const updateValue= (value, key) => {
      console.log(value)
      console.log(key)
        setState({ 
          [key]: {value: value},
          loged: true
        })
    }
  
  const updateLabeled= () => {
      setState({ 
        labeled: true
      })
  }

return(
    <div className="graph-create-page">
        <form className="file-uploader" >
            <input type="file" id="myFile" name="filename" onChange={handleChange}/>
            <input type="submit" onClick={importCSV}/>
        </form>
        {state.loged 
        ?<form className="graph-key">
          <label htmlFor="x-select">* x-Axis: </label>
          <select id='x-select' name="xAxis" onChange={e => updateValue(e.target.value, e.target.name)} required> 
              <option value="" >...</option>
              {Object.keys(state.data[0]).map(label =>
                <option key={"x"+ label} value={label}>
                {label}
                </option>
              )}
          </select>
          <label htmlFor="y-select">* y-Axis: </label>
          <select id='y-select' name="yAxis" onChange={e => updateValue(e.target.value, e.target.name)} required> 
              <option value="" >...</option>
              {Object.keys(state.data[0]).map(label =>
                <option key={"y"+ label} value={label}>
                {label}
                </option>
              )}
          </select>
          <input type="submit" onClick={updateLabeled}/>
        </form>
        : <p>please upload csv file</p>}
        <div className="rendered-graph">
            {state.labeled 
            ?<BarGraph data={state.data}/> 
            : <p>please upload csv file</p>}
        </div>

    </div>
)
}