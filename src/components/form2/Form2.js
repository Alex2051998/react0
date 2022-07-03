import React from 'react';
import {useForm} from "react-hook-form";

import {postService} from "../../services/Posts.service";

const Form2 = () => {
    let {register, handleSubmit} = useForm();


    const submit = (post) => {
        postService.pushPost(post).then(({data}) => console.log(data));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h3>Title</h3><input type={'text'} {...register('title')} />
                </div>
                <div>
                    <h3>Body</h3><input type={'text'} {...register('body')} />
                </div>
                <button>Send</button>
            </form>

        </div>
    );
};

export default Form2;