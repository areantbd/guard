import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  title: string,
  content: string,
  image: string,  
};


function CreatePost() {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Inputs>({
    mode: 'onBlur',  });
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    axios.post('http://localhost:3001/api/v1/posts/create', data)
      .then((data) => console.log(`Post ${data} created`))
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 pt-5 input-group d-flex flex-column container'>
      <div className="input-group mb-3">
        <span className="input-group-text"><i className='fa fa-tag fa-fw'></i></span>
        <input placeholder='Título' className={`form-control ${errors.title ? 'is-invalid' : ''}`} 
          {...register("title", {
            required: 'Es necesario un título',
            maxLength:  {
              value: 50, 
              message: 'El título no debe tener más de 100 caracteres.'
            }
          })} />
          {errors.title && (<div className='invalid-feedback'>{errors?.title?.message}</div>)}
      </div>

      <div className="input-group mb-3 ">
        <span className="input-group-text"><i className='fa fa-edit fa-fw'></i></span>
        <input placeholder='Contenido' className={`form-control ${errors.title ? 'is-invalid' : ''}`}  {...register("content", { required: 'Es necesario un contenido' })} />
        {errors.content && <div className='invalid-feedback'>{errors?.content?.message}</div>}
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"><i className='fa fa-image fa-fw'></i></span>
        <input placeholder='Url de la imagen' className='form-control' {...register("image")} />
      </div>

      {isValid && <button type='submit' className='btn btn-outline-light'>Enviar</button>}
    </form>
  );
}

export default CreatePost