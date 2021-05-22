import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../useD3';
import BarGraph from '../BarGraph/BarGraph'
import {data} from '../../DataStore'

export default function GraphCreatePage() {
return(
    <div className="graph-create-page">
        <form className="graph-data">

        </form>
        <div className="rendered-graph">
            <BarGraph data={data}/>
        </div>

    </div>
)
}