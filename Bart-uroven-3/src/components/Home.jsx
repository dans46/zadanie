import React from 'react'
import { Link } from 'react-router-dom'
import plus from '../img/plus.svg'
import AddCategory from '../components/AddCategory'

function show(){

  var element = document.getElementById("cat-alert");
  if (element !== null)
  element.classList.remove("hidden");
}


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [] 
        }
    }

    componentDidMount() {
      
    fetch('https://crudpi.io/e2e0e0/galleries')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items:json,
      })
    });  
    }

    render() {

        var { items } = this.state;
        return (

          <div>
            <div>
              <div className="bg-img">
            </div>
            <div className="container-xl">
              <div className="desc">
                <h1>Fotogaléria</h1>
                <p>Kategórie</p>
              </div>
                 <div className="row text-center">
                    {items.map(item=>(
                      <div  key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                        <Link to={item.path}>
                          <div className="card" id="pr">
                            <div className="img-box">
                              {item.image && (
                                <img className="card-img-top" src={item.image} />
                              )}
                            </div>
                            <div className="card-body">
                              <p className="card-text">{item.name}</p>
                              <div className="hidden">
                                <p>XY fotografií</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>      
                    ))}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="card"  onClick={show}> 
                        <div className="add">
                          <img src={plus}/> 
                          <p>Pridať kategóriu</p>
                        </div>
                      </div>
                    </div>
                 </div>
                 <p className="copyright">webdesign bart.sk</p> 
            </div>
          </div>
          <div className="hidden" id="cat-alert">
            <AddCategory> </AddCategory>
          </div>
        </div>
        );
}
}

export default Home
