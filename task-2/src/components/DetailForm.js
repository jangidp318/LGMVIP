import React,{useState} from 'react';


export default function DetailForm(props) {

    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [website, setWebsite]=useState('');
    const [uploadedImg, setUploadedImg] = useState('');

    const handleChangeName = e =>{
        setName(e.target.value)
        e.target.value = ""
    }

    const handleChangeEmail = e =>{
        setEmail(e.target.value)
    }

    const handleChangeWebsite = e =>{
        setWebsite(e.target.value)
    }

    const handleImage=()=> {
        const image_input = document.querySelector("#image_input")
        image_input.addEventListner("change", function(){
            const reader =  new FileReader();
            reader.addEventListener("load", ()=>{
                setUploadedImg(reader.result);
                document.querySelector("#imgContainer").style.backgroundImage = `url(${uploadedImg})`;
                document.getElementById("dispImg").src = `${uploadedImg}`;
            })
        })
    }

    const handleSubmit = (e) =>{
        console.log(name)
        e.preventDefault();
        props.addData({
            "id":Math.floor(Math.random()*10000000),
            "name":name,
            "email":email,
            "website":website,
        })
        
    } 

    const handleClear = () => {
        setName('')
        setEmail('')
        setWebsite('')

    }

    return(
        <form>
        <table>
            <tr>
            <td><label for="name" className='name'>Name </label></td>
            <td><input type='text' onChange={handleChangeName} className='form-control input-group-sm'   value={name} ></input></td>
            </tr>
            <tr>
            <td><label for="email" className='email'>Email </label></td>
            <td><input type='email' onChange={handleChangeEmail} className='form-control' email='email' value={email}></input></td>
            </tr>
            <tr>
            <td><label for="email" className='website'>Website </label></td>
            <td><input type='text' onChange={handleChangeWebsite} className='form-control' email='website' value={website}></input></td>
            </tr>
            <tr>
            <td><label for="image" className='image'>Image </label></td>
            <td><input type='file' onChange={handleImage} id="image_input" accept="image/png, image/jpeg, image/jpg" className='form-control' ></input></td>
            </tr>
            <tr>
            <td ><label for="gender" className='gender'>Gender </label></td>
            <td>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html"> Male </label>
            <br/>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css"> Female </label>
            </td>
            </tr>
            <tr>
            <td><label for="skills" className='skills'>Skills </label></td>
            <td>
            <input type='checkbox'></input>
            <label> Java </label>
            <input type='checkbox'></input>
            <label> HTML </label>
            <input type='checkbox'></input>
            <label> CSS </label>
            </td>
            </tr>
            </table>
            <button className='btn btn-primary' onClick={handleSubmit} type='submit'>Enroll Student</button>
            <button className='btn btn-danger'  type='reset' onClick={handleClear}>Clear</button>
        </form>
    )
}