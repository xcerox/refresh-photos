import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/imageStore';


class ImageGrid extends Reflux.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.store = ImageStore;
    }

    render() {
        return (
            <div>
                {
                    this.state.imagelist.map((image, index) => 
                        <div key={index} className="image">
                            <a href={image.link}><img src={image.media.m} /></a>
                        </div>
                    ) 
                }
            </div>
        )
    }
}

export default ImageGrid;