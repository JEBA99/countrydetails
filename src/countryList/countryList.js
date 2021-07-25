import React, { useState, useEffect } from 'react';
import { countryDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import '../css/bootstrap.min.css';

// class EmployeeList extends Component {
//     constructor(props) {
//         super(props);
//           this.state = {
           
//           }
//         }
    
    function CountryList() {
        const [countryDetails, setCountryDetails] = useState([]); 
        const [selectedCountry, setSelectedCountry] = useState("All"); 
         

        useEffect(() => {
            // Update the document title using the browser API
            axios.get('https://restcountries.eu/rest/v2/all?fields=name;flag;region')
                .then(response => setCountryDetails(response.data) );
            
          });
           
          return(
              <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <ul class="nav justify-content-left">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#"
                              onClick={(event) => {setSelectedCountry('All'); }}>Countries</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul class="nav justify-content-end">
                        <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="#" 
                              onClick={(event) => {setSelectedCountry('Asia'); }}>Asia</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"
                            onClick={(event) => {setSelectedCountry('Europe'); }}>Europe</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"
                            onClick={(event) => {setSelectedCountry('Americas'); }}>Americas</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
                            onClick={(event) => {setSelectedCountry('Africa'); }}>Africa</a>
                        </li>
                      </ul>
                    </div>
                </div>
                { (selectedCountry === 'All') ?
                  <div className="row d-flex flex-wrap">
                  {(countryDetails.length > 0) ? countryDetails.map((countryDetail) => {
                      return(
                    <div className="col-md-6 d-flex flex-row px-2 py-2 border">
                        <div className="col-md-6">
                          <img src={countryDetail.flag} alt="Flag Image" class="img-thumbnail" />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div>{countryDetail.name}</div>
                            <div>{countryDetail.region}</div>
                        </div>
                    </div>
                    )}) : "" }
                </div> :
                (selectedCountry === 'Asia') ? 
                <div className="row d-flex flex-wrap">
                  {(countryDetails.length > 0) ? countryDetails.filter( (countryDetails) => countryDetails.region === 'Asia').map((countryDetail) => {
                      return(
                    <div className="col-md-6 d-flex flex-row px-2 py-2 border">
                        <div className="col-md-6">
                          <img src={countryDetail.flag} alt="Flag Image" class="img-thumbnail" />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div>{countryDetail.name}</div>
                            <div>{countryDetail.region}</div>
                        </div>
                    </div>
                    )}) : "" }
                  </div> :
                (selectedCountry === 'Europe') ? 
                <div className="row d-flex flex-wrap">
                  {(countryDetails.length > 0) ? countryDetails.filter( (countryDetails) => countryDetails.region === 'Europe').map((countryDetail) => {
                      return(
                    <div className="col-md-6 d-flex flex-row px-2 py-2 border">
                        <div className="col-md-6">
                          <img src={countryDetail.flag} alt="Flag Image" class="img-thumbnail" />
                        </div>
                        <div className="col-md-6 d-flex flex-column">
                            <div>{countryDetail.name}</div>
                            <div>{countryDetail.region}</div>
                        </div>
                    </div>
                    )}) : "" }
                  </div> : 
                  (selectedCountry === 'Americas') ? 
                  <div className="row d-flex flex-wrap">
                    {(countryDetails.length > 0) ? countryDetails.filter( (countryDetails) => countryDetails.region === 'Americas').map((countryDetail) => {
                        return(
                      <div className="col-md-6 d-flex flex-row px-2 py-2 border">
                          <div className="col-md-6">
                            <img src={countryDetail.flag} alt="Flag Image" class="img-thumbnail" />
                          </div>
                          <div className="col-md-6 d-flex flex-column">
                              <div>{countryDetail.name}</div>
                              <div>{countryDetail.region}</div>
                          </div>
                      </div>
                      )}) : "" }
                    </div> : 
                    (selectedCountry === 'Africa') ? 
                    <div className="row d-flex flex-wrap">
                      {(countryDetails.length > 0) ? countryDetails.filter( (countryDetails) => countryDetails.region === 'Africa').map((countryDetail) => {
                          return(
                        <div className="col-md-6 d-flex flex-row px-2 py-2 border">
                            <div className="col-md-6">
                              <img src={countryDetail.flag} alt="Flag Image" class="img-thumbnail" />
                            </div>
                            <div className="col-md-6 d-flex flex-column">
                                <div>{countryDetail.name}</div>
                                <div>{countryDetail.region}</div>
                            </div>
                        </div>
                        )}) : "" }
                      </div> : "" }                            
            </div>
          )                
    }   


const mapStateToProps = ({ logindetails }) => {
  const { countrydetails } = logindetails;
	return { countrydetails };
};

export default connect(mapStateToProps, { countryDetails } )(CountryList);

