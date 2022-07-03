import {useForm} from "react-hook-form";

import {userService} from "../../services/Users.service";


const Form1 = () => {
    let {register, handleSubmit} = useForm();


    const submit = (user) => {
        userService.pushUser(user).then(({data}) => console.log(data));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <h3>Name</h3><input type={'text'} {...register('name')} />
                </div>
                <div>
                    <h3>Username</h3><input type={'text'} {...register('username')} />
                </div>
                <div>
                    <h3>Email</h3><input type={'text'} {...register('email')} />
                </div>
                <button>Send</button>
            </form>

        </div>
    );
};

export default Form1;