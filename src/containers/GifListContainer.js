import React, {Component} from "react";
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component{
  state = {
    gifs: []
  }
  getGifs = (query = " ") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=t9yPJnbUjYG69NXWkcc2Bok2b4zp9NJb&rating=g`)
    .then((res) => res.json())
    .then((gifData) => {
      this.setState({
        gifs: gifData.data.map(gif => ({ url: gif.images.original.url}))
      })
    })
  }
  
  render() {
    return (
      <div>
        < GifSearch getGifs ={this.getGifs} />
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
  componentDidMount() {
    this.getGifs()
  }
}