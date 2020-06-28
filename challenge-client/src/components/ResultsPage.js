import React, {Component} from 'react';
import "./main/style.css";
import searchDraw from "../assets/img/search.svg";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography, Slider, CardHeader, Chip} from "@material-ui/core";

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

class ResultsPage extends Component{
    constructor(props){
      super(props);
    }
    
    
    render(){
      const 
      {
        results
      } = this.props;

     // const classes = useStyles();
      const nombreCom = results.data.name +" "+results.data.surname;
      console.log(nombreCom);
      function valuetext(value) {
        return `${value*100}`;
      }
       
      const date = new Intl.DateTimeFormat("es-AR", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(new Date(results.data.birthday));
      const dateString = " "+date;
      const marks= [
        {value: results.data.scoring.confidence*100,
              text: results.data.scoring.confidence*100
            
        }
      ]
      const estado = results.data.scoring.approved ? "Aprobado": "Rechazado";
        return(
        <div className="resultContainer">
          <Card className="cardResult">
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
              <Typography align="center" component="h4" variant="h4">
              {
                     nombreCom
                  }
          </Typography>
                  
                  <br />
                  
                 CUIT: 
                 { 
                 " "+results.cuit
                    }
                    <br />
                 Nacimiento: 
                 { 
                 dateString
                    }
                  <br />
                 Estado:  <Chip color={results.data.scoring.approved?"primary":"secondary"} size="small" label={estado}/><br/>
                 <span>Puntaje:
                 { 
                 
                <PrettoSlider valueLabelDisplay="on" color={results.data.scoring.approved?"primary":"secondary"} aria-label="pretto slider" step={null} value={results.data.scoring.confidence*100} marks={marks} />
                    }</span><br />
                    

              </Typography>
            </CardContent>
          </Card>
        </div>
        )
    }
}

export default ResultsPage;