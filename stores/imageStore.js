/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/imageAction';

class ImageStore extends Reflux.Store {

    constructor() {
        super();
        this.state = {
            imagelist: []
        };
        this.listenables = ImageActions;
        this.url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    }

    onFetchList() {
        let me = this;
        let tags = ['animals', 'nature', 'food', 'travel', 'cars'];
        let randomtag = tags[Math.floor(Math.random() * tags.length)];

        $.ajax({
            url: me.url,
            dataType: 'jsonp',
            data: {format: "json", tags: randomtag},
            success: function (data) {
                me.setState({imagelist: data.items});
            }
        });
    }
}

export default ImageStore;