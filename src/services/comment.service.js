export class CommentsApiService {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    getComments() {
        return fetch(this._url).then(value => value.json())
    }
}
