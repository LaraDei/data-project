import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getCsv} from '../../features/csvSlice'
import BarGraph from '../BarGraph/BarGraph'
import Papa from "papaparse"

export default function GraphCreatePage() {

  const { csv, isLoading } = useSelector((state) => state.csv);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    csvfile: null,
    graph: ""
  });
  
  const handleFile = (e) => {
    setState({
      csvfile: e.target.files[0],
    });
  };
  
  const importCSV = (e) => {
    e.preventDefault();
    e.target.reset()
    const { csvfile } = state;
    Papa.parse(csvfile, {
      complete: updateData,
      header: true,
    });
    
  };
  
  const updateData = (result) => {
    dispatch(getCsv(result.data));
  };

  const handleType = (e) => {
    const {value, name} = e.target
    setState({ [name]: {value: value}})
    
  };

return(
    <div className="graph-create-page">
        <form className="file-uploader"onSubmit={importCSV} >
            <input type="file" id="csv" onChange={handleFile}/>
            <button type="submit">Submit</button>
        </form>
        <label htmlFor="graph-select">select graph type: </label>
          <select id='graph-select' name="graph" onChange={handleType} required> 
              <option value="" >...</option>
              <option value="barGraph">Bar Graph</option>
          </select>
        .
        {/* <form className="graph-key">
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
        </form> */}
        {/* <div className="rendered-graph">
            {!isLoading 
            ?<BarGraph data={csv}/> 
            : <p>please upload csv file</p>}
        </div> */}

    </div>
)
}