import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from  './VideoList';
import VideoDetail from './VideoDetail';
require('dotenv').config();

const KEY =process.env.REACT_APP_KEY
console.log(KEY);

class App extends React.Component{


    componentDidMount(){
        this.onTermSubmit('high hopes')
    }

    state={videos:[],selectedVideo:null};


    onTermSubmit= async (term)=>{
        console.log("keyy",process.env.REACT_APP_KEY);
       const response = await youtube.get('/search',{
            params:{
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY
            }
        });
        // console.log(response.data.items)
        this.setState({videos:response.data.items,
        selectedVideo:response.data.items[3]})
    };

    onVideoSelect =(video)=>{
        // console.log("From the app!",video);
        this.setState({selectedVideo:video});
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} /></div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/></div>
                </div>
            
            </div>
        </div>
        )
    }
}

export default App;